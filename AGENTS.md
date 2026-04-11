# AGENTS.md

## Purpose

This file defines the default working agreement for agents operating in this repository.

It is written for agent consumption. Its purpose is to keep work consistent across chats and across agents while this project is still at an early stage.

## Instruction Precedence

Apply instructions in this order:

1. System instructions.
2. Developer instructions.
3. Direct user instructions in the current chat.
4. This `AGENTS.md`.

If a higher-priority instruction conflicts with this file, follow the higher-priority instruction.

## Default Workflow

For each new feature or non-functional requirement, follow this sequence by default:

1. Clarify the request until the goal, scope, constraints, and success criteria are concrete enough to act on.
2. Inspect the current repository state before making assumptions.
3. If the task is likely to change tracked project files, create a feature branch before editing, unless the user explicitly says not to.
4. Assess impact across behavior, security, architecture, frontend, backend, database schema, tests, configuration, and deployment.
5. Update behavior-defining documentation first when needed.
6. Plan implementation before editing code when the change is non-trivial or spans multiple layers.
7. Implement in small, self-contained changes.
8. Commit meaningful checkpoints when the task includes multiple separable changes.
9. Run relevant local validation and fix failures that are in scope.
10. Perform a PR-style self-review before asking Robert to review.

Proceed autonomously unless a confirmation point in this file applies or the user asks for a different level of involvement.

## Decision Rules

Use a risk-based workflow rather than a rigid always-run checklist.

### `use-cases.md`

Update `use-cases.md` when the task changes user-visible behavior, supported workflows, actor capabilities, or success outcomes of a use case.

Do not update it for purely internal refactors, tooling work, or implementation details that do not change expected behavior.

### `architecture.md`

Update or create `architecture.md` only when the task materially changes technical design, major components, system boundaries, integrations, data flow, trust boundaries, or operational architecture.

Do not create or update it for isolated copy changes, minor UI polish, or small internal fixes that do not affect system design.

### Security Review

Perform an explicit security review when the task affects any of the following:

- authentication or identity
- authorization or permissions
- input validation or file upload
- persistence of user-controlled data
- external integrations or third-party services
- secrets, keys, tokens, or credentials
- abuse resistance, rate limits, spam, fraud, or moderation
- sensitive, personal, financial, or legally relevant data

The review should identify relevant risks, constraints, and implementation implications before or during implementation, depending on task size.

### Frontend, Backend, and Schema Planning

Plan frontend changes when the task affects user-facing flows, layout, interaction design, states, navigation, or accessibility.

Plan backend changes when the task affects APIs, server behavior, business logic, jobs, integrations, permissions, or validation.

Plan database schema changes when the task affects stored data shape, constraints, indexes, migrations, or data lifecycle.

For small, low-risk tasks, a single integrated implementation plan is sufficient. Separate frontend and backend plans only when doing so improves clarity.

### Tests

Write or update tests as part of implementation whenever behavior can be validated automatically.

Prefer tests before implementation when the behavior is well understood and test-first work reduces risk.

Use judgment for exploratory work, documentation-only changes, and UI polish that does not map cleanly to strict TDD.

Update automated UI tests when user flows, visible states, or interaction paths change. Do not require UI test changes for internal-only work.

## Confirmation Points

Ask Robert to confirm `use-cases.md` changes before implementation when behavior definitions change.

Ask Robert to confirm frontend plans before implementation when:

- the task is user-facing and involves visible UX decisions
- the request is ambiguous in ways that materially affect the interface
- there are meaningful tradeoffs in flow, layout, or interaction design

If no confirmation point applies, proceed autonomously.

## Git and Commit Policy

Branching:

- Create a feature branch before making tracked-file changes by default.
- Do not create a branch for pure planning, analysis, or review-only work.
- If the user explicitly says not to create a branch, proceed on the current branch.

Branch cleanup:

- Treat deletion of old merged branches as periodic repository hygiene, not a required step for every feature.

Commits:

- Prefer small, meaningful, self-contained commits.
- Do not create a commit for every tiny edit.
- If the task is simple and results in one coherent change, one commit is sufficient.

Never rewrite or discard user changes unless explicitly instructed to do so.

## Testing Policy

Before asking Robert to review, run the relevant local checks that exist for the affected scope when feasible.

Examples include unit tests, integration tests, automated UI tests, type checks, linting, build checks, or targeted manual verification.

If a relevant check cannot be run, document the gap clearly along with the reason.

If a failing check is caused by unrelated pre-existing issues, report that explicitly instead of masking it.

## PR-Style Self-Review

Before asking Robert to review, complete this checkpoint:

1. Read the diff end-to-end.
2. Confirm that relevant tests and checks pass, or clearly report what was not run and why.
3. Review migration, configuration, deployment, and security impact.
4. Confirm the implementation matches the agreed scope.
5. Prepare a concise summary of what changed and why.

If the change is not ready by these criteria, keep working or clearly report the blocker.

## Current Repo Context

At the time this file was created, the repository is in an early planning stage.

Current known state:

- `use-cases.md` exists and defines how use cases should be documented.
- `intent.md` exists and describes the product intent and domain.
- `architecture.md` does not yet exist.
- There is no confirmed application code, schema, test harness, CI pipeline, or PR template in the repository yet.
- The repository currently uses `main` and may not yet follow a mature branching model.

Agents should treat this context as a starting point and verify the current repo state at the start of each task.
