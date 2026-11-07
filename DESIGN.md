---
name: Douglas Maia
description: An engineer's graph-paper notebook (caderno quadriculado), with ballpoint-blue ink, a red margin rule, and everything snapped to a 24px cell.
colors:
  ballpoint-ink: "#1d3aa6"
  ink-wash: "#1d3aa614"
  margin-red: "#dc4436"
  notebook-paper: "#fbfcfe"
  grid-blue: "#dde7f3"
  navy-text: "#15213d"
  pencil-muted: "#4b5877"
  rule-line: "#15213d"
  night-paper: "#0e1730"
  night-grid: "#19274a"
  night-ink: "#93b2ff"
  night-ink-wash: "#93b2ff1f"
  night-text: "#e7ecf8"
  night-muted: "#a6b2cc"
  night-margin-red: "#ff7262"
typography:
  display:
    fontFamily: "Schibsted Grotesk Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3.5rem, 10vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Schibsted Grotesk Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2rem, 4.5vw, 3rem)"
    fontWeight: 800
    lineHeight: "48px"
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Schibsted Grotesk Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.375rem, 2.6vw, 1.75rem)"
    fontWeight: 800
    lineHeight: "36px"
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Schibsted Grotesk Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: "24px"
    fontFeature: "'ss01'"
  prose:
    fontFamily: "Schibsted Grotesk Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "JetBrains Mono Variable, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: "24px"
    letterSpacing: "0.02em"
rounded:
  none: "0px"
spacing:
  half-cell: "12px"
  cell: "24px"
  section: "144px"
  margin-desktop: "168px"
  margin-mobile: "36px"
components:
  chip:
    backgroundColor: "transparent"
    textColor: "{colors.ballpoint-ink}"
    rounded: "{rounded.none}"
    padding: "0 12px"
    height: "24px"
  chip-hover:
    backgroundColor: "{colors.ink-wash}"
    textColor: "{colors.ballpoint-ink}"
  chip-pressed:
    backgroundColor: "{colors.ballpoint-ink}"
    textColor: "{colors.notebook-paper}"
  ink-box:
    backgroundColor: "{colors.notebook-paper}"
    textColor: "{colors.navy-text}"
    rounded: "{rounded.none}"
    padding: "24px"
  ink-box-link-hover:
    backgroundColor: "{colors.ink-wash}"
  ink-link:
    textColor: "{colors.ballpoint-ink}"
  margin-note:
    textColor: "{colors.margin-red}"
    typography: "{typography.label}"
  nav:
    backgroundColor: "{colors.notebook-paper}"
    textColor: "{colors.pencil-muted}"
    height: "72px"
---

# Design System: Douglas Maia

## Overview

**Creative North Star: "The Caderno Quadriculado"**

Every page is a sheet of an engineer's graph-paper notebook: cool white paper, a faint blue 24px grid drawn across the whole canvas, one red margin rule fixed at the left edge, and a single ballpoint-blue ink for anything you can act on. Navy-black carries reading text. The page is not decorated; it is written on. Dates, counts and statuses live in the margin column in small red monospaced numerals, the way a pen notes things beside the work.

Density is calm and vertical. Each page region holds one subject, and the empty grid around it is left charged rather than filled. Every vertical measure, line-height and gap resolves to a multiple or half of the cell, so text sits on the grid lines. Components are square-cornered boxes drawn with 1.5–2px ink strokes. The world has no shadows, gradients, glass or rounded corners. Motion is ink being drawn: rules stroke in, responses unroll top-down, and nothing floats.

At night the same notebook is used under lamp light: navy paper, dark-blue grid, pale-blue ink, coral margin rule. Structure and roles stay identical; only the values swap.

**Key Characteristics:**
- Full-canvas 24px graph grid on paper, with a fixed 2px red margin rule.
- Two-column sheet: margin column (7 cells desktop, 1.5 cells mobile) plus writing column (max 50 cells).
- One ink hue carries text links, chips, boxes and action; red is reserved for the margin, focus and active state.
- Square corners, 1.5–2px solid strokes, zero elevation.
- Heavy-weight grotesk headings with tight tracking; monospace only for margin notes, code and the API playground.
- Stroke-reveal motion on a single expo-out curve; everything is legible with motion off.

## Colors

One ink, one red pen, and paper. The palette is a ballpoint notebook, not a brand swatch set.

### Primary
- **Ballpoint Ink** (`ballpoint-ink`): the only action color. Links, chips, box strokes, project tech lines, nav hover/current, JSON keys, selection background, scrollbar thumb, blog prose links and bullets. Text that is not actionable does not use it, apart from the one-line role under the hero name.
- **Ink Wash** (`ink-wash`, ink at ~8% alpha): the hover fill for chips and linked ink-boxes, and the background of inline code in prose. It is the only tint in the system.

### Secondary
- **Margin Red** (`margin-red`): the margin rule itself, margin notes (dates, read-times, statuses, contact channel names), the 2px focus ring, the active-language marker, the nav current underline, the `GET` verb and 404 status in the playground, and ordered-list counters in prose.

### Neutral
- **Notebook Paper** (`notebook-paper`): page and every box background. Boxes are opaque paper, never tinted surfaces.
- **Grid Blue** (`grid-blue`): the 1px background grid lines, and the hairline dividers between list rows and stack groups.
- **Navy Text** (`navy-text`): body and heading text.
- **Rule Line** (`rule-line`, same value as navy text): heavy 2px structural rules (section-title underline, post-row tops, footer top, nav border once scrolled, `pre` borders in prose).
- **Pencil Muted** (`pencil-muted`): secondary text: roles, descriptions, intro paragraphs, nav at rest, playground meta.

Night variants (`night-*`) map one-to-one onto these roles under `[data-theme='dark']`.

### Named Rules
**The One Ink Rule.** Ballpoint Ink is the only hue that means "you can act on this". No second accent, no per-section colors.

**The Red Pen Rule.** Margin Red appears only in the margin, as focus, or as an active/error state. It never fills a surface and never carries body text.

## Typography

**Display Font:** Schibsted Grotesk Variable (with ui-sans-serif, system-ui)
**Body Font:** Schibsted Grotesk Variable, stylistic set `ss01` on
**Label/Mono Font:** JetBrains Mono Variable (with ui-monospace)

**Character:** A sturdy, slightly editorial grotesk pushed to weight 800 with negative tracking for headings, against a plain technical mono used the way a pen writes numbers in the margin.

### Hierarchy
- **Display** (800, clamp(3.5rem, 10vw, 6rem), 0.95, -0.04em): one per page, the hero name and the blog index title. Post titles use a smaller step (clamp(2.25rem, 6vw, 4rem), 1.05, -0.035em).
- **Headline** (800, clamp(2rem, 4.5vw, 3rem), 2 cells, -0.035em): section titles, always with the drawn underline rule.
- **Title** (800, clamp(1.375rem, 2.6vw, 1.75rem) to 2.5rem for project names, 1.5–2 cell leading, tight tracking): post rows, companies, projects, stack detail.
- **Body** (400, 1.0625rem, 24px = one cell): all running text, measure 34–44rem. Blog prose steps up to 1.125rem / 1.75.
- **Label** (400, 0.75rem mono, 24px, 0.02em): margin notes, tech lists, playground status, read-time and tags.

### Named Rules
**The Baseline Rule.** Line-heights are cell multiples (24px, 36px, 48px, 60px). If a new size can't sit on the grid, choose its leading so it does.

**The Mono Means Data Rule.** Monospace is for dates, counts, routes, code and tech names. Prose, headings and buttons stay in the grotesk.

## Layout

The page is a stack of **sheets**: each row is a two-column grid with a margin column (`7 × cell` = 168px on desktop, `1.5 × cell` on mobile under 768px) and a writing column capped at 50 cells (1200px), with 1 cell of left padding and 3 cells of right padding (1 on mobile). Content that belongs in the margin (dates, counts, statuses, channel names) occupies column 1, right-aligned. On mobile, margin content drops into the writing column after the row's content, left-aligned, or is hidden where it would repeat.

Spacing is counted in cells: half-cell (12px) inside components, one cell between related elements, 3–4 cells above a page's first content, 6 cells (144px) between home sections. Two-up compositions (hero + playground, stack chips + detail box) use `minmax(0,1fr)` + a fixed 22–30rem column with a 3-cell gap, collapsing to one column below `lg`. The header is 3 cells tall and sticky. On small screens primary nav moves to a fixed bottom bar.

## Elevation & Depth

The system is flat. There are no box shadows, gradients or blurs anywhere; depth comes from opaque paper boxes drawn with ink strokes over the grid, and from rule weight (1px grid < 1.5px divider < 2px structural rule). The sticky header is opaque paper so the grid underneath never ghosts through; it gains a 2px rule line only once the page scrolls.

### Named Rules
**The Drawn Not Lifted Rule.** A surface is separated by a stroke, never by a shadow or a tint.

**The Overprint Exception.** The one offset in the system is the Stack overprint: when a tech is selected, the names of places that used it get a `3px 3px 0` text-shadow of ink at 30%, like a second print layer slightly off-register. It is a state, scoped to that cross-reference, never a resting decoration and never on boxes.

## Shapes

Every corner is square (0px), including chips, boxes, images, `pre` blocks and the focus ring. Strokes are solid: 2px for boxes, structural rules and image frames; 1.5px for chips and list dividers; 1px only for the background grid. Bulleted notes use a short 10×2px ink dash instead of a dot. Project screenshots sit in a 3:2 frame with a 2px rule-line border.

## Components

### Chips
Square, cell-tall toggles that read like boxes ticked in a notebook.
- **Style:** transparent, 1.5px ink stroke, ink text, 0.875rem, height one cell, half-cell horizontal padding.
- **State:** hover fills with Ink Wash; `aria-pressed="true"` fills solid ink with paper text. Used as stack selectors, blog tag filters, playground route presets (mono, xs) and post tags (as links). Transitions are 160ms ease-out on color only.

### Cards / Containers (Ink Box)
- **Corner Style:** square (0px).
- **Background:** Notebook Paper, opaque.
- **Shadow Strategy:** none (see Elevation).
- **Border:** 2px Ballpoint Ink.
- **Internal Padding:** one cell. Internal divisions are full-width 2px ink rules.
- **Linked variant:** previous/next post boxes fill with Ink Wash on hover.

### Inputs / Fields
- **Style:** the playground request line: no box, transparent field on a 2px ink underline, mono 0.875rem, red `GET` label, red caret.
- **Focus:** the global 2px Margin Red outline, offset 3px.
- **Error:** status text turns Margin Red (`404 Not Found`).

### Links
- **Ink link:** ink text, weight 600, underline at 35% ink, offset 0.22em, 1.5px; hover brings the underline to full ink. Arrow icons (16px) follow and nudge 2–6px on hover.
- **Row links:** whole post rows and contact rows are links; the title shifts from navy to ink on hover and the trailing arrow translates right.

### Navigation
- **Style:** sticky 72px opaque paper bar on the sheet grid; name at left in 800 weight, links in pencil-muted at 0.9375rem.
- **States:** hover to ink; current section gets ink, weight 600 and a 2px red underline that draws in from the left (300ms). Language switch is mono `PT / EN` with the active locale in bold red.
- **Mobile:** links move to a fixed bottom bar, four equal columns, 2px rule line on top.

### Post Row (signature)
The writing index entry: date in the margin as a red mono note, a 1.5px rule line across the writing column, the title in title weight, the description in muted text, then a mono read-time and ink `#tags`. The homepage's latest-post band is the same row at a larger step with a 2px rule.

### Margin Note (signature)
Mono 0.75rem in Margin Red, right-aligned in the margin column, on the cell baseline. Carries dates, read-times, counts, project status and contact channel names, in their natural case.

### Section Title (signature)
Headline type with a 2px rule-line underline offset half a cell below; on motion-safe browsers the rule scales in from the left (900ms, expo-out) when the section enters view. Content is never hidden waiting for the animation.

### API Playground (signature)
An ink box holding a request line, preset route chips, a status/timing strip and a fixed-height (13 cells) JSON response. Keys are ink, punctuation muted, numbers red, and any route string is itself a runnable underlined link. New responses unroll with a top-down clip reveal (420ms).

## Do's and Don'ts

### Do:
- **Do** put every new row inside the sheet grid so its content shares the margin column and the writing column's left edge.
- **Do** size line-heights and vertical gaps in cells or half-cells (24px / 12px).
- **Do** use Ballpoint Ink for every interactive element and Margin Red only for margin notes, focus, the active marker and errors.
- **Do** draw containers with 2px ink strokes on opaque paper, square-cornered.
- **Do** animate with stroke or clip reveals on `cubic-bezier(0.16, 1, 0.3, 1)`, and render the finished state when `prefers-reduced-motion: reduce`.
- **Do** keep the night theme a value swap of the same roles, not a different layout or palette.

### Don't:
- **Don't** add box shadows, gradients, glass/blur or rounded corners.
- **Don't** introduce a second accent hue or tinted surface beyond Ink Wash.
- **Don't** use Margin Red for body text, fills or buttons.
- **Don't** use the dark-terminal-plus-neon dev portfolio look or a split hero over a row of cards.
- **Don't** add floating, parallax or particle motion.
- **Don't** put uppercase mono labels above headings as eyebrows; margin notes sit beside content, in the margin, in natural case.
