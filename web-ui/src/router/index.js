import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'hjem',
      redirect: '/download'
      //component:() => import('../views/HomeView.vue')
    },
    {
      path: '/download',
      name: 'download',
      component: () => import('../views/DownloadView.vue')
    }
    ,
    {
      path: '/upload',
      name: 'upload',
      component: () => import('../views/UploadView.vue')
    }
  ]
})

export default router
