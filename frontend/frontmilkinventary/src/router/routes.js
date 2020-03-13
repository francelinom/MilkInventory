
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Index.vue')
      },
      {
        path: '/item',
        component: () => import('pages/Item.vue')
      },
      {
        path: '/stock',
        component: () => import('pages/Stock.vue')
      },
      {
        path: '/report',
        component: () => import('pages/Report.vue')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('pages/Login.vue')
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
