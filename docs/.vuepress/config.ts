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
                link: "/notes/honor/管理制度"
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
                            text: "集训队介绍",
                            items: ['管理制度','集训队现役成员','集训队退役队员']
                        },
                        {
                            text: "比赛风采",
                            items: ['2023-ICPC区域赛(杭州站)','2023-浙江省大学生程序设计竞赛','2024-ICPC邀请赛(武汉站、西安站)','2024-百度之星','2024-浙江省大学生程序设计竞赛']
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
