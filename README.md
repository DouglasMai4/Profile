# douglasmaia.dev.br

Personal portfolio and blog, built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com).

Fully static, zero client-side framework — the few interactive touches (particle background, navbar scroll spy, language switcher) are small vanilla scripts.

## Features

- 🌎 **i18n with static routes** — `/` (pt-BR) and `/en/`, with `hreflang` alternates and a localized sitemap
- 📝 **Blog** — Markdown posts powered by Astro Content Collections, per language
- 🔍 **SEO** — canonical URLs, Open Graph, Twitter cards and JSON-LD structured data
- 📊 **Vercel Analytics & Speed Insights**

## Getting started

```sh
bun install
bun dev
```

The dev server runs at `localhost:4321`.

## Commands

| Command       | Action                                     |
| :------------ | :----------------------------------------- |
| `bun dev`     | Start the local dev server                 |
| `bun build`   | Build the production site to `./dist/`     |
| `bun preview` | Preview the production build locally       |
| `bun astro`   | Run Astro CLI commands (`check`, `add`, …) |

## Project structure

```text
src/
├── components/      # Sections (Hero, About, Projects, …) and UI pieces
├── content/blog/    # Blog posts in Markdown, per locale (pt-br/, en/)
├── i18n/            # Locale dictionaries and URL helpers
├── layouts/         # Base layout with SEO meta tags
├── lib/             # Blog utilities (slugs, reading time)
├── pages/           # Routes: /, /blog and their /en counterparts
└── styles/          # Tailwind theme (global.css)
```
