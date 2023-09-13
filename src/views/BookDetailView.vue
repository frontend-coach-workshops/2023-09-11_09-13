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
import FetchBookHandler from '@/mixins/FetchBookHandler'

export default {
  mixins: [FetchBookHandler]
}
</script>
