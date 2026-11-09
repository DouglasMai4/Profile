import type { APIRoute, GetStaticPaths } from "astro";

import { getDict, localePath, type Locale } from "@/i18n";
import { formatShortDate, getPosts, postSlug } from "@/lib/blog";
import { renderOg, type OgCard } from "@/lib/og";
import { ogImagePath } from "@/lib/og-path";

const locales: Locale[] = ["pt-br", "en"];


export const getStaticPaths = (async () => {
  const paths: { params: { slug: string }; props: { card: OgCard } }[] = [];
  const add = (pagePath: string, card: OgCard) =>
    paths.push({ params: { slug: ogImagePath(pagePath).slice(4, -4) }, props: { card } });

  for (const locale of locales) {
    const t = getDict(locale);
    const role = locale === "pt-br" ? "Dev Full Stack" : "Full Stack Developer";

    add(localePath(locale, "/"), {
      eyebrow: `~/douglas · ${role.toLowerCase()}`,
      title: "Douglas Maia",
      subtitle: locale === "pt-br"
        ? "Go, TypeScript, sistemas distribuídos e IA. Projetos e um blog sobre o que aprendo no caminho."
        : "Go, TypeScript, distributed systems and AI. Projects and a blog about what I learn along the way.",
      footer: "Joinville, SC",
    });

    add(localePath(locale, "/blog/"), {
      eyebrow: "~/douglas/blog",
      title: t.writing.title,
      subtitle: t.meta.blogDescription,
      footer: "Douglas Maia",
    });

    for (const post of await getPosts(locale)) {
      add(localePath(locale, `/blog/${postSlug(post)}/`), {
        eyebrow: `blog · ${formatShortDate(post.data.pubDate, locale)}`,
        title: post.data.title,
        footer: post.data.tags.slice(0, 3).map((tag) => `#${tag}`).join(" "),
      });
    }
  }
  return paths;
}) satisfies GetStaticPaths;

export const GET: APIRoute = async ({ props }) => {
  const png = await renderOg((props as { card: OgCard }).card);
  return new Response(new Uint8Array(png), { headers: { "Content-Type": "image/png" } });
};
