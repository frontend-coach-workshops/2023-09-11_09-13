<template>
  <AppNavigation />
  <router-view />
</template>

<script>
import AppNavigation from '@/components/AppNavigation.vue'
import { useBooksStore } from './stores/booksStore'

export default {
  name: 'App',
  components: {
    AppNavigation
  },
  setup() {
    const booksStore = useBooksStore()

    booksStore.getAllBooks()
  }
}
</script>
