import { getCollection, type CollectionEntry } from "astro:content";

import type { Locale } from "@/i18n";

export type BlogPost = CollectionEntry<"blog">;

export function postSlug(post: BlogPost): string {
  return post.id.replace(/^(pt-br|en)\//, "");
}

export async function getPosts(locale: Locale): Promise<BlogPost[]> {
  const posts = await getCollection(
    "blog",
    ({ id, data }) => !data.draft && id.startsWith(`${locale}/`),
  );
  return posts.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );
}

export function readingTimeMinutes(body: string | undefined): number {
  const words = (body ?? "").trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

export function formatDate(date: Date, locale: Locale): string {
  return date.toLocaleDateString(locale === "pt-br" ? "pt-BR" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
