import {defineUserConfig} from '@vuepress/cli'
import {viteBundler} from '@vuepress/bundler-vite'
import {gitPlugin} from '@vuepress/plugin-git'
import {plumeTheme} from 'vuepress-theme-plume'

export default defineUserConfig({
    lang: 'zh-CN',

    title: 'ZGUC ACM',
    description: 'ZGUC 程序设计竞赛集训队',
    theme: plumeTheme({
        navbar: [
            {text: "首页", link: "/"},
            {text: 'OJ', link: 'http://118.25.192.142:10010'},
            {
                text: "关于集训队",
                link: "/notes/honor/2023-ICPC-hangzhou"
            }
        ],
        notes: {
            dir: "notes",
            link: "/",
            notes: [
                {
                    dir: "honor",
                    link: "/honor/",
                    sidebar: [
                        {
                            text: "团队成员",
                            items: ['members']
                        },
                        {
                            text: "比赛风采",
                            items: ['2023-ICPC-hangzhou','2024-ZJCPC']
                        },
                        {
                            text: "日常训练",
                            items: ['daily']
                        }
                    ]
                },
            ]
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
