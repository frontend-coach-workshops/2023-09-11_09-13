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
    handleDelete(isbn) {
      fetch('http://localhost:4730/books/' + isbn, {
        method: 'DELETE'
      }).then(() => {
        this.books = this.books.filter((book) => book.isbn !== isbn)
      })
    }
  },
  created() {
    /*fetch('http://localhost:4730/books')
      .then((response) => response.json())
      .then((jsonData) => (this.books = jsonData))*/
  }
}
</script>
