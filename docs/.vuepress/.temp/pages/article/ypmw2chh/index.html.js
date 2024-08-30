import comp from "C:/Users/Mai/Desktop/GOJ/gsoj.github.io/docs/.vuepress/.temp/pages/article/ypmw2chh/index.html.vue"
const data = JSON.parse("{\"path\":\"/article/ypmw2chh/\",\"title\":\"自动配置侧边栏\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"自动配置侧边栏\",\"createTime\":\"2024/08/30 16:13:37\",\"permalink\":\"/article/ypmw2chh/\",\"head\":[[\"script\",{\"id\":\"check-dark-mode\"},\";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();\"],[\"script\",{\"id\":\"check-mac-os\"},\"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0.07,\"words\":22},\"filePathRelative\":\"notes/张三/Demo2.md\",\"categoryList\":[{\"id\":\"4358b5\",\"sort\":10001,\"name\":\"notes\"},{\"id\":\"fa55a5\",\"sort\":10003,\"name\":\"张三\"}],\"git\":{\"createdTime\":1725007063000,\"updatedTime\":1725007063000,\"contributors\":[{\"name\":\"Mai\",\"email\":\"2512834769@qq.com\",\"commits\":1}]}}")
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
