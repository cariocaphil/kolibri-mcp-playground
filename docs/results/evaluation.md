# KoliBri MCP PoC — Independent Evaluation

**Scope:** Compared `test/kolibri-without-mcp` vs `test/kolibri-with-mcp` against the `poc/kolibri-mcp` baseline, using `git show`/`git diff`/`git log` only (no checkout, no modification). Both transcripts (13,663 and 18,496 lines respectively) were inspected via targeted search rather than full reads.

---

## 1. Component & API Correctness

Both implementations use the **same core component set**: `KolForm`, `KolInputText`, `KolInputPassword`, `KolButton`, `KolAlert`, with `_errorList`/`focusErrorList()` for the error summary and `_msg`/`_touched` for per-field errors.

| | Without MCP | With MCP |
|---|---|---|
| Extra components | `KolCard` (wraps the form, `_level={2}` heading) | None — plain `<h1>Sign in</h1>`, inline styles instead of `App.css` |
| Props/events used | `_type`, `_label`, `_required`, `_autoComplete`, `_visibilityToggle`, `_on={{onInput, onBlur}}`, `ref.focusErrorList()` | Same set |
| Hallucinated/incorrect APIs in **shipped code** | None found | None found |
| Build (`tsc -b && vite build`) | ✅ Pass | ✅ Pass |
| Lint (`eslint`) | ✅ Pass | ✅ Pass |
| Runtime verification | Actually ran the app (see §4) | Static only — not executed |
| Unverified claim in reasoning | `KolCard` final tsx file: 203:
```
203:         </KolCard>
```
"`KolMessage` (deprecated in favour of `KolAlert`)" stated in the final write-up with no prior investigation trail — appears to be an unverified/unprovenanced claim, not grounded in anything the session actually looked up | No equivalent unverified claim found; the final answer's assumptions table cites a specific source file for every claim |

Both implementations correctly identified `_errorList` must be objects `{message, selector}` (the TS validator only documents strings, but the renderer accepts objects — both sessions independently discovered and verified this discrepancy by reading the compiled Stencil source, not via MCP).

## 2. Accessibility

Both are accessibility-equivalent in substance: real `<label for>` association, `aria-invalid`/`aria-describedby` wiring, `role="alert"` messages, `_autoComplete="username"`/`"current-password"`, `_visibilityToggle` on the password field, and the `KolForm` error-summary + `focusErrorList()` pattern. No meaningful accessibility gap was found between the two.

One difference: the with-mcp session surfaced a more detailed accessibility caveat for `_ariaDetails` — "supported by desktop screen readers (NVDA, JAWS…), not yet supported by mobile (TalkBack, VoiceOver iOS)". Importantly, **this exact sentence also exists verbatim in the local `.d.ts` JSDoc** and was independently found by the without-mcp session via local `grep` — so this is documentation that happens to be duplicated between MCP and local types, not information exclusive to MCP.

Neither implementation set `setLocale('en')`, so KoliBri renders German strings by default in both ("Bitte korrigieren Sie folgende Fehler:", "einblenden" for the password toggle). This is an environment/setup characteristic of the baseline, **not caused by either implementation** — but only the without-mcp session actually *discovered* it, because it ran the app (see §4).

## 3. Architectural Reasoning

Both sessions produced detailed, well-justified write-ups (component table, structure diagram, accessibility rationale, assumptions/fallbacks table) and both did unusually deep verification against the *compiled* KoliBri source (Stencil controllers, `delegateFocus`, `FormFieldStateWrapper`) rather than trusting documentation at face value — this rigor appears to be a trait of the model/prompt, present in **both** conditions, not something MCP uniquely enabled.

