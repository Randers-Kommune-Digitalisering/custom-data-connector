import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Hjem',
      redirect: '/upload'
      //component:() => import('../views/HomeView.vue')
    }
    ,
    {
      path: '/upload',
      name: 'Upload',
      component: () => import('../views/UploadView.vue'),
    }
    ,
    {
      path: '/status',
      name: 'Status',
      component: () => import('../views/StatusView.vue')
    }
    ,
    {
      path: '/exported',
      name: 'Udtræk',
      component: () => import('../views/ExportedView.vue')
    }
    ,
    {
      path: '/imported',
      name: 'Imported',
      component: () => import('../views/ImportedView.vue')
    }
    ,
    {
      path: '/unauthorized',
      name: 'Unauthorized',
      component: () => import('../views/UnauthorizedView.vue')
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
