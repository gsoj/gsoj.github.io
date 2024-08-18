import comp from "C:/Users/Mai/Desktop/GOJ-HOME/vuepress-starter/docs/.vuepress/.temp/pages/notes/张三/Demo2.html.vue"
const data = JSON.parse("{\"path\":\"/notes/%E5%BC%A0%E4%B8%89/Demo2.html\",\"title\":\"自动配置侧边栏\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"自动配置侧边栏\"},\"headers\":[],\"filePathRelative\":\"notes/张三/Demo2.md\",\"git\":{\"createdTime\":null,\"updatedTime\":null,\"contributors\":[]}}")
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
