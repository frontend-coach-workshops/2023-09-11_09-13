import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '@/views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/books',
      alias: '/',
      component: () => import('@/views/BooksView.vue'),
      children: [
        {
          path: '',
          name: 'books',
          component: () => import('@/views/HomeView.vue')
        },
        {
          path: ':id',
          name: 'book-detail',
          component: () => import('@/views/BookDetailView.vue')
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    }
  ]
})

router.beforeEach(() => {})

export default router
