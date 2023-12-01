import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'hjem',
      redirect: '/upload'
      //component:() => import('../views/HomeView.vue')
    }
    ,
    {
      path: '/upload',
      name: 'upload',
      component: () => import('../views/UploadView.vue')
    }
    ,
    {
      path: '/status',
      name: 'status',
      component: () => import('../views/StatusView.vue')
    }
    ,
    {
      path: '/out',
      name: 'Udtræk',
      component: () => import('../views/ExportedView.vue')
    }
    ,
    {
      path: '/in',
      name: 'Imported',
      component: () => import('../views/ImportedView.vue')
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
