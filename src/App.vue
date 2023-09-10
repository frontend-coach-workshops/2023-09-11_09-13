<template>
  <AppNavigation />
  <h1>My first vue project</h1>
  <MouseCursor />
  <InfoBox />
</template>

<script>
import AppNavigation from './components/AppNavigation.vue'
import MouseCursor from './components/MouseCursor.vue'
import InfoBox from './components/InfoBox.vue'

export default {
  name: 'App',
  components: {
    AppNavigation,
    MouseCursor,
    InfoBox
  }
}
</script>
