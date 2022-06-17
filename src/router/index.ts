import { createRouter, createMemoryHistory, RouteRecordRaw } from 'vue-router'
import NProgress from 'nprogress'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Layout',
    component: () => import('~/layout/Layout.vue'),
    children: [
      {
        path: '',
        name: 'Index',
        component: () => import('~/views/index/Index.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})
router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})
router.afterEach((to, from) => {
  NProgress.done()
})

export default router
