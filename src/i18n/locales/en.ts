import type { Dictionary } from "../index";

export const en: Dictionary = {
  meta: {
    title: "Douglas Maia | Full Stack Developer",
    description:
      "Douglas Maia, full stack developer from Joinville, Brazil. Go, TypeScript, distributed systems and AI. Projects, experience and a blog about what I learn along the way.",
    blogTitle: "Blog | Douglas Maia",
    blogDescription:
      "Notes on web development, software architecture and technology, written by Douglas Maia.",
  },
  navbar: {
    work: "Work",
    stack: "Stack",
    blog: "Blog",
    contact: "Contact",
    language: "Language",
    themeLight: "Use light theme",
    themeDark: "Use dark theme",
    skip: "Skip to content",
  },
  hero: {
    role: "full stack dev · Go & TypeScript",
    intro:
      "I live in Joinville, Brazil. Right now I own the architecture at Goalfy, run Kingdom Softwares, and mentor people moving into tech at Escola da Nuvem. This site is my notebook: what I do, what I do it with, and what I learn along the way.",
  },
  api: {
    title: "Query me",
    note: "The API is fake. The data is real.",
    label: "Route",
    send: "Send",
    hint: "Enter sends · ↑ ↓ history",
    notFound: "That route doesn't exist. Try one of these:",
    routes: "Routes",
  },
  work: {
    title: "Work",
    experience: "Where I've worked",
    projects: "Things I've made",
    now: "now",
    building: "in progress",
    live: "live",
    links: { site: "Site", docs: "Docs", code: "Code" },
    github: "More on GitHub",
  },
  stack: {
    title: "Stack",
    intro:
      "Pick a technology and I'll show you where I've actually used it. No 80% React progress bars.",
    areas: {
      backend: "Back-end",
      frontend: "Front-end",
      data: "Data",
      ai: "AI",
      infra: "Infra",
    },
    usedIn: "Used at",
    daily: "Everyday tool, on everything.",
  },
  writing: {
    title: "Writing",
    intro: "I write when I learn something I wish I'd read earlier.",
    all: "All posts",
  },
  contact: {
    title: "Want to talk?",
    intro:
      "About a project, a role, or just Go. Email is the surest way to reach me; WhatsApp is the fastest.",
  },
  footer: {
    made: "Made with Astro, on graph paper.",
    top: "Back to top",
  },
  blog: {
    title: "Blog",
    description:
      "Notes on web development, architecture and whatever else comes up along the way.",
    minRead: "min read",
    empty: "Nothing here yet. Come back soon!",
    noMatch: "No posts with this tag.",
    allTags: "All",
    filter: "Filter by tag",
    count: (n: number) => (n === 1 ? "1 post" : `${n} posts`),
    backToBlog: "Back to blog",
    share: "Share",
    copy: "Copy link",
    copied: "Link copied",
    previous: "Previous post",
    next: "Next post",
    progress: "Reading progress",
  },
};
