
import { useCopyCode } from 'C:/Users/Mai/Desktop/GOJ-HOME/vuepress-starter/node_modules/@vuepress-plume/plugin-shikiji/lib/client/composables/copy-code.js'
import { useCollapsedLines } from 'C:/Users/Mai/Desktop/GOJ-HOME/vuepress-starter/node_modules/@vuepress-plume/plugin-shikiji/lib/client/composables/collapsed-lines.js'

export default {
  
  setup() {
    useCopyCode({
      selector: __CC_SELECTOR__,
      duration: __CC_DURATION__,
    })
    useCollapsedLines()
  },
}
