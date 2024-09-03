import comp from "C:/Users/Mai/Desktop/GOJ/gsoj.github.io/docs/.vuepress/.temp/pages/honor/index.html.vue"
const data = JSON.parse("{\"path\":\"/honor/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"head\":[[\"script\",{\"id\":\"check-dark-mode\"},\";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();\"],[\"script\",{\"id\":\"check-mac-os\"},\"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0,\"words\":0},\"filePathRelative\":\"honor/index.md\",\"categoryList\":[{\"id\":\"b2f39f\",\"sort\":10000,\"name\":\"honor\"}],\"git\":{\"createdTime\":null,\"updatedTime\":null,\"contributors\":[]}}")
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
