# KoliBri MCP PoC

## Goal

Evaluate whether the official KoliBri MCP server improves an AI coding agent's ability to design and implement KoliBri-based frontend solutions.

Specifically: Does MCP access improve component selection, API correctness, accessibility, and architectural reasoning?

---

## Setup

- **Framework:** React + TypeScript + Vite
- **Component Library:** KoliBri
- **AI Agent:** OpenCode
- **LLM:** MiMo-V2.6-Flash Free
- **Repository:** `kolibri-mcp-playground`

---

## Experiment Setup

Both test cases use:

- The same starting Git commit
- The same prompt
- The same LLM
- The same OpenCode version
- The same dependencies

The only intended difference is access to the KoliBri MCP server.

The results of each OpenCode session are documented separately:

- `docs/results/without-mcp.md`
- `docs/results/with-mcp.md`

These files capture the agent's response, relevant tool usage, observations, and build result in addition to the generated code stored on the respective branches.

---

## Test Prompt

```text
Act as a frontend architect for this React application.

Design and implement a small accessible login feature in src/App.tsx using KoliBri components.

Requirements:
- Username field
- Password field
- Submit action
- Validation feedback
- Accessible labels and error handling
- No new dependencies
- Use KoliBri components that are appropriate and available for this use case

Before implementing:
1. Identify which KoliBri components are available and relevant
2. Explain the proposed component structure and why these components fit
3. Explain accessibility considerations
4. Document any API assumptions or uncertainties about KoliBri
5. Note if any required functionality appears to be unavailable and suggest fallbacks

Then implement the solution.
```

The prompt intentionally does not mention MCP so that it can be used unchanged in both test cases.

---

## Test Cases

### A — Without MCP

**Branch:** `test/kolibri-without-mcp`

OpenCode has access to the repository and its model knowledge, but no access to the KoliBri MCP server.

Session results are documented in `docs/results/without-mcp.md`.

### B — With MCP

**Branch:** `test/kolibri-with-mcp`

OpenCode has access to the same repository and model, plus the official KoliBri MCP server.

Session results are documented in `docs/results/with-mcp.md`.

---

## Evaluation

### 1. Component & API Correctness

- Are appropriate, existing KoliBri components used?
- Are props and events correct?
- Are any components or APIs hallucinated?
- Does `pnpm build` succeed?

### 2. Accessibility

- Are labels and validation errors handled appropriately?
- Is keyboard interaction supported?
- Are KoliBri accessibility patterns used correctly?

### 3. Architectural Reasoning

- Does the agent explain its component choices?
- Does it identify assumptions or uncertainties?
- Does MCP provide useful information that was missing without it?

### 4. Developer Experience

- How much manual correction or follow-up prompting is required?
- Does MCP make component/API discovery easier?
- Does MCP introduce additional complexity or limitations?

---

## Results

| Aspect | Without MCP | With MCP |
| --- | --- | --- |
| Component selection | | |
| API correctness | | |
| Accessibility | | |
| `pnpm build` | | |
| Hallucinations | | |
| Manual corrections | | |
| Architectural reasoning | | |

### MCP Usage

For Test Case B, document which MCP tools OpenCode called and what KoliBri information was retrieved.

---

## Conclusion

Answer the following based on the experiment:

- What improved with MCP?
- What did not improve?
- Did MCP introduce any drawbacks?
- Is KoliBri MCP useful for the intended AI-assisted frontend architecture workflow?

---

## Future Work

- Compare MCP with the existing internal KoliBri knowledge source
- Test a more complex frontend requirement
- Repeat the experiment with another LLM

---

## References

- **KoliBri Repository:** https://github.com/public-ui/kolibri
- **KoliBri MCP Package:** https://www.npmjs.com/package/@public-ui/mcp
- **Test Repository:** https://github.com/cariocaphil/kolibri-mcp-playground
