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
| Decorative borders and dividers | `--line` |
| Control borders | `--control-border` |
| Primary dark brand surface | `--navy` and `--navy-soft` |
| Warm emphasis fill | `--gold` |
| Warm emphasis text | `--gold-foreground` |
| Positive state fill | `--green` |
| Positive state text | `--green-foreground` |
| Informational accent fill | `--blue` |
| Informational accent text | `--blue-foreground` |
| Alternate accent fill | `--purple` |
| Alternate accent text | `--purple-foreground` |
| Keyboard focus | `--focus` and `--focus-on-dark` |
| Shared radius base | `--radius` |
| Recurring surfaces | `--surface-soft`, `--surface-subtle`, `--surface-success`, `--surface-warning`, `--surface-purple`, `--surface-blue` |
| Recurring text roles | `--text-subtle`, `--text-muted`, `--text-meta`, `--text-ui`, `--text-strong`, `--text-success` |
| Recurring border roles | `--border-soft`, `--border-subtle`, `--border-hover` |

Typography uses relative, readable defaults: `--font-size-body` is 1rem, supporting text is 0.875rem, labels and metadata are 0.75rem, and body line height is 1.5. Meaningful text must not be reduced below 0.75rem. Accent fill tokens are not safe as text colors on light surfaces; use their `*-foreground` aliases for text. 

New colors should be added to the token section first. New views should not introduce one-off hex, RGB, HSL, or OKLCH values in component code.

## Reusable primitives

The following primitives are available from `@/components/ui`:

- `Button` for primary, secondary, outline, ghost, destructive, and link actions.
- `Surface` for a reusable panel surface with `default`, `soft`, and `brand` tones.
- `SectionLabel` for uppercase section headings with an optional right-side action. Use `as="h2"` or `as="h3"` when the label represents a real heading.
- `StatusPill` for state labels with a consistent status dot.
- `Avatar` for pseudonymous participant initials. Provide `label` unless the avatar is explicitly decorative.
- `ProgressBar` for percentages and funding/metric progress. Provide a meaningful `label` describing what the percentage measures.
- `Breadcrumbs` for the current location within the application shell.
- `Modal` for dialogs and overlays. It provides dialog semantics, Escape dismissal, focus containment, focus restoration, and a shared backdrop/close control.
- `Toast` for short-lived status feedback with a polite live region.

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
- Use `--ink`, `--ink-soft`, `--muted`, or the accent `*-foreground` tokens for text. Do not use light accent fills as text colors on light surfaces.
- Use `--control-border` for borders that identify an interactive control; reserve `--line` for decorative dividers.
- Keep meaningful text at or above the shared 0.75rem label size, and use the body/supporting sizes for readable content.
- Future dialogs and modal overlays must expose dialog semantics, move focus into the dialog, keep focus inside while open, support Escape dismissal where appropriate, and return focus to the invoking control when closed.
- Test new layouts at desktop, tablet, and narrow mobile widths.
- Do not use color as the only indication of a state or outcome.
