import comp from "C:/Users/Mai/Desktop/GOJ-HOME/vuepress-starter/docs/.vuepress/.temp/pages/knowledge/math.html.vue"
const data = JSON.parse("{\"path\":\"/knowledge/math.html\",\"title\":\"数学\",\"lang\":\"zh-CN\",\"frontmatter\":{\"prev\":\"/knowledge/string\",\"title\":\"数学\"},\"headers\":[],\"git\":{\"updatedTime\":1723871413000,\"contributors\":[{\"name\":\"Mai\",\"email\":\"2512834769@qq.com\",\"commits\":1}]},\"filePathRelative\":\"knowledge/math.md\"}")
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
