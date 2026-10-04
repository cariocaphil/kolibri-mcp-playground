# KoliBri MCP PoC 2

## Goal

Evaluate whether access to the official KoliBri MCP server helps an AI coding
agent use KoliBri components correctly and efficiently.

This second PoC deliberately uses a smaller and more focused task than the
first PoC. The goal is to reduce architectural decisions and focus primarily
on KoliBri component discovery and correct API usage.

## Research Question

Does access to the KoliBri MCP server help an AI coding agent:

- identify appropriate KoliBri components
- use their APIs correctly
- reduce local package/source investigation
- reduce overall investigation effort
- work more efficiently in terms of tokens and context usage

## Test Setup

Both runs use:

- the same starting code
- the same OpenCode version
- the same model
- the same prompt
- a fresh OpenCode session

The only intended experimental difference is whether the KoliBri MCP server
is available to the agent.

### Without MCP

Branch:

`test/kolibri-2-without-mcp`

The KoliBri MCP server is not available.

### With MCP

Branch:

`test/kolibri-2-with-mcp`

The KoliBri MCP server is available.

## Prompt

The exact prompt is stored separately to ensure that the same input is used
for both runs.

- `docs/prompts/poc-2-en.md` — canonical prompt used for the experiment
- `docs/prompts/poc-2-de.md` — German translation for documentation

## Measurements

For each run, record:

- input tokens
- output tokens
- reasoning tokens
- cache reads
- final context usage
- number of steps
- total tool calls
- MCP tool calls
- local search/read calls
- runtime

Token and tool statistics are collected from OpenCode rather than estimated
by the model.

## Evaluation

The comparison should consider both implementation quality and investigation
effort.

In particular:

- Were appropriate KoliBri components selected?
- Were the KoliBri APIs used correctly?
- Which information sources did the agent use?
- Which information was obtained through MCP?
- Which information still required local package/source inspection?
- Did MCP calls replace local investigation or add to it?
- How did token usage, context usage and tool usage differ?

## Scope

This is a small controlled PoC, not a general benchmark of the KoliBri MCP
server.

The results describe the behavior observed for this task, model and tool
setup and should not be generalized beyond that without additional tests.