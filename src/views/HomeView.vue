<template>
  <BookList :books="books" @delete="handleDelete" />
</template>

<script>
import BookList from '@/components/books/BookList.vue'
import { useBooksStore } from '../stores/booksStore'

export default {
  name: 'HomeView',
  components: {
    BookList
  },
  setup() {
    const booksStore = useBooksStore()

    return { booksStore }
  },
  data() {
    return {
      // books: []
    }
  },
  computed: {
    books() {
      return this.booksStore.books
    }
  },
  methods: {
    async handleDelete(isbn) {
      await this.booksStore.deleteBook(isbn)
    }
  },
  created() {
    /*fetch('http://localhost:4730/books')
      .then((response) => response.json())
      .then((jsonData) => (this.books = jsonData))*/
  }
}
</script>