One attributable difference: the with-mcp session fetched `scenario/sample-form-with-validation`, which showed KoliBri's **official** validation pattern uses `react-hook-form` + `zod` + `@public-ui/react-hook-form-adapter`. It cited this directly in its assumptions table ("KoliBri's official validation scenario uses react-hook-form + Zod — Confirmed — unavailable (no new deps) → Hand-rolled state machine…"). The without-mcp session never mentioned `react-hook-form` or any adapter package anywhere in its transcript. This is the clearest case in the whole experiment of **MCP-sourced information visibly strengthening a documented architectural justification** (though the resulting code decision — hand-rolled validation — was the same in both, since "no new deps" forced it either way).

The with-mcp session also spent considerably more visible deliberation on whether to use `KolHeading`/`KolCard` (dozens of back-and-forth lines) before discarding both in favor of plain HTML — more exploratory reasoning did not translate into a richer final structure.

## 4. Developer Experience

| | Without MCP | With MCP |
|---|---|---|
| Local source/type inspection | Heavy (`shell`/`grep`/`cat` into `node_modules`, 117 shell calls) | Heavier in absolute terms: 95 `grep` + 60 `read` + 7 `glob` + 52 `shell` = 214 local-inspection calls |
| MCP calls | N/A | 22 of 24 `execute` calls invoked `tools.kolibri.*` |
| Total tool calls (approx.) | ~140 | ~238 |
| Transcript length | 13,663 lines | 18,496 lines (+35%) |
| Tool failures/retries | `google-chrome`/`chromium` not found → fell back to macOS `Google Chrome.app` CLI headless mode | `fetch_template` → "Template not found… use `search_templates`"; several zero-result MCP searches (see §5) |
| Runtime verification | **Built a temporary headless-Chrome harness** (`verify.html`/`verify.tsx`, `--dump-dom --virtual-time-budget`), simulated empty submit → error list + focus, then valid submit → success alert; deleted the harness afterward | None — explicitly stated "Static verification only (no browser run here)" and "If it misbehaves, drop `_value`…" as a hedge |

Contrary to what the PoC's goal statement anticipates, **investigation effort did not decrease with MCP available** — the with-mcp session made more total tool calls, produced a longer transcript, and still relied on local source digging for the large majority of its evidence (grep into `node_modules/@public-ui/components/dist/collection/...` for controller internals, `_touched`/`_msg` gating logic, autocomplete validators, etc.). MCP's spec/sample fetches supplemented but did not replace that local digging. This should be read as an observation about this one run, not a general property of MCP (see Limitations).

## 5. MCP Usage (Test B specifics)

**Tools called:** `tools.kolibri.search({query, kind, limit})` and `tools.kolibri.fetch({id})`. One attempted call to a non-existent `tools.kolibri.fetch_template` failed cleanly with a corrective error message ("Template not found… Use `search_templates`"); the agent did not retry `search_templates` and simply switched to `fetch`, which worked.

**What was searched/fetched:**
- `search`: "input field form", "button submit", "form validation error message", "error list" (0 results), "InputEventValueDemo" (0 results), "InputTypeOnInput onInput callback type" doc search (0 results), "login" (returned irrelevant link/card samples), "controlled input value state react form", "form submit button required validation"
- `fetch`: `spec/input-text`, `spec/input-password`, `spec/button`, `spec/form`, `spec/alert`, `sample/form/basic`, `sample/form/error-list`, `scenario/scenarios/sample-form-with-validation`, `sample/input-text/message-types`

**Useful, actionable results:** The `spec/*` fetches returned clean, complete property tables (props, types, defaults, methods, slots) equivalent to generated API docs — these were directly usable and were quoted/filtered in-session. The `scenario/sample-form-with-validation` fetch surfaced the `react-hook-form-adapter` pattern that fed into the final assumptions table (§3) — the one clear case of an MCP result traceable to a documented decision.

**Unusable/failed results:**
- `search({query:"error list", kind:"spec"})` → 0 results (the real doc exists at `spec/form`, just not matched by that query — all indexed items have `"description":"N/A"`, so search appears to be matching mostly on name/id, not semantic content)
- `search({query:"InputEventValueDemo", kind:"sample"})` → 0 results
- `search({query:"InputTypeOnInput onInput callback type", kind:"doc"})` → 0 results (no `doc` kind results at all for TS type-level questions)
- `fetch_template` → tool/endpoint doesn't exist as called

**What still required local inspection:** Every behavioral/runtime question — the exact shape of the `onInput(event, value)` callback, how `_touched`/`_msg` gate message visibility, whether `_errorList` objects are honored despite the validator's string-only type, shadow-DOM form-submission propagation, `delegateFocus` behavior, locale strings — was resolved by `grep`/`read` into `node_modules/@public-ui/components/dist/**`, not MCP. The MCP index covers **declarative docs/specs/samples/scenarios** well; it does not cover TypeScript type internals, compiled component behavior, or i18n strings, all of which the with-mcp agent still had to dig for itself.

**Information sourcing breakdown:**
1. **Via MCP:** component prop tables (specs), the "official" form sample, the react-hook-form+zod validation scenario, message-type sample
2. **Via local source/package inspection:** everything about actual runtime behavior — controller internals, `_touched`/`_msg` gating, focus delegation, locale/i18n strings, aria-describedby wiring, `_errorList` object-vs-string discrepancy
3. **General model knowledge:** HTML form-association-across-shadow-DOM semantics, autocomplete token standards, React controlled-input/cursor-position reasoning (both sessions reasoned about this from general web-platform knowledge, with varying confidence, in both conditions)

## Comparison

| Aspect | Without MCP | With MCP | Observed MCP Impact |
| --- | --- | --- | --- |
| Component selection | `KolForm`, `KolInputText`, `KolInputPassword`, `KolButton`, `KolAlert`, `KolCard` | Same core set, no `KolCard`/`KolHeading` in final code | No clear difference — both selections are valid; the extra `KolCard` is a stylistic choice, not an MCP effect |
| API correctness | Correct; props/events verified against compiled source | Correct; props/events verified against compiled source | No clear difference |
| Accessibility | Equivalent pattern (labels, `aria-invalid`, error summary, focus management) | Equivalent pattern | No clear difference |
| Build/runtime verification | `tsc`/`eslint`/`vite build` pass **and** actual headless-browser DOM verification of both failure and success paths | `tsc`/`eslint`/`vite build` pass; no runtime execution, explicitly flagged as a gap | Not attributable to MCP — reflects agent choice/persistence in this run, not MCP availability |
| Hallucinations/API mistakes | One unverified historical claim ("KolMessage deprecated") in the write-up, not reflected in code | None found | Slight edge to with-mcp on this one point, but sample size is too small to generalize |
| Knowledge acquisition | From local `node_modules` type/source digging + general knowledge only | From MCP spec/sample fetches *plus* equally heavy local digging | MCP added a convenient, pre-formatted doc source but did not replace local inspection |
| Investigation effort | ~140 tool calls, 13.7k-line transcript | ~238 tool calls (22 MCP, 214 local), 18.5k-line transcript | Increased total effort in this run; MCP calls were a small fraction of total tool use |
| Architectural reasoning | Thorough, source-grounded, includes an unverified aside | Thorough, source-grounded; one claim (react-hook-form+zod pattern) explicitly traceable to an MCP fetch | MCP strengthened one specific justification (the "unavailable official pattern" fallback note) |

## Key Findings

**1. MCP supplied one traceable, decision-relevant fact: the "official" validation pattern.**
Evidence: `tools.kolibri.fetch({id: "scenario/scenarios/sample-form-with-validation"})` returned a scenario using `react-hook-form` + `zod` + `@public-ui/react-hook-form-adapter`; the with-mcp final answer's assumptions table cites this explicitly ("KoliBri's official validation scenario uses react-hook-form + Zod — Confirmed — unavailable (no new deps)"). The without-mcp session never mentions these packages. Why it matters: this is the single cleanest example in the whole experiment of an MCP result being connected to a documented reasoning step — exactly the kind of evidence the evaluation asked to look for.

**2. MCP access did not reduce investigation effort in this run — if anything, total tool-call volume and transcript length increased.**
Evidence: with-mcp used ~238 tool calls (22 of them MCP) vs. ~140 for without-mcp; the with-mcp transcript is ~35% longer. Why it matters: it directly contradicts the PoC's implicit expectation that MCP eases discovery; at minimum it shows MCP's spec/sample index did not substitute for digging into compiled component source for behavioral questions, in this model/task combination.

**3. The most significant real-world discovery (German-locale default) came from runtime testing, not from either MCP or static source reading.**
Evidence: the without-mcp session built a temporary headless-Chrome harness and observed "Bitte korrigieren Sie folgende Fehler:" and "einblenden" rendered live; the with-mcp session only grepped the English locale file and assumed English, explicitly flagging that it "could only verify [this] statically." Why it matters: this is a genuine environment/setup characteristic (missing `setLocale('en')` call in `main.tsx`, present on the baseline and inherited by both branches) that neither implementation fixed, and MCP provides no mechanism to catch it — only live execution did. This difference is attributable to agent behavior/thoroughness, not to MCP's presence or absence.

**4. MCP's search index has real gaps: empty descriptions and no coverage of TypeScript type-level or i18n questions.**
Evidence: `search({query:"error list"})` returned 0 results despite `spec/form` being the relevant document; `search({kind:"doc", query:"InputTypeOnInput onInput callback type"})` returned 0 results; a call to a non-existent `fetch_template` tool failed. Why it matters: for a tool whose main differentiator should be fast, relevant retrieval, these are concrete, reproducible friction points — not fatal, but they explain why the with-mcp agent still had to fall back to local `grep` for most behavioral questions.

