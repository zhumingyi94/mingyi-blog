import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <div>
      <h1 class={classNames(displayClass, "page-title")}>
        <a href={baseDir}>{title}</a>
      </h1>
      <div class="rectangle"></div>
    </div>
  )
}

PageTitle.css = `
.page-title {
  margin: 0;
}

.rectangle {
  width: 120px; /* Adjust width as needed */
  height: 8px; /* Adjust height as needed */
  background-color: #05FF00;
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
