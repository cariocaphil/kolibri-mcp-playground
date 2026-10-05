# KoliBri MCP PoC 3

## Goal

Evaluate whether the KoliBri MCP server reduces the investigation effort required by an AI coding agent when implementing a small KoliBri form with a slightly more specific component requirement.

PoC 3 extends PoC 2 by adding a text area with a word counter.

The main question is:

> Does the MCP advantage observed in PoC 2 persist when the task requires discovering more component-specific KoliBri behavior?

## Hypothesis

The KoliBri MCP server should help the agent discover the appropriate KoliBri components and official usage patterns more directly.

However, the text-area word-counter requirement may require more detailed API knowledge than the basic form in PoC 2.

This makes it useful for testing whether the agent can obtain that information through MCP or still needs to inspect the installed KoliBri packages.

## Test Setup

Two runs are performed from the same starting point:

### Without MCP

Branch:

`test/kolibri-without-mcp-3`

The KoliBri MCP server is not configured.

### With MCP

Branch:

`test/kolibri-with-mcp-3`

The KoliBri MCP server is configured in `opencode.json`.

Both runs use:

- the same starting code
- the same prompt
- the same model
- a fresh OpenCode session
- Build mode
- no follow-up prompts

Model:

`mimo-v2.6-flash-free`

## Prompt

The exact prompt is stored in:

`docs/prompts/poc-3-en.md`

```text
Implement a small form in `src/App.tsx` using KoliBri components.

The form should contain:
- a text input
- a checkbox
- a text area with a word counter
- a submit button

Requirements:
- Use appropriate KoliBri components.
- Do not add new dependencies.
- Keep the implementation as small as possible.
- Verify that the project builds successfully.