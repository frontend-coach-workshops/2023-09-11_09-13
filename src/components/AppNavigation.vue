<template>
  <ul>
    <li>
      <router-link activeClass="active" :to="{ name: 'books' }"
        >Books ({{ bookStore.count }})</router-link
      >
    </li>
    <li><router-link activeClass="active" :to="{ name: 'about' }">About</router-link></li>
  </ul>
</template>

<script>
import { useBooksStore } from '../stores/booksStore'

export default {
  name: 'AppNavigation',
  setup() {
    const bookStore = useBooksStore()

    return {
      bookStore
    }
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333333;
}

li {
  float: left;
}

a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

a:hover:not(.active) {
  background-color: #111111;
}

a.active {
  background-color: #4caf50;
}
</style>
