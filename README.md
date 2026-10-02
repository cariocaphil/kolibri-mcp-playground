# KoliBri MCP Playground

React + TypeScript + Vite playground used to evaluate whether the [official KoliBri MCP server](https://www.npmjs.com/package/@public-ui/mcp) helps an AI coding agent (OpenCode + MiMo-V2.6-Flash Free) design and implement KoliBri UI.

`main` is the repo entry point. Experiment definition, transcripts, and the evaluation live on other branches (linked below).

## Branches

| Branch | Role |
| --- | --- |
| [`main`](https://github.com/cariocaphil/kolibri-mcp-playground/tree/main) | Entry point and this README |
| [`poc/kolibri-mcp`](https://github.com/cariocaphil/kolibri-mcp-playground/tree/poc/kolibri-mcp) | Neutral experiment baseline (PoC docs + evaluation) |
| [`test/kolibri-without-mcp`](https://github.com/cariocaphil/kolibri-mcp-playground/tree/test/kolibri-without-mcp) | Same prompt, no KoliBri MCP |
| [`test/kolibri-with-mcp`](https://github.com/cariocaphil/kolibri-mcp-playground/tree/test/kolibri-with-mcp) | Same prompt, with KoliBri MCP (`opencode.json`) |

Both test runs started from the same commit, prompt, model, OpenCode version, and dependency versions. The only intended difference was MCP access.

## Docs (on `poc/kolibri-mcp`)

- [PoC definition](https://github.com/cariocaphil/kolibri-mcp-playground/blob/poc/kolibri-mcp/docs/kolibri-mcp-poc.md)
- [Independent evaluation](https://github.com/cariocaphil/kolibri-mcp-playground/blob/poc/kolibri-mcp/docs/results/evaluation.md)

Session transcripts are on the test branches:

- [Without MCP](https://github.com/cariocaphil/kolibri-mcp-playground/blob/test/kolibri-without-mcp/docs/results/without-mcp-session.md)
- [With MCP](https://github.com/cariocaphil/kolibri-mcp-playground/blob/test/kolibri-with-mcp/docs/results/with-mcp-session.md)

## Outcome (one run, one task)

From the evaluation on `poc/kolibri-mcp`:

- Both runs produced a correct, accessible KoliBri login form that built and linted cleanly. No clear MCP win on component selection, API correctness, or accessibility.
- MCP did provide useful specs/samples; one fetch (the official react-hook-form validation scenario) visibly strengthened architectural reasoning in the with-MCP run.
- Investigation effort did **not** drop with MCP in this run — local `node_modules` inspection remained the main evidence source, and total tool-call volume was higher with MCP.
- MCP search friction (empty `description` metadata, weak discovery for type-level / i18n questions) still forced fall back to package source.
- Largest quality difference (headless runtime verification only in the without-MCP run) was agent behavior, not MCP availability.

This is **one login-form task, one model, one run per condition**. Do not treat it as a general verdict on KoliBri MCP. See the evaluation for evidence, limitations, and next tests.

## Run locally

```bash
pnpm install
pnpm dev
```

On the test branches, the login UI is a **client-side demo**: any values that pass field validation succeed; nothing is authenticated or sent to a backend.
