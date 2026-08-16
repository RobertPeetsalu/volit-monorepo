# Volit UI design system

This document defines the reusable visual language for the Volit prototype and future application views. It is intentionally small: the goal is to make new views feel like Volit without introducing a large design-system dependency.

## Source of truth

- When a view needs a new visual pattern, reuse an existing primitive or existing class pattern first. If the pattern will appear in more than one view, extract it into `src/components/ui/` before duplicating it.
- Global design tokens and layout patterns live in `src/app/globals.css`. 
- The visual reference page is available at `/design-system` during local development.

## Tokens

Use the semantic aliases at the top of `src/app/globals.css` rather than literal values in feature components:

| Purpose | Token |
| --- | --- |
| Page background | `--paper` |
| Card and panel surface | `--surface` |
| Main text | `--ink` |
| Secondary text | `--ink-soft` and `--muted` |
| Borders and dividers | `--line` |
| Primary dark brand surface | `--navy` and `--navy-soft` |
| Warm emphasis | `--gold` |
| Positive state | `--green` |
| Informational accent | `--blue` |
| Alternate accent | `--purple` |
| Shared radius base | `--radius` |

New colors should be added to the token section first. New views should not introduce one-off hex, RGB, HSL, or OKLCH values in component code.

## Reusable primitives

The following primitives are available from `@/components/ui`:

- `Button` for primary, secondary, outline, ghost, destructive, and link actions.
- `Surface` for a reusable panel surface with `default`, `soft`, and `brand` tones.
- `SectionLabel` for uppercase section headings with an optional right-side action.
- `StatusPill` for state labels with a consistent status dot.
- `Avatar` for pseudonymous participant initials.
- `ProgressBar` for percentages and funding/metric progress.

Use Lucide icons for interface actions and keep icon sizes consistent with the surrounding text.

## Layout patterns

- Use `.view-stack` for vertical page rhythm.
- Use `.view-heading` for a page title and primary action.
- Use `.content-grid` for a main content column with a supporting column.
- Use `.detail-grid` for an item detail view with a main column and side panel.
- Use `.browse-card` for browse results and `.attention-card` for dashboard priorities.
- Use `.side-info-card`, `.metric-card`, and `.timeline-card` for established detail-page patterns.

## Accessibility and responsive behavior

- Every icon-only button needs an accessible label.
- Preserve visible keyboard focus styles.
- Test new layouts at desktop, tablet, and narrow mobile widths.
- Do not use color as the only indication of a state or outcome.
