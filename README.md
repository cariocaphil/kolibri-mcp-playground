# KoliBri MCP Playground

React + TypeScript + Vite playground used to evaluate whether the [official KoliBri MCP server](https://www.npmjs.com/package/@public-ui/mcp) helps an AI coding agent (OpenCode + MiMo-V2.6-Flash Free) design and implement KoliBri UI.

`main` is the repo entry point. Experiment definitions, transcripts, and evaluations live on other branches (linked below).

## Branches

| Branch | Role |
| --- | --- |
| [`main`](https://github.com/cariocaphil/kolibri-mcp-playground/tree/main) | Entry point and this README |
| [`poc/kolibri-mcp`](https://github.com/cariocaphil/kolibri-mcp-playground/tree/poc/kolibri-mcp) | PoC 1 definition + evaluation (login form) |
| [`test/kolibri-without-mcp`](https://github.com/cariocaphil/kolibri-mcp-playground/tree/test/kolibri-without-mcp) | PoC 1 — same prompt, no KoliBri MCP |
| [`test/kolibri-with-mcp`](https://github.com/cariocaphil/kolibri-mcp-playground/tree/test/kolibri-with-mcp) | PoC 1 — same prompt, with KoliBri MCP (`opencode.json`) |
| [`poc/kolibri-mcp-2`](https://github.com/cariocaphil/kolibri-mcp-playground/tree/poc/kolibri-mcp-2) | PoC 2 definition + comparison (basic form) |
| [`test/kolibri-wihout-mcp-2`](https://github.com/cariocaphil/kolibri-mcp-playground/tree/test/kolibri-wihout-mcp-2) | PoC 2 — same prompt, no KoliBri MCP |
| [`test/kolibri-with-mcp-2`](https://github.com/cariocaphil/kolibri-mcp-playground/tree/test/kolibri-with-mcp-2) | PoC 2 — same prompt, with KoliBri MCP (`opencode.json`) |

Within each PoC, both test runs started from the same commit, prompt, model, OpenCode version, and dependency versions. The only intended difference was MCP access.

## PoC 1 — login form

Docs on `poc/kolibri-mcp`:

- [PoC definition](https://github.com/cariocaphil/kolibri-mcp-playground/blob/poc/kolibri-mcp/docs/kolibri-mcp-poc.md)
- [Independent evaluation](https://github.com/cariocaphil/kolibri-mcp-playground/blob/poc/kolibri-mcp/docs/results/evaluation.md)

Session transcripts:

- [Without MCP](https://github.com/cariocaphil/kolibri-mcp-playground/blob/test/kolibri-without-mcp/docs/results/without-mcp-session.md)
- [With MCP](https://github.com/cariocaphil/kolibri-mcp-playground/blob/test/kolibri-with-mcp/docs/results/with-mcp-session.md)

**Outcome (one run, one task):** Both runs produced a correct, accessible KoliBri login form that built and linted cleanly. No clear MCP win on component selection, API correctness, or accessibility. MCP did provide useful specs/samples (notably the official react-hook-form validation scenario), but investigation effort did **not** drop — local `node_modules` inspection remained the main evidence source, and total tool-call volume was higher with MCP. Largest quality difference (headless runtime verification only without MCP) was agent behavior, not MCP availability.

## PoC 2 — basic form

Smaller, more focused task than PoC 1: reduce architectural decisions and focus on component discovery and correct API usage.

Docs on `poc/kolibri-mcp-2`:

- [PoC definition](https://github.com/cariocaphil/kolibri-mcp-playground/blob/poc/kolibri-mcp-2/docs/kolibri-mcp-poc-2.md)
- [Comparison](https://github.com/cariocaphil/kolibri-mcp-playground/blob/poc/kolibri-mcp-2/docs/results/poc-2-comparison.md)
- Prompts: [EN](https://github.com/cariocaphil/kolibri-mcp-playground/blob/poc/kolibri-mcp-2/docs/prompts/poc-2-en.md) · [DE](https://github.com/cariocaphil/kolibri-mcp-playground/blob/poc/kolibri-mcp-2/docs/prompts/poc-2-de.md)

Session transcripts:

- [Without MCP](https://github.com/cariocaphil/kolibri-mcp-playground/blob/test/kolibri-wihout-mcp-2/docs/results/poc-2-without-mcp-session.md)
- [With MCP](https://github.com/cariocaphil/kolibri-mcp-playground/blob/test/kolibri-with-mcp-2/docs/results/poc-2-with-mcp-session.md)

**Outcome (one run, one task):** Both runs produced a correct, buildable form with the same core components (`KolForm`, `KolInputText`, `KolInputCheckbox`, `KolButton`). Here MCP **did** shorten discovery: roughly a fifth of the steps, tool calls, and reasoning tokens vs. reverse-engineering compiled source. Final correctness was comparable; the main observed benefit was efficiency when an official sample matched the task. Even with MCP, a quick local export-list check was still needed. Without MCP compensated with deeper runtime verification in headless Chrome.

## Across both PoCs

Together, these runs suggest KoliBri MCP’s practical value is mainly **reducing investigation overhead for component discovery and composition when a matching official sample exists** — not necessarily producing a more correct final UI on these tasks. PoC 1 (larger login form with validation) did not show an efficiency win; PoC 2 (small, well-sampled form) did. Neither is a general verdict. See each evaluation for evidence and limitations.

## Run locally

```bash
pnpm install
pnpm dev
```

On the test branches, the UI is a **client-side demo**: values that pass field validation succeed; nothing is authenticated or sent to a backend.