**5. Some information MCP returned (`spec/input-password`'s `_ariaDetails` accessibility notes) is duplicated in local `.d.ts` JSDoc comments and was found independently by the without-mcp session.**
Evidence: the identical sentence ("Supported by desktop screen readers (NVDA, JAWS…)…") appears in both transcripts, sourced from MCP in one case and from local type-definition comments in the other. Why it matters: at least some of KoliBri MCP's content isn't exclusive — it's a repackaging of information already shipped in the npm package's own type declarations, which a sufficiently persistent agent can find without MCP.

## What KoliBri MCP Added

- **Useful information provided:** clean, pre-formatted property tables for `input-text`, `input-password`, `button`, `form`, `alert` (props/types/defaults/methods/slots); the official `sample/form/basic` and `message-types` samples; the `sample-form-with-validation` scenario revealing the `react-hook-form-adapter` package.
- **Information that influenced an implementation decision:** the react-hook-form+zod scenario, which was explicitly cited to justify the hand-rolled-validation fallback (though the fallback itself was forced by the "no new deps" constraint regardless).
- **Information that could not easily be obtained from MCP:** anything about actual runtime/compiled behavior — `onInput` callback argument shape, `_touched`/`_msg` visibility gating, shadow-DOM form submission propagation, `focusErrorList()` timing, locale/i18n strings, the `_errorList` type-vs-runtime discrepancy. All of these required `node_modules` source inspection in the with-mcp session too.
- **Areas where local source inspection was still necessary:** essentially all behavioral/runtime verification (§4, §5) — MCP's index appears to cover docs/specs/samples/scenarios only, not compiled component internals or type declarations.
- **Errors/friction from MCP usage:** one failed tool call (`fetch_template`, recovered immediately), three zero-result searches (`"error list"`, `"InputEventValueDemo"`, a `doc`-kind type query), and generally sparse search metadata (`"description":"N/A"` on every indexed item), which likely explains the weak relevance of some keyword searches (e.g., `"login"` returning link/card samples instead of form samples).

## Limitations

This experiment supports narrow, specific observations only — not general conclusions about KoliBri MCP:

- **One task** (a small login form), **one implementation model** (MiMo-V2.6-Flash Free), **one run per condition**. There is no statistical basis to separate signal from model/sampling variance.
- **No repetition**: a second with-mcp or without-mcp run could plausibly reach a different conclusion (e.g., choose to actually run a headless browser, or not dig as deeply into compiled source), since both sessions show the model is willing to go very deep when it wants to — the depth difference observed here may be incidental to this particular run rather than a stable effect of MCP presence/absence.
- **Agent-behavior confound**: the single most consequential difference observed (headless-browser runtime verification happening in without-mcp but not with-mcp) is a behavioral choice unrelated to MCP's capabilities — MCP does not offer a runtime-testing tool in this setup, so its presence/absence cannot explain this difference either way.
- **Tool-call volume is a weak proxy for effort/quality**: the with-mcp session made more total calls but produced a comparably correct, comparably accessible implementation — more calls did not translate to a better or worse outcome here.
- **No comparison yet with KoliBri's existing internal knowledge source**, as the PoC's own "Future Work" section notes — this evaluation cannot say whether MCP outperforms, underperforms, or duplicates that resource.
- **Session timestamps in the with-mcp transcript metadata ("Created"/"Updated" four seconds apart) are clearly not real elapsed-time data** and were not used for any runtime/duration comparison in this evaluation.

## Conclusion

1. **What concrete value did KoliBri MCP add compared with the baseline?** One traceable contribution: it surfaced the official `react-hook-form-adapter` validation scenario, which the with-mcp session cited directly to justify its validation-approach fallback. Beyond that, MCP provided convenient, pre-formatted component spec tables that were used but whose content substantially overlaps with information obtainable from the npm package's own type declarations.
2. **Which useful KoliBri information did MCP provide?** Component property/method/slot tables for `input-text`, `input-password`, `button`, `form`, `alert`; official form/validation samples and scenarios.
3. **Did MCP appear to improve the resulting implementation?** No clear improvement in correctness, accessibility, or component selection — both implementations are functionally and accessibility-equivalent and both build/lint cleanly. If anything, the without-mcp implementation did more (and more conclusive) runtime verification work, which is unrelated to MCP.
4. **Did MCP reduce or increase the agent's investigation effort?** In this run, it did not reduce it — the with-mcp session issued more total tool calls and produced a longer transcript, with the large majority of its investigation still going through local `grep`/`read` into `node_modules` rather than MCP.
5. **What limitations or problems were observed when using MCP?** Sparse/empty search metadata, several zero-result searches for reasonable queries (including one for the actual topic "error list"), one call to a non-existent tool (`fetch_template`), and no coverage of TypeScript type-level or compiled-behavior/i18n questions, all of which still required direct source inspection.
6. **Where does KoliBri MCP appear useful, and where does it provide little additional value?** Useful for a fast, structured first pass at component props/defaults/samples. Little additional value for runtime-behavior questions, type-level API details, or i18n/locale specifics — these require local package inspection regardless of MCP availability, and that is exactly what the with-mcp session ended up doing most of the time.
7. **What should be tested next before drawing a broader conclusion?** Repeat both conditions multiple times to separate agent-behavior variance from MCP effects; test a task where component discovery (not implementation-detail verification) is the main bottleneck, since that is where MCP's search/fetch tools are best suited; compare against the existing internal KoliBri knowledge source as the PoC's own "Future Work" specifies; and control for whether runtime verification (headless browser) is performed in both conditions, since that single behavioral choice drove the largest observed quality difference in this PoC.

**Overall assessment:** In this single OpenCode + MiMo-V2.6-Flash run, KoliBri MCP functioned as a convenient, correctly-answering documentation lookup tool that supplied at least one piece of information (the official react-hook-form validation pattern) that visibly strengthened the agent's architectural justification — a genuine but narrow win. It did not measurably improve component correctness, accessibility, or build success (both runs were already correct), and it did not reduce the agent's reliance on direct local source inspection, which remained the dominant investigation method in both conditions. The practical usefulness demonstrated here is real but modest, and-grade conclusions about KoliBri MCP's value should wait for repeated runs and a comparison against the existing internal KoliBri knowledge source.