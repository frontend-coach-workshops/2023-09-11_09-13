<template>
  <AppNavigation />
  <h1>My first vue project</h1>
  <MouseCursor />
</template>

<script>
import AppNavigation from './components/AppNavigation.vue'
import MouseCursor from './components/MouseCursor.vue'

export default {
  name: 'App',
  components: {
    AppNavigation,
    MouseCursor
  }
}
</script>
