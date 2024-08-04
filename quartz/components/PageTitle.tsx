import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const imageUrl = cfg?.pageTitleImage ?? "icon.png"  // Replace with your default image path
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <h1 class={classNames(displayClass, "page-title")}>
      <a href={baseDir}>
        <img src={imageUrl} alt="Page Title" class="page-title-image" />
      </a>
    </h1>
  )
}

PageTitle.css = `
.page-title {
  margin: 0;
}
.page-title-image {
  max-width: 100%;
  height: auto;
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
