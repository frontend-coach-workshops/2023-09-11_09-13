<template>
  <AppNavigation />
  <BookList />
</template>

<script>
import AppNavigation from './components/AppNavigation.vue'
import BookList from './components/BookList.vue'

export default {
  name: 'App',
  components: {
    AppNavigation,
    BookList
  }
}
</script>
