import {defaultTheme} from '@vuepress/theme-default'
import {defineUserConfig} from 'vuepress/cli'
import {viteBundler} from '@vuepress/bundler-vite'
import {plumeTheme} from 'vuepress-theme-plume'

export default defineUserConfig({
    lang: 'zh-CN',

    title: 'ZGUC ACM',
    description: 'ZGUC 程序设计竞赛集训队',

    theme: defaultTheme({

        logo: 'https://vuejs.press/images/hero.png',
        navbar: [
            {
                text: "首页",
                link: "/"
            },
            {
                text: "学习资源",
                sidebar: "auto",
                children: [
                    {text: "基础知识", link: "/knowledge/basic"},
                    {text: "字符串", link: "/knowledge/string"},
                    {text: "数学", link: "/knowledge/math"}
                ]

            },
            {
                text: "笔记模板",
                sidebar: "auto",
                children: [
                    {text: "麦文鹏", link: "/notes/maiwenpeng"},
                ]
            },
            {
                text: "OJ",
                link: "/goj"
            },
            {
                text: "名人堂",
                link: "/aboutUs"
            }
        ],
    }),
    bundler: viteBundler(),
})
