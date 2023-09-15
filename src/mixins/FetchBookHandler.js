import { getBook, updateBook } from '../services/HttpService'

export default {
  data() {
    return {
      book: null
    }
  },
  methods: {
    updateBookData() {
      return updateBook(this.$route.params.id, this.book)
    }
  },
  created() {
    getBook(this.$route.params.id).then((jsonData) => (this.book = jsonData))
  }
}
