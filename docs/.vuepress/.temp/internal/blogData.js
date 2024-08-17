export const blogPostData = [{"path":"/article/sz0s4byh/","title":"math","categoryList":[{"id":"a542e9","sort":10000,"name":"knowledge"}],"createTime":"2024/08/17 11:12:11","lang":"zh-CN","excerpt":""},{"path":"/article/rvvnhnfm/","title":"string","categoryList":[{"id":"a542e9","sort":10000,"name":"knowledge"}],"createTime":"2024/08/17 11:12:07","lang":"zh-CN","excerpt":""},{"path":"/article/638kr58g/","title":"basic","categoryList":[{"id":"a542e9","sort":10000,"name":"knowledge"}],"createTime":"2024/08/17 11:09:22","lang":"zh-CN","excerpt":""},{"path":"/article/pecxq1b0/","title":"goj","categoryList":[],"createTime":"2024/08/17 10:45:14","lang":"zh-CN","excerpt":""},{"path":"/article/qfhu4vbn/","title":"get-started","categoryList":[],"createTime":"2024/08/17 10:28:08","lang":"zh-CN","excerpt":""}]

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogPostData) {
    __VUE_HMR_RUNTIME__.updateBlogPostData(blogPostData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ blogPostData }) => {
    __VUE_HMR_RUNTIME__.updateBlogPostData(blogPostData)
  })
}
