<template>
  <BookList :books="books" @delete="handleDelete" />
</template>

<script>
import BookList from '@/components/books/BookList.vue'

export default {
  name: 'HomeView',
  components: {
    BookList
  },
  data() {
    return {
      books: []
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
    fetch('http://localhost:4730/books')
      .then((response) => response.json())
      .then((jsonData) => (this.books = jsonData))
  }
}
</script>
