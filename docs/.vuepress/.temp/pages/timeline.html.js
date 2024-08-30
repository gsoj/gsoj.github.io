import comp from "C:/Users/Mai/Desktop/GOJ-HOME/vuepress-starter/docs/.vuepress/.temp/pages/timeline.html.vue"
const data = JSON.parse("{\"path\":\"/timeline.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"layout\":\"Timeline\"},\"headers\":[],\"filePathRelative\":null,\"git\":{}}")
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
