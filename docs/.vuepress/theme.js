import {generateSidebarJson} from "../utils/DirUtil.js";
import {recoTheme} from 'vuepress-theme-reco'



export default {
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
}