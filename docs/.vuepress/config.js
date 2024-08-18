import {defaultTheme} from '@vuepress/theme-default'
import {defineUserConfig} from 'vuepress/cli'
import {viteBundler} from '@vuepress/bundler-vite'
import {gitPlugin} from '@vuepress/plugin-git'
import {generateSidebarJson} from "../utils/DirUtil.js";

export default defineUserConfig({
    lang: 'zh-CN',

    title: 'ZGUC ACM',
    description: 'ZGUC 程序设计竞赛集训队',
    editLinks: true,
    editLinkText: '编辑此页',
    lastUpdated: '上次更新',
    theme: defaultTheme({
        logo: 'https://vuejs.press/images/hero.png',
        navbar: [
            {
                text: "首页",
                link: "/"
            },
            {
                text: "学习资源",
                link: "/knowledge/"
            },
            {
                text: "个人笔记",
                link: "/notes/"
            },
            {
                text: "名人堂",
                link: "/aboutUs"
            }
        ],
        sidebar: {
            '/knowledge/': generateSidebarJson("docs/knowledge"),
            '/notes/': generateSidebarJson("docs/notes/")
        }
    }),

    bundler: viteBundler(),
    plugins: [
        gitPlugin({
            createdTime: true,
            updatedTime: true,
            contributors: true
        }),

    ],
})
