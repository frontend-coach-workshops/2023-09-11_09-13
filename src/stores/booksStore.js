import { defineStore } from 'pinia'
import { getAllBooks, deleteBook } from '../services/HttpService'

export const useBooksStore = defineStore('booksStore', {
  state() {
    return {
      books: []
    }
  },
  getters: {
    count(state) {
      return state.books.length
    }
  },
  actions: {
    async getAllBooks() {
      const booksData = await getAllBooks()
      this.books = booksData
    },
    async deleteBook(id) {
      await deleteBook(id)
      this.books = this.books.filter((book) => book.id !== id)
    }
  }
})
