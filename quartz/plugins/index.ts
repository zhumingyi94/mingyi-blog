import { StaticResources } from "../util/resources"
import { FilePath, FullSlug } from "../util/path"
import { BuildCtx } from "../util/ctx"

import * as Component from "./emitters/component"
import * as ContentPage from "./emitters/contentPage"
import * as Assets from "./emitters/assets"
import * as Static from "./emitters/static"
import * as ContentIndex from "./emitters/contentIndex"
import * as FolderPage from "./emitters/folderPage"
import * as TagPage from "./emitters/tagPage"
import * as NotFoundPage from "./emitters/notFoundPage"
import * as Sitemap from "./emitters/sitemap"

import * as FrontMatter from "./transformers/frontmatter"
import * as CreatedModifiedDate from "./transformers/createdModifiedDate"
import * as SyntaxHighlighting from "./transformers/syntaxHighlighting"
import * as TableOfContents from "./transformers/tableOfContents"
import * as GitHubFlavoredMarkdown from "./transformers/gfm"
import * as CrawlLinks from "./transformers/links"
import * as Latex from "./transformers/latex"
import * as Description from "./transformers/description"
import * as HardLineBreaks from "./transformers/breaks"
import * as ExternalLinks from "./transformers/externalLinks"
import * as InternalLinks from "./transformers/internalLinks"
import * as Emoji from "./transformers/emoji"
import * as Highlight from "./transformers/highlight"
import * as ObsidianFlavoredMarkdown from "./transformers/ofm"

import * as RemoveDrafts from "./filters/drafts"

export function getStaticResourcesFromPlugins(ctx: BuildCtx) {
  const staticResources: StaticResources = {
    css: [],
    js: [],
  }

  for (const transformer of ctx.cfg.plugins.transformers) {
    const res = transformer.externalResources ? transformer.externalResources(ctx) : {}
    if (res?.js) {
      staticResources.js.push(...res.js)
    }
    if (res?.css) {
      staticResources.css.push(...res.css)
    }
  }

  // if serving locally, listen for rebuilds and reload the page
  if (ctx.argv.serve) {
    const wsUrl = ctx.argv.remoteDevHost
      ? `wss://${ctx.argv.remoteDevHost}:${ctx.argv.wsPort}`
      : `ws://localhost:${ctx.argv.wsPort}`

    staticResources.js.push({
      loadTime: "afterDOMReady",
      contentType: "inline",
      script: `
        const socket = new WebSocket('${wsUrl}')
        // reload(true) ensures resources like images and scripts are fetched again in firefox
        socket.addEventListener('message', () => document.location.reload(true))
      `,
    })
  }

  return staticResources
}

export const emitters = {
  Component,
  ContentPage,
  Assets,
  Static,
  ContentIndex,
  FolderPage,
  TagPage,
  NotFoundPage,
  Sitemap,
}

export const transformers = {
  FrontMatter,
  CreatedModifiedDate,
  SyntaxHighlighting,
  TableOfContents,
  GitHubFlavoredMarkdown,
  CrawlLinks,
  Latex,
  Description,
  HardLineBreaks,
  ExternalLinks,
  InternalLinks,
  Emoji,
  Highlight,
  ObsidianFlavoredMarkdown,
}

export const filters = {
  RemoveDrafts,
}

declare module "vfile" {
  // inserted in processors.ts
  interface DataMap {
    slug: FullSlug
    filePath: FilePath
    relativePath: FilePath
  }
}
