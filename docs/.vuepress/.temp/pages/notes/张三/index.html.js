import comp from "C:/Users/Mai/Desktop/GOJ-HOME/vuepress-starter/docs/.vuepress/.temp/pages/notes/张三/index.html.vue"
const data = JSON.parse("{\"path\":\"/notes/%E5%BC%A0%E4%B8%89/\",\"title\":\"Demo\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Demo\"},\"headers\":[],\"filePathRelative\":\"notes/张三/index.md\",\"git\":{\"createdTime\":1723910784000,\"updatedTime\":1723957621000,\"contributors\":[{\"name\":\"Mai\",\"email\":\"2512834769@qq.com\",\"commits\":2}]}}")
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
