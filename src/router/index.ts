import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Readonly<RouteRecordRaw[]> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/layout/index.vue'),
    redirect: '/about',
    children: [
      {
        path: '/about',
        name: 'about',
        component: () => import('../components/about/index.vue')
      },
      {
        path: '/404',
        name: '404',
        component: () => import('../components/error/404.vue'),
      },
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router