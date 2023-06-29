import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  // 首页
  {
    path: '/index',
    name: 'index',
    component: () => import('../views/Index.vue'),
    // 路由独享守卫
    beforeEnter: (to: any, from: any, next: any) => {
      // console.log('路由独享守卫beforeEnter', to, from, next)
      next()
    }
  },
  // 登录
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/:path(.*)',
    component: () => import('../components/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    ...routes
  ]
})

export default router