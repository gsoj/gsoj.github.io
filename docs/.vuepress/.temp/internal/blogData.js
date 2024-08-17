export const blogPostData = [{"path":"/article/yx7dzzm5/","title":"我们","categoryList":[],"createTime":"2024/08/17 12:42:18","lang":"zh-CN","excerpt":""},{"path":"/article/ww78nr4i/","title":"数学","categoryList":[{"id":"a542e9","sort":10000,"name":"knowledge"}],"createTime":"2024/08/17 11:12:11","lang":"zh-CN","excerpt":""},{"path":"/article/149vwxhq/","title":"字符串","categoryList":[{"id":"a542e9","sort":10000,"name":"knowledge"}],"createTime":"2024/08/17 11:12:07","lang":"zh-CN","excerpt":""},{"path":"/article/bz53pdbv/","title":"基础知识","categoryList":[{"id":"a542e9","sort":10000,"name":"knowledge"}],"createTime":"2024/08/17 11:09:22","lang":"zh-CN","excerpt":""},{"path":"/article/pecxq1b0/","title":"goj","categoryList":[],"createTime":"2024/08/17 10:45:14","lang":"zh-CN","excerpt":""},{"path":"/article/fj900mle/","title":"get-started","categoryList":[],"createTime":"2024/08/17 10:28:08","lang":"zh-CN","excerpt":""}]

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
