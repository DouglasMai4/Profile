import { ptBR } from "./locales/pt-br";
import { en } from "./locales/en";

export type Dictionary = typeof ptBR;

export type Locale = "pt-br" | "en";

export const defaultLocale: Locale = "pt-br";

export const locales: {
  locale: Locale;
  hreflang: string;
  title: string;
  flag: string;
}[] = [
  {
    locale: "pt-br",
    hreflang: "pt-BR",
    title: "Português (Brasil)",
    flag: "https://purecatamphetamine.github.io/country-flag-icons/3x2/BR.svg",
  },
  {
    locale: "en",
    hreflang: "en",
    title: "English",
    flag: "https://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg",
  },
];

const dictionaries: Record<Locale, Dictionary> = {
  "pt-br": ptBR,
  en,
};

export function getDict(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export function localePath(locale: Locale, path = "/"): string {
  if (locale === defaultLocale) return path;
  return path === "/" ? "/en/" : `/en${path}`;
}

export function alternatePaths(
  path = "/",
): { locale: Locale; hreflang: string; path: string }[] {
  return locales.map(({ locale, hreflang }) => ({
    locale,
    hreflang,
    path: localePath(locale, path),
  }));
}
