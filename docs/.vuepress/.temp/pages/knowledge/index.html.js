import comp from "C:/Users/Mai/Desktop/GOJ-HOME/vuepress-starter/docs/.vuepress/.temp/pages/knowledge/index.html.vue"
const data = JSON.parse("{\"path\":\"/knowledge/\",\"title\":\"导读\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"导读\"},\"headers\":[{\"level\":3,\"title\":\"苦中自有乐\",\"slug\":\"苦中自有乐\",\"link\":\"#苦中自有乐\",\"children\":[]},{\"level\":3,\"title\":\"结语\",\"slug\":\"结语\",\"link\":\"#结语\",\"children\":[]}],\"filePathRelative\":\"knowledge/index.md\",\"git\":{\"createdTime\":1723910784000,\"updatedTime\":1723957621000,\"contributors\":[{\"name\":\"Mai\",\"email\":\"2512834769@qq.com\",\"commits\":2}]}}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
