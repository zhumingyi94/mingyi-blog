import { QuartzEmitterPlugin } from "../types"
import { ProcessedContent } from "../vfile"
import { FullSlug, joinSegments, pathToRoot } from "../../util/path"
import { write } from "./helpers"
import { Options } from "../../cfg"

export const Sitemap: QuartzEmitterPlugin<Options> = (opts) => {
  return {
    name: "Sitemap",
    async emit(content, cfg, _resources, emit): Promise<FilePath[]> {
      const baseUrl = cfg.configuration.baseUrl ?? "http://localhost:8080"
      const { globby } = await import("globby")
      const fps = await globby("**/*.html", {
        cwd: cfg.configuration.output,
        ignore: ["404.html", "sitemap.xml"],
      })

      const urls = [
        {
          loc: baseUrl,
          lastmod: new Date().toISOString(),
          changefreq: "weekly",
          priority: "1.0",
        },
        ...fps.map((fp) => ({
          loc: joinSegments(baseUrl, fp),
          lastmod: new Date().toISOString(),
          changefreq: "monthly",
          priority: "0.8",
        })),
      ]

      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>`

      const fp = joinSegments(cfg.configuration.output, "sitemap.xml") as FilePath
      await write(fp, sitemap)
      return [fp]
    },
  }
} 