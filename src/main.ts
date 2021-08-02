import './lib/kaku.scss'
import './index.scss'
//创建app实例的函数
import { createApp } from 'vue'
//引入组件
import App from './App.vue'
import { router } from './router'
import 'github-markdown-css'
import Markdown from './components/Markdown.vue'
//接收App组件并把它挂载到id为app的div上面

const app = createApp(App)
app.use(router)
app.mount('#app')
app.component("Markdown",Markdown)
