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
export default {
  data() {
    return {
      book: null
    }
  },
  created() {
    fetch('http://localhost:4730/books/' + this.$route.params.id)
      .then((response) => response.json())
      .then((jsonData) => (this.book = jsonData))
  }
}
</script>
