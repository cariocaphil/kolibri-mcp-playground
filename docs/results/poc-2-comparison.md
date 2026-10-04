Setup (measured, from docs/kolibri-mcp-poc-2.md + opencode.json diff)
Same prompt (docs/prompts/poc-2-en.md), same model (mimo-v2.6-flash-free, cost $0 both runs), same starting src/App.tsx.
Only diff: test/kolibri-with-mcp-2 adds opencode.json registering a remote MCP server (https://public-ui-kolibri-mcp.vercel.app/mcp) exposing tools.kolibri.search / tools.kolibri.fetch. The without-MCP branch has no such config.
Both runs happened back-to-back on the same OpenCode usage history (without-MCP's "after" stats equal with-MCP's "before" stats exactly), so I computed each run's own effort as after − before rather than trusting the raw totals.
1. Implementation quality & KoliBri correctness
Measured — final diffs are nearly identical:

// with-mcp (src/App.tsx)
<KolForm _on={{ onSubmit: (event) => console.log('submitted:', event) }}>
  <KolInputText _label="Name" />
  <KolInputCheckbox _label="Accept terms" />
  <KolButton _label="Submit" _variant="primary" _type="submit" />
</KolForm>
// without-mcp (src/App.tsx)
<KolForm _on={{ onSubmit: () => console.log('submitted') }}>
  <KolInputText _label="Name" _name="name" />
  <KolInputCheckbox _label="Subscribe to the newsletter" _name="subscribe" />
  <KolButton _label="Submit" _type="submit" />
</KolForm>
Both use the correct KoliBri components (KolForm, KolInputText, KolInputCheckbox, KolButton with _type="submit"), both pass pnpm build and pnpm lint on their respective branches. Minor differences: the with-MCP version is a near-verbatim copy of KoliBri's own sample/form/basic (including _variant="primary"); the without-MCP version additionally adds _name attributes (a self-motivated best practice, not required by the prompt and not present in the official sample either).

Measured — verification depth differs: the without-MCP run went further than "build succeeds" — it spun up pnpm preview, drove headless Chrome, and scripted a DOM test confirming the custom elements hydrate, the text input accepts typed input, the checkbox toggles, and _on.onSubmit actually fires on click. The with-MCP run stopped at build+lint.

Interpretation: both implementations look correct. The with-MCP run's confidence rests on copying an official, presumably-correct sample; the without-MCP run's confidence rests on empirically exercising the rendered component. Neither is proven "more correct" than the other from this evidence alone — just arrived at via different kinds of proof.

2. Research path: with vs. without MCP
Measured sequence, with MCP (5 execute calls, batched): kolibri.search for "input text form" / "checkbox" / "form" → kolibri.fetch the input-checkbox/basic sample + more searches → kolibri.fetch on form/basic, input-text/basic, button/basic, input-text/get-value → one more fetch on input-checkbox/get-value. In parallel it still ran a few local shell commands: listing node_modules/@public-ui/react-v19/dist, grepping index.d.ts for the full Kol* export list, and reading main.tsx to confirm component registration — then wrote the file and ran build/lint.

Measured sequence, without MCP (63 shell calls): started the same way (list exports from .d.ts), then progressively dug into node_modules/@public-ui/components/dist/types/components.d.ts and schema/**/*.d.ts for prop interfaces, then into the compiled JS implementation (collection/components/{form,button,input-text}/{component,controller,shadow}.js, input-adapter-leanup/associated.controller.js, @deprecated/input/controller.js) to understand how _type="submit" on KolButton propagates a submit event up through shadow-DOM boundaries to KolForm. It also checked README.md/docs for any usage guidance (found none specific), then wrote the file, built/linted, and finally built the headless-Chrome runtime check described above.

Interpretation: with MCP, discovery was front-loaded into a handful of semantic searches/fetches against curated official samples. Without MCP, the agent reconstructed the same understanding by reverse-engineering compiled source across multiple internal controller classes — a materially more roundabout path to the same conclusion.

3. Token usage, tool calls, steps (measured deltas, this run only)
Metric	without-MCP run	with-MCP run
Steps
48
10
Tool calls (total / failed)
70 / 0
14 / 0
Input tokens
44,659
16,510
Output tokens
5,890
1,260
Reasoning tokens
11,654
428
Cache-read tokens
1,316,224
99,968
shell calls
63
7
execute calls (incl. MCP)
0
5 (containing 7 search + 3 fetch)
read / write / edit
3 / 2 / 2
1 / 1 / 0
Caveat (measured limitation, not interpretation): the stats files are cumulative dashboard snapshots (before/after), not a per-step trace, so there is no direct "final context size" field. The numbers above are deltas across the whole single-prompt run, not the size of the last request. Cache-read volume is the closest proxy for how much accumulated context was being carried through the run, and it is ~13× larger without MCP — consistent with that run's much longer tool-call chain, but not a literal "final context" measurement.

Interpretation: on this one task, the with-MCP run used roughly a fifth of the steps/tool-calls/reasoning tokens of the without-MCP run. This is a large gap, but it reflects one run of each condition on one small, well-known task (a form); it should not be read as a general multiplier.

4. What MCP concretely helped with
Returned ranked, relevant official sample code for "checkbox", "form", and "input-text" queries in one or two calls, including a complete working KolForm + KolInputText + KolButton composition (sample/form/basic) that could be adapted almost directly.
Avoided the need to open and interpret compiled JS controller logic to understand how submit propagation works — the official sample already encoded the correct, working pattern.
5. What still required local package/source investigation (both runs)
Even with MCP, the agent fell back to grep-ing node_modules/@public-ui/react-v19/dist/index.d.ts to get the authoritative list of exported component names, and read src/main.tsx to confirm the component library was registered — MCP's search tool wasn't used (or didn't exist) for "list all available components."
Without MCP, essentially all component discovery, prop shapes, and submit-event semantics came from local .d.ts and compiled .js source inspection, plus an original runtime test harness built from scratch to validate behavior.
Conclusion
Across these two single runs, the KoliBri MCP server measurably shortened the path from "blank task" to a correct, buildable form — fewer steps, fewer tool calls, and far less reasoning/token spend than digging through compiled source. The quality of the two resulting implementations was comparable: both picked the right KoliBri components and both built and linted cleanly, so MCP's main observed benefit here was efficiency of discovery, not a difference in final correctness. Even with MCP available, the agent still needed one quick local check to confirm the component package's actual exported names — MCP's sample search did not fully replace local source-of-truth lookups. The without-MCP run compensated for its lack of official examples by reverse-engineering internal submit-propagation logic and then proving behavior empirically with a headless-browser test, which is a more expensive but also more directly verified path to confidence. Because this is one run per condition on one narrow, well-represented task (a basic form), the ~4–5x gap in steps and tokens is a data point, not a reliable multiplier for harder or less-sample-covered KoliBri tasks. Together, the two PoCs suggest the KoliBri MCP server's practical value lies primarily in reducing investigation overhead for component discovery and correct composition, provided a matching official sample exists. Whether that efficiency gain persists for components or interaction patterns not well covered by existing samples remains untested by this pair of runs.