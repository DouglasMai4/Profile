export function ogImagePath(pagePath: string): string {
  const clean = pagePath.replace(/^\/|\/$/g, "");
  return `/og/${clean || "home"}.png`;
}
