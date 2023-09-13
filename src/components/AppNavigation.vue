<template>
  <ul>
    <li>{{ mainStore.msg }}</li>
    <li><router-link activeClass="active" :to="{ name: 'books' }">Books</router-link></li>
    <li><router-link activeClass="active" :to="{ name: 'about' }">About</router-link></li>
  </ul>
</template>

<script>
import { useMainStore } from '../stores/mainStore'

export default {
  name: 'AppNavigation',
  setup() {
    const mainStore = useMainStore()

    return {
      mainStore
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
