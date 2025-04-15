import { QuartzTransformerPlugin } from "../types"
import { ProcessedContent } from "../vfile"
import fs from "fs"
import path from "path"

export interface Options {
  priority: number
}

const defaultOptions: Options = {
  priority: 0,
}

export const CreatedModifiedDate: QuartzTransformerPlugin<Options> = (userOpts) => {
  const opts = { ...defaultOptions, ...userOpts }
  return {
    name: "CreatedModifiedDate",
    priority: opts.priority,
    markdownPlugins() {
      return []
    },
    async transform(content: ProcessedContent): Promise<ProcessedContent> {
      const { data, filePath } = content
      
      if (!filePath) {
        return content
      }

      try {
        const stats = await fs.promises.stat(filePath)
        
        // If frontmatter doesn't define a creation date, use the file's creation date
        if (!data.frontmatter?.created) {
          data.frontmatter = {
            ...data.frontmatter,
            created: stats.birthtime,
          }
        }
        
        // If frontmatter doesn't define a modified date, use the file's modified date
        if (!data.frontmatter?.lastmod) {
          data.frontmatter = {
            ...data.frontmatter,
            lastmod: stats.mtime,
          }
        }
      } catch (error) {
        console.warn(`[plugin:createdModifiedDate] Failed to get file stats for ${filePath}:`, error)
      }

      return content
    },
  }
} 