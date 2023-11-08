import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'hjem',
      redirect: '/download'
      //component:() => import('../views/HomeView.vue')
    }
    ,
    {
      path: '/download',
      name: 'download',
      component: () => import('../views/DownloadView.vue')
    }
    ,
    {
      path: '/upload/:method',
      name: 'upload',
      props: route => ({ name: route.query.name}),
      component: () => import('../views/UploadView.vue')
    }
    ,
    {
      path: '/upload',
      name: 'upload redirect',
      redirect: '/upload/POST'
    }
    ,
    {
      path: '/:pathMatch(.*)*',
      name: 'Not found',
      component: () => import('../views/NotFoundView.vue')
    }
  ]
})

export default router
