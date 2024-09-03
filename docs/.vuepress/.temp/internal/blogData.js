export const blogPostData = [{"path":"/article/p7c48pyv/","title":"Home","categoryList":[],"createTime":"2024/08/30 16:13:35","lang":"zh-CN","excerpt":""},{"path":"/article/yx7dzzm5/","title":"我们","categoryList":[],"createTime":"2024/08/17 12:42:18","lang":"zh-CN","excerpt":""},{"path":"/article/pecxq1b0/","title":"goj","categoryList":[],"createTime":"2024/08/17 10:45:14","lang":"zh-CN","excerpt":""},{"path":"/article/fj900mle/","title":"get-started","categoryList":[],"createTime":"2024/08/17 10:28:08","lang":"zh-CN","excerpt":""}]

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
