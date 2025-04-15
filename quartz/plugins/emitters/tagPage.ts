import { QuartzEmitterPlugin } from "../types"
import { ProcessedContent } from "../vfile"
import { write } from "./helpers"

export const TagPage: QuartzEmitterPlugin = () => {
  return {
    name: "TagPage",
    async emit(content, cfg, _resources, emit): Promise<string[]> {
      const fps: string[] = []
      return fps
    },
  }
} 