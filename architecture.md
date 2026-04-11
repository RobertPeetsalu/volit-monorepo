# Volit Architecture

## Purpose

This document records the current architectural direction for Volit.

Volit is intended to become a secure, intuitive, maintainable web application for continuous liquid democracy. It is expected to support pseudonymous but strongly verified participation in proposing, reviewing, prioritizing, funding, and voting on public matters.

Because this domain is unusually sensitive, architecture decisions must optimize not only for product delivery speed, but also for auditability, correctness, security, and long-term evolvability.

## Current Architecture Direction

Volit will initially be built as a web application with:

- `Next.js` as the frontend application framework
- `Vercel` as the hosting and deployment platform
- `Convex` as the initial backend application platform and database
- `shadcn/ui`, `Tailwind CSS`, `Lucide`, and the `Caffeine` theme for the user interface
- `pnpm` as the package manager
- `GitHub` as the source hosting and collaboration platform

The repository should remain simple unless a clear architectural need emerges. The project does not need a monorepo build orchestrator at the start.

## Architectural Principles

The following principles apply to all future design decisions:

1. Public governance data must be auditable and exportable.
2. Critical decision logic must be deterministic and independently recomputable.
3. Identity verification, authorization, and public pseudonymous activity must remain clearly separated.
4. The system must avoid unnecessary vendor lock-in in critical governance flows.
5. Security, correctness, and traceability take priority over short-term implementation convenience in high-trust areas such as voting, delegation, enactment, and institutional authority.

## Approved V1 Stack

### Frontend and Deployment

`Next.js` on `Vercel` is the approved frontend and deployment baseline.

Reasons:

- strong fit for agent-assisted development
- mature deployment workflow with preview environments
- strong compatibility between framework and hosting platform
- good long-term maintainability for a TypeScript web application

This combination is appropriate for building and iterating on Volit as a serious prototype and early production system.

### Backend and Database

`Convex` is approved as the initial backend and database platform.

Reasons:

- backend functions, schema, and data access are expressed as code
- good developer experience for rapid iteration
- strong fit for reactive application features and collaborative workflows
- good compatibility with a `Next.js` frontend

Constraint:

`Convex` is an approved v1 choice, not yet a permanent commitment for the final long-term governance core. If future requirements demand stronger guarantees around event sourcing, independent verification, storage model control, or infrastructure portability, this decision may be revisited.

### UI Stack

`shadcn/ui`, `Tailwind CSS`, `Lucide`, and the `Caffeine` theme are approved for the UI layer.

Reasons:

- good maintainability and composability
- strong support for agent-assisted development
- direct ownership of UI code instead of dependence on a heavily abstracted component library
- sufficient flexibility for a distinct product identity as the application matures

### Package Management and Source Control

`pnpm` is the approved package manager.

`GitHub` is the approved source hosting platform for versioning, collaboration, and open source distribution.

## Deferred Structural Choice

### Turborepo

`Turborepo` is not part of the initial stack.

Reason:

The repository does not yet contain multiple apps or shared packages that justify monorepo orchestration overhead.

Reconsider `Turborepo` when at least one of the following becomes true:

- a second application is introduced
- shared UI, domain, or identity packages emerge
- independent build and test pipelines are needed across multiple packages

Until then, prefer a simpler single-application repository structure.

## Identity and Authentication

Authentication is planned around `OID4VP` using `walt.id`.

Adjustment:

Target the current `walt.id Verifier2` approach and `OID4VP 1.0`, rather than older verifier flows.

Intended role of identity:

- verify that a participant is an eligible citizen or otherwise eligible actor
- support strong authentication without requiring public disclosure of the participant's civil identity
- preserve a stable trustful pseudonym for participation within Volit

Architectural requirement:

Identity verification must remain distinct from public application identity. The application may rely on verified claims and a stable pseudonymous identifier, but it should minimize storage and propagation of real-world identifying data.

## Signatures and Content Integrity

`Ed25519` signatures are approved for domain-level signing of critical user actions and authored content.

`tweetnacl` is an acceptable cryptographic primitive library for Ed25519-related operations at this stage.

Adjustment:

Do not use `did-jwt` as the default envelope for most application content or domain events.

Instead:

- reserve JWT-based formats for identity and credential protocols where JWT is already the standard
- represent critical application actions as well-defined domain payloads or append-only events
- sign canonicalized payloads where signatures are required for auditability or non-repudiation

This keeps domain integrity mechanisms aligned with the application's governance model rather than overfitting core records to token formats designed for transport and identity assertions.

## Governance-Grade Guardrails

The chosen stack is acceptable only if the implementation preserves the following architectural guardrails:

- append-only auditable history for critical governance actions
- deterministic computation of delegations, vote weights, and outcomes
- clear distinction between mutable projections and authoritative records
- exportability of public governance data
- backups and recovery processes not dependent on a single hosting provider
- careful handling of authorization boundaries for moderators, lawyers, election managers, and voters
- explicit review of abuse resistance, coercion resistance, privacy leakage, and fraud risks in identity-linked flows

These requirements are more important than convenience features of any specific framework or platform.

## Known Limitations of the Initial Stack

The approved stack is suitable for early implementation, but it does not by itself make the system sufficient for legally binding state governance.

In particular, the project will still need to prove or design for:

- formal auditability of outcomes
- dispute handling and recount procedures
- operational resilience and disaster recovery
- data portability and independent verification
- legal and institutional compliance in the jurisdiction that adopts the system
- an eventual path to greater infrastructure sovereignty if required

## Current Repository State

At the time of writing:

- `intent.md` describes the high-level product and political intent
- `use-cases.md` exists but does not yet contain detailed use cases
- `AGENTS.md` defines the default agent workflow for this repository
- there is no confirmed application code, test harness, or deployment configuration in the repository yet

Future architecture decisions should be added to this document as the implementation becomes concrete.
