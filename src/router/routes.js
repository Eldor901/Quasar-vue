const routes = [
  {
    path: '/',
    name: 'home',
    meta: {layout: 'main'},
    component: () => import('pages/Home.vue'),
  },
  {
    path: '/todos',
    name: 'todos',
    meta: {layout: 'main'},
    component: () => import('pages/Todos.vue')
  },
  {
    path: '/stories',
    name: 'stories',
    meta: {layout: 'main'},
    component: () => import('pages/Stories.vue')
  }

]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    meta: {layout: 'empty'},
    component: () => import('pages/Error404.vue')
  })
}

export default routes
