import { createRouter, createWebHistory } from 'vue-router'
import BooksList from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import BookDetailView from '@/views/BookDetailView.vue'
import BooksView from '@/views/BooksView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/books',
      alias: '/',
      component: BooksView,
      children: [
        {
          path: '',
          name: 'books',
          component: BooksList
        },
        {
          path: ':id',
          name: 'book-detail',
          component: BookDetailView
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

export default router
