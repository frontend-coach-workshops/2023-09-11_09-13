<template>
  <template v-if="book">
    <h1>{{ book.title }}</h1>
    <small>Author: {{ book.author }}</small>
    <p>{{ book.abstract }}</p>
    <img :src="book.cover" :alt="book.title" />
  </template>
  <p>
    <router-link :to="{ name: 'books' }">Back</router-link>
  </p>
</template>

<script>
//import FetchBookHandler from '@/mixins/FetchBookHandler'
import { useBooksStore } from '../stores/booksStore'

export default {
  // mixins: [FetchBookHandler],
  setup() {
    const booksStore = useBooksStore()

    return { booksStore }
  },
  computed: {
    book() {
      return this.booksStore.books.find((bookData) => bookData.id === this.$route.params.id)
    }
  }
}
</script>
