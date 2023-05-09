import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import AppLayout from '../layout/AppLayout.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: AppLayout,
    children: [
      {
        path: '/',
        name: 'HomeDashboard',
        component: () => import('@/view/HomeDashboard.vue')
      },
      {
        path: '/uikit/FirstView',
        name: 'FirstView',
        component: () => import('@/view/uikit/FirstView.vue')
    },
      {
        path: '/uikit/SecondView',
        name: 'SecondView',
        component: () => import('@/view/uikit/SecondView.vue')
    },
      {
        path: '/uikit/ThirdView',
        name: 'ThirdView',
        component: () => import('@/view/uikit/ThirdView.vue')
    },
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
