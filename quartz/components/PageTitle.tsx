import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <div>
      <div class="rectangle"></div>
      <h1 class={classNames(displayClass, "page-title")}>
        <a href={baseDir}>{title}</a>
      </h1>
    </div>
  )
}

PageTitle.css = `
.page-title {
  margin: 0;
}

.rectangle {
  width: 100px; /* Adjust width as needed */
  height: 50px; /* Adjust height as needed */
  background-color: #05FF00;
  margin-bottom: 10px; /* Space between rectangle and title */
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor