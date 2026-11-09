import { readFile } from "node:fs/promises";
import { createRequire } from "node:module";

import { Resvg } from "@resvg/resvg-js";
import satori from "satori";

export const OG_WIDTH = 1200;
export const OG_HEIGHT = 630;

const CELL = 30;
const MARGIN_X = CELL * 5;
const colors = {
  paper: "#fbfcfe",
  grid: "#dde7f3",
  ink: "#1d3aa6",
  text: "#15213d",
  muted: "#4b5877",
  rule: "#dc4436",
};

const require = createRequire(import.meta.url);
const font = (pkg: string, file: string) =>
  readFile(require.resolve(`${pkg}/files/${file}`));

let fontsPromise: ReturnType<typeof loadFonts> | undefined;
async function loadFonts() {
  const [sans400, sans800, mono400, mono500] = await Promise.all([
    font("@fontsource/schibsted-grotesk", "schibsted-grotesk-latin-400-normal.woff"),
    font("@fontsource/schibsted-grotesk", "schibsted-grotesk-latin-800-normal.woff"),
    font("@fontsource/jetbrains-mono", "jetbrains-mono-latin-400-normal.woff"),
    font("@fontsource/jetbrains-mono", "jetbrains-mono-latin-500-normal.woff"),
  ]);
  return [
    { name: "Sans", data: sans400, weight: 400 as const, style: "normal" as const },
    { name: "Sans", data: sans800, weight: 800 as const, style: "normal" as const },
    { name: "Mono", data: mono400, weight: 400 as const, style: "normal" as const },
    { name: "Mono", data: mono500, weight: 500 as const, style: "normal" as const },
  ];
}

export interface OgCard {
  eyebrow: string;
  title: string;
  subtitle?: string;
  footer?: string;
}

type Node = { type: string; props: Record<string, unknown> };
const h = (type: string, style: Record<string, unknown>, children?: unknown): Node => ({
  type,
  props: { style, children },
});

function titleSize(title: string): number {
  const n = title.length;
  if (n <= 28) return 84;
  if (n <= 50) return 72;
  if (n <= 80) return 60;
  return 50;
}

export async function renderOg(card: OgCard): Promise<Buffer> {
  fontsPromise ??= loadFonts();
  const fonts = await fontsPromise;
  const size = titleSize(card.title);

  const tree = h(
    "div",
    {
      width: OG_WIDTH,
      height: OG_HEIGHT,
      display: "flex",
      position: "relative",
      backgroundColor: colors.paper,
      backgroundImage: `linear-gradient(to right, ${colors.grid} 1px, transparent 1px), linear-gradient(to bottom, ${colors.grid} 1px, transparent 1px)`,
      backgroundSize: `${CELL}px ${CELL}px`,
      fontFamily: "Sans",
      color: colors.text,
    },
    [
      h("div", {
        position: "absolute",
        left: MARGIN_X - CELL,
        top: 0,
        bottom: 0,
        width: 3,
        backgroundColor: colors.rule,
      }),
      h(
        "div",
        {
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          position: "absolute",
          left: MARGIN_X,
          right: CELL * 3,
          top: CELL * 3,
          bottom: CELL * 3,
        },
        [
          h(
            "div",
            { display: "flex", flexDirection: "column" },
            [
              h(
                "div",
                {
                  display: "flex",
                  fontFamily: "Mono",
                  fontWeight: 500,
                  fontSize: 26,
                  color: colors.ink,
                  letterSpacing: "0.02em",
                },
                card.eyebrow,
              ),
              h(
                "div",
                {
                  display: "flex",
                  marginTop: CELL,
                  paddingTop: CELL * 0.75,
                  borderTop: `4px solid ${colors.text}`,
                  fontSize: size,
                  fontWeight: 800,
                  lineHeight: 1.08,
                  letterSpacing: "-0.03em",
                },
                card.title,
              ),
              ...(card.subtitle
                ? [
                    h(
                      "div",
                      {
                        display: "flex",
                        marginTop: CELL,
                        fontSize: 32,
                        lineHeight: 1.35,
                        color: colors.muted,
                      },
                      card.subtitle,
                    ),
                  ]
                : []),
            ],
          ),
          h(
            "div",
            {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              fontFamily: "Mono",
              fontSize: 24,
              color: colors.muted,
            },
            [
              h("div", { display: "flex", color: colors.ink }, card.footer ?? ""),
              h(
                "div",
                { display: "flex", alignItems: "center", gap: 14 },
                [
                  h("div", {
                    width: 16,
                    height: 16,
                    backgroundColor: colors.ink,
                  }),
                  h("div", { display: "flex", fontWeight: 500, color: colors.text }, "douglasmaia.dev.br"),
                ],
              ),
            ],
          ),
        ],
      ),
    ],
  );

  const svg = await satori(tree as never, { width: OG_WIDTH, height: OG_HEIGHT, fonts });
  return new Resvg(svg, { fitTo: { mode: "width", value: OG_WIDTH } }).render().asPng();
}
