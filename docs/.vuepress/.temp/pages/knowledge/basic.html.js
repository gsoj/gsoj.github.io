import comp from "C:/Users/Mai/Desktop/GOJ-HOME/vuepress-starter/docs/.vuepress/.temp/pages/knowledge/basic.html.vue"
const data = JSON.parse("{\"path\":\"/knowledge/basic.html\",\"title\":\"基础知识\",\"lang\":\"zh-CN\",\"frontmatter\":{\"next\":\"/knowledge/string\",\"title\":\"基础知识\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"knowledge/basic.md\"}")
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
