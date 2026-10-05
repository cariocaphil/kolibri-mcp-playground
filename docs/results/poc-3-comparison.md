Good — the working tree is clean again (the file I mistakenly created has been removed, respecting the "do not modify any files" instruction). Here is the evaluation as requested, delivered as a response rather than a committed file:

# KoliBri MCP PoC 3 Evaluation

**Method:** Compared `test/kolibri-without-mcp-3` vs `test/kolibri-with-mcp-3` using only `git show`/`git diff`/`git log` — no checkout, no file modification. Both session exports (4,142 and 1,548 lines) and all four stats JSON files were read in full.

## Experimental Setup

- Both branches start from the identical baseline `src/App.tsx` — confirmed by diffing each branch against the common ancestor commit (`062e8be`): both diffs apply to the same single-`KolButton` starting file.
- Both use the same prompt (`docs/prompts/poc-3-en.md`): a form with a text input, checkbox, **text area with a word counter**, and submit button; no new dependencies; keep it small; verify the build.
- Both use the same model (`mimo-v2.6-flash-free`, cost $0), a fresh OpenCode session, Build mode, no follow-ups.
- Only diff: `test/kolibri-with-mcp-3` adds `opencode.json` registering the remote KoliBri MCP server (`tools.kolibri.search` / `tools.kolibri.fetch`).
- The stats JSONs are **cumulative account-wide dashboards**, not per-run traces. The without-MCP run's "after" snapshot (`sessions:6, steps:374, calls:545`) is numerically identical to the with-MCP run's "before" snapshot — confirming the two runs happened back-to-back, without-MCP first. All figures below are `after − before` per branch, isolating each run's own contribution.

## Quantitative Results

| Metric | Without MCP (Δ) | With MCP (Δ) | Ratio (w/o : w/) |
|---|---|---|---|
| Steps | 49 | 24 | 2.0× |
| Input tokens | 63,070 | 25,932 | 2.4× |
| Output tokens | 7,825 | 2,166 | 3.6× |
| Reasoning tokens | 16,399 | 2,709 | 6.1× |
| Cache-read tokens | 1,610,176 | 331,072 | 4.9× |
| Total tool calls | 77 | 28 | 2.75× |
| — `shell` (local investigation) | 67 | 15 | 4.5× |
| — `execute` (MCP + sandbox JS) | 0 | 10 calls (7 productive `tools.kolibri.*` round trips across search/fetch; 3 returned errors — 2 own syntax mistakes, 1 bad-id lookup) | n/a |
| — `read` / `edit` / `write` | 5 / 3 / 2 | 1 / 1 / 1 | — |
| Final context usage | No literal field in either stats file; cache-read tokens are the closest proxy, ~4.9× larger without MCP | — | — |
| Build (`tsc -b && vite build`) | ✅ Pass | ✅ Pass | — |
| Lint (`eslint`) | ✅ Pass | ✅ Pass | — |
| Runtime verification | ✅ Built a throwaway CDP/headless-Chrome harness against `vite preview`; confirmed all 5 elements render and the counter updates live (`0 words → 4 words → 1 word`), submit doesn't reload | ❌ None — stopped at build + lint | — |

## Without MCP: Research Path

1. Read starting `App.tsx`/`package.json`.
2. `grep -o 'Kol[A-Za-z0-9]*' .../index.d.ts` to enumerate every exported KoliBri component.
3. Grepped `.d.ts` prop interfaces for `KolInputText`/`KolInputCheckbox`/`KolTextarea` (`_hasCounter`, `_maxLength`, `_maxLengthBehavior`).
4. Dug into **compiled source** to settle the word-vs-character question: `textarea/controller.js` (`validateHasCounter`), `shadow.js` ("Shows a character counter for the input element."), `counter-dom-updater`, and the i18n keys (`character-counter-current`, `character-counter-current-of-max`, …) — explicit textual confirmation that `_hasCounter` counts characters, concluding "No built-in word counter. So a custom word count is needed."
5. Checked `InputTypeOnDefault`/`EventValueOrEventCallback` typings for the `(event, value)` callback shape.
6. Wrote `App.tsx` (textarea controlled, word count shown via `_hint`), ran `pnpm build`/`pnpm lint` (clean).
7. Built a disposable CDP/headless-Chrome script against `pnpm preview`; confirmed live counter updates, then killed the server.

## With MCP: Research Path

1. Read `App.tsx`/`package.json` via `shell` (a first attempt to call `tools.shell` from inside the `execute` JS sandbox failed with a syntax error and was abandoned).
2. `tools.kolibri.search({query:"textarea word counter"})` → `sample/textarea/with-counter`, `sample/input-text/counter`, etc.
3. Batched `tools.kolibri.fetch` on `sample/textarea/with-counter`, `sample/input-text/basic`, `sample/input-checkbox/basic` — real source for all three.
4. `tools.kolibri.search({query:"form submit"})` → fetched `sample/form/basic` for the canonical `KolForm` + submit pattern.
5. A second batched fetch (including a bad id `sample/input-checkbox/partials/variants`) errored; fell back to fetching `sample/input-checkbox/get-value` and `sample/input-text/get-value` individually for the controlled `_on` pattern.
6. **Switched to local `shell`/`grep`** into `node_modules/@public-ui/components/dist/types/**` for `InputTypeOnDefault`/`EventValueOrEventCallback` and the `textarea.d.ts`/`input-checkbox.d.ts` prop interfaces — the same category of fact PoC 1/2 found MCP doesn't cover, just a lighter-touch version of it.
7. Wrote `App.tsx`, ran `pnpm build`/`pnpm lint` (clean). No runtime execution.

## What MCP Actually Changed

- **Component discovery was fast and MCP-first**: one `search` call surfaced exactly the relevant sample (`sample/textarea/with-counter`) plus form/checkbox/input samples, in a handful of calls — mirroring PoC 2.
- **MCP supplied real, runnable code** that was adapted close to verbatim into the final implementation (`KolTextarea _hasCounter`, `KolForm`+`KolButton _type="submit"`, controlled `_on` wiring).
- **MCP did not supply the character-vs-word distinction.** The `sample/textarea/with-counter` description returned by MCP only says it "contrasts soft vs. hard `_maxLength`... and the optional `_hasCounter`" — it never states the counter counts *characters*. The with-MCP agent asserted "KoliBri's `_hasCounter` counts characters, not words" immediately after reading that sample, with no supporting evidence from MCP or from anything it had read locally up to that point.
- **Local type-level investigation was still required** for the `_on` callback signature and full prop surfaces — the same category PoC 1/2 identified as outside MCP's coverage.
- Net effect: MCP supplemented, but did not replace, local source/type investigation — consistent with PoC 1 and PoC 2.

## Word Counter Discovery

- **Without MCP:** established via **concrete, cited local evidence** — compiled `controller.js`/`shadow.js`/`counter-dom-updater` and the i18n key list (`'character-counter-current'`, …) — explicitly concluding a custom word counter is needed.
- **With MCP:** the same conclusion appears in the transcript, but **the fetched sample text does not say "characters"** anywhere, and no i18n file, controller source, or doc content confirming "characters" appears in the with-MCP transcript before the claim is made. It reads as asserted prior knowledge rather than something retrieved in-session.
- **On "did MCP help determine this?" — no clear evidence that it did.** The without-MCP run's conclusion is better-evidenced *within its own transcript* for this specific fact, even though both runs reached the same correct design decision.
- Both agents converged on the same resolution: don't rely on `_hasCounter` for the word count; derive `{words} words` from component state instead. (The with-MCP draft briefly included `_hasCounter` before removing it in a later edit; the without-MCP draft never added it.)

## Implementation Quality

| | Without MCP | With MCP |
|---|---|---|
| Components | `KolForm`, `KolInputText`, `KolInputCheckbox`, `KolTextarea`, `KolButton` | Same five |
| Controlled state | Only `message` (minimum needed for the counter) | `name`, `subscribed`, `message` all controlled, plus an `onSubmit` handler |
| Word-count display | `_hint` on `KolTextarea` — dynamic, and exposed via `aria-describedby` | Plain `<p>{words} words</p>` — not associated with the field for assistive tech |
| Minimality vs. prompt | Closer to literal minimality | Slightly larger than strictly required |
| Build/lint | Pass | Pass |
| Runtime verification | Headless-Chrome/CDP smoke test | None |

Both are functionally and semantically correct. The accessibility nuance (`_hint` vs. `<p>`) and the runtime-verification gap are agent-behavior differences, not MCP capability differences — KoliBri MCP offers no runtime-testing tool in either condition.

## Comparison with PoC 1 and PoC 2

| | PoC 1 (login form) | PoC 2 (simple form) | PoC 3 (form + word counter) |
|---|---|---|---|
| Tool-call ratio (w/o : w/) | ~140 : ~238 — **MCP used *more*** | 70 : 14 (~5×) | 77 : 28 (~2.75×) |
| Reasoning-token ratio | not isolated | ~27× | ~6× |
| Cache-read ratio | not isolated | ~13× | ~4.9× |
| Local source digging with MCP? | Heavy (compiled `.js`, locale, focus delegation) | Minimal (one export-list check) | Moderate (`.d.ts` grepping for callback signatures/props) — more than PoC 2, less than PoC 1 |
| Runtime verification | Only without-MCP | Only without-MCP | Only without-MCP — now 3/3 |

**Measured trend:** MCP's efficiency advantage was absent/negative in PoC 1, strong (~5×) in PoC 2 on a task matching a canonical sample, and present-but-reduced (~2–3×, except ~6× for reasoning tokens) in PoC 3 once a specific component-behavior question (words vs. characters) was introduced. This is directionally consistent with the PoC 3 hypothesis: **the PoC 2 advantage does not fully persist, but it doesn't disappear either.** This rests on one run per condition per PoC.

## Limitations

- One run per condition across three PoCs — no statistical basis to separate signal from variance.
- Tool/token counts are a weak proxy for quality — the cheaper run also skipped runtime verification.
- The decisive "characters not words" fact was not clearly sourced from MCP in the with-MCP run; this could reflect MCP's content, the model's prior training knowledge, or both — the transcript can't distinguish.
- Stats are cumulative snapshots; deltas isolate each run correctly, but there is no literal final-context-size field — cache-read tokens are only an approximate proxy.
- Runtime verification is a behavioral choice, not an MCP capability, so its absence with-MCP cannot be attributed to MCP.
- No comparison yet against KoliBri's existing internal knowledge source (outstanding since PoC 1).

## Conclusion

1. **Did MCP provide practical value in PoC 3?** Yes, but narrower than in PoC 2 — roughly 2–3× fewer tool calls/steps/tokens for an equally correct, buildable implementation.
2. **What evidence supports that?** The measured deltas table and the research-path transcripts: MCP's `search` returned on-point samples in 1–2 calls, adapted nearly verbatim into the final code.
3. **Did the PoC 2 advantage persist?** Only partially — ratios shrank from ~5× (tool calls), ~27× (reasoning tokens), ~13× (cache reads) in PoC 2 down to ~2.75×, ~6×, ~4.9× respectively in PoC 3. The direction held; the magnitude did not.
4. **What did the agent still need to investigate locally despite MCP?** The `_on` callback signature and full optional-prop surfaces via `.d.ts` grepping — and, notably, the specific "characters not words" fact was not clearly obtained from either MCP or local inspection; it appears asserted from prior model knowledge.
5. **What can and cannot be concluded from the three PoCs?** MCP has never replaced local `node_modules` investigation across PoC 1–3; it has consistently supplemented it, with highly variable net effect on efficiency (a loss in PoC 1, a strong gain in PoC 2, a moderate gain in PoC 3). This is consistent with MCP being most efficient when a task maps closely onto an existing sample, less decisively so when it requires reasoning about specific runtime/semantic behavior. None of this generalizes beyond these three single runs.