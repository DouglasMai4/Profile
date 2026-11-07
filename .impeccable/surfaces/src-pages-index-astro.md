---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: ["src/pages/blog/index.astro","src/pages/blog/[...slug].astro"]
---

# Surface: Home + Blog (douglasmaia.dev.br)

Scope: homepage (`/`, `/en/`), blog index and blog post pages. Mode: Experience on home; blog pages are Read inside the same world.
Audience: devs/OSS, freelance clients, recruiters. Primary action: read the blog. Content: real projects (Kori, Goalfy, Kingdom), stack, contact channels, posts.
User asks: more minimal, interactive, show capabilities via live interaction + detailed projects + navigable stack; blog: home highlight, index/discovery (tags), share + next post.
Theme: light by direction (paper); dark variant = same notebook at night (navy paper, pale ink) via prefers-color-scheme + toggle.

## Direction contract

THESIS: The site is the page of an engineer's graph-paper notebook (caderno quadriculado) where Douglas works things out. Refuses the dark-terminal-plus-neon dev portfolio and the split hero over a card row.

OWN-WORLD: Cool white paper, faint blue 24px grid, one red margin rule at the left, ink in ballpoint blue for actions and accents, navy-black for text. Square-cornered components with 1.5–2px ink strokes, no shadows, no gradients, no glass. Dates and labels in the margin column, in red monospaced numerals. Everything snaps to the grid cell (oscilloscope raise). One ink carries text and action; red only margin + active state (single-hue raise). One subject per page region, empty grid left charged (ma raise).

STORY: Visitor sees a person who builds and writes, queries his stack live, sees which projects use each tool, then reads the latest article and continues post to post.

FIRST VIEWPORT: Nav on the top grid line. Margin column holds today's date. Left of center: "Desenvolvedor full stack." at ~120px, short bio below. Right: a bordered live playground — a request line `GET /douglas/stack?area=…` editable via area chips, response JSON listing projects; keyboard operable. Bottom band across: latest article rule-line with read-time in margin red; it is the primary action.

FORM: Caderno quadriculado, candidate 4 of 7 on my list; seed:1ae8fa6db4f350a7. Signature interaction: stack playground; selecting a tech highlights projects using it (registered-layer reveal, ukiyoe raise). Motion: ink-draw lines (stroke reveal), no floats, no particles. Full keyboard operation (BBS raise).

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
