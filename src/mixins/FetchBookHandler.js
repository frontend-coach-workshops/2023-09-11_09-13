import { getBooks } from '../services/HttpService'

export default {
  data() {
    return {
      book: null
    }
  },
  methods: {
    updateBookData() {
      return fetch('http://localhost:4730/books/' + this.$route.params.id, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.book)
      })
    }
  },
  created() {
    getBooks(this.$route.params.id).then((jsonData) => (this.book = jsonData))
  }
}
