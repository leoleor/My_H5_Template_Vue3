import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './router/permission' // 路由守卫
import './style.css'
// Vant 中有个别组件是以函数的形式提供的，包括 Toast，Dialog，Notify 和 ImagePreview 组件。
// 在使用函数组件时，unplugin-vue-components 无法自动引入对应的样式，因此需要手动引入样式。
import 'vant/es/toast/style'

const app = createApp(App)
app.use(router)

app.mount('#app')
