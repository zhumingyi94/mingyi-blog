import { QuartzTransformerPlugin } from "../types"
import remarkBreaks from "remark-breaks"

export interface Options {}
export const HardLineBreaks: QuartzTransformerPlugin<Options> = () => {
  return {
    name: "HardLineBreaks",
    markdownPlugins() {
      return [remarkBreaks]
    },
  }
} 