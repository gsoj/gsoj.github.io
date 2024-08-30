import comp from "C:/Users/Mai/Desktop/GOJ-HOME/vuepress-starter/docs/.vuepress/.temp/pages/notes/index.html.vue"
const data = JSON.parse("{\"path\":\"/notes/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"filePathRelative\":\"notes/index.md\",\"git\":{\"createdTime\":1723910784000,\"updatedTime\":1723957621000,\"contributors\":[{\"name\":\"Mai\",\"email\":\"2512834769@qq.com\",\"commits\":2}]}}")
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
