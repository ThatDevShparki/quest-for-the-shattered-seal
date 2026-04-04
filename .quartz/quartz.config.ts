import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "Quest for the Shattered Seal",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "en-US",
    baseUrl: "thatdevshparki.github.io/quest-for-the-shattered-seal",
    ignorePatterns: [
      "private",
      "Templates",
      "Resources/DM Notes",
      ".obsidian",
      ".claude",
      "CLAUDE.md",
    ],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Crimson Text",
        body: "Libre Baskerville",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#FDF1DC",
          lightgray: "#e8dcc8",
          gray: "#867453",
          darkgray: "#5D4037",
          dark: "#3E2723",
          secondary: "#8B4513",
          tertiary: "#654321",
          highlight: "rgba(139, 69, 19, 0.06)",
          textHighlight: "#8B451344",
        },
        darkMode: {
          light: "#2A2318",
          lightgray: "#3D3328",
          gray: "#867453",
          darkgray: "#D4C4A8",
          dark: "#F0E6D2",
          secondary: "#C4955A",
          tertiary: "#8B6914",
          highlight: "rgba(196, 149, 90, 0.08)",
          textHighlight: "#C4955A44",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.ExplicitPublish()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
