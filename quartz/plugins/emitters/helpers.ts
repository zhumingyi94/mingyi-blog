import path from "path"
import fs from "fs"
import { BuildCtx } from "../../util/ctx"
import { FilePath, FullSlug, joinSegments } from "../../util/path"
import { ProcessedContent } from "../vfile"
import { QuartzConfig } from "../../cfg"

type WriteOptions = {
  ctx: BuildCtx
  slug: FullSlug
  ext: `.${string}` | ""
  content: string | Buffer
}

export const write = async ({ ctx, slug, ext, content }: WriteOptions): Promise<FilePath> => {
  const pathToPage = joinSegments(ctx.argv.output, slug + ext) as FilePath
  const dir = path.dirname(pathToPage)
  await fs.promises.mkdir(dir, { recursive: true })
  await fs.promises.writeFile(pathToPage, content)
  return pathToPage
}

export async function writeProcessedContent(
  content: ProcessedContent,
  cfg: QuartzConfig,
  outputPath: FilePath,
): Promise<FilePath> {
  const { data, content: body } = content
  const { slug } = data
  const path = joinSegments(cfg.output, outputPath)
  await fs.promises.mkdir(path, { recursive: true })
  await fs.promises.writeFile(joinSegments(path, `${slug}.html`), body)
  return path
}
