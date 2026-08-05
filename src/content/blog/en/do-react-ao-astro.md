---
title: "From React to Astro: rebuilding my portfolio"
description: "Why I migrated my portfolio from a React SPA to Astro, and what I gained in performance, SEO and simplicity along the way."
pubDate: 2026-08-05
tags: ["astro", "react", "performance", "seo"]
---

The site you are browsing right now is the third version of my portfolio - and the first one built with [Astro](https://astro.build). In this first blog post, I want to share the reasoning behind the migration.

## The problem with the SPA

The previous version was a React SPA built with Vite. It worked fine, but for a site that is essentially **static content**, I was paying an unnecessary price:

- All content was rendered on the client, so crawlers and link previews saw a nearly empty HTML;
- The bundle shipped React, i18next, motion and Radix UI to display... a single page;
- Language switching happened via JavaScript, without distinct URLs per language - bad for SEO.

## Why Astro

Astro renders everything to static HTML at build time and only ships JavaScript when it is actually needed. In practice, that meant:

- **Zero framework on the client**: the particle animation, the navbar scroll-spy and the "encrypted" text effect became vanilla scripts of a few KB;
- **i18n with real routes**: `/` in Portuguese and `/en/` in English, with `hreflang` and sitemap generated at build time;
- **This blog**: Astro's Content Collections turn Markdown files into typed, validated pages.

## The outcome

The layout is exactly the same - only the color changed, from green to a blue. But under the hood, the site is lighter, indexable and easier to maintain.

In upcoming posts I plan to share more development experiences. See you there!
