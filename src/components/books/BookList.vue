<template>
  <table>
    <BookListItem
      v-for="book in books"
      :key="book.isbn"
      :title="book.title"
      :isbn="book.isbn"
      @delete="handleDelete"
    />
  </table>
</template>
<script>
import BookListItem from './BookListItem.vue'

export default {
  name: 'BookList',
  components: {
    BookListItem
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

<style>
table {
  font-family: 'Trebuchet MS', Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  padding: 8px;
}

th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #4caf50;
  color: white;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

tr:hover {
  background-color: #dddddd;
}
</style>
