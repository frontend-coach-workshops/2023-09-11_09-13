<template>
  <button @click="isVisible = !isVisible">
    <span v-if="isVisible">Hide</span>
    <span v-else>Show</span>
  </button>
  <div class="container" v-show="isVisible"><ColorBox /></div>
</template>

<script>
import ColorBox from './ColorBox.vue'

export default {
  name: 'InfoBox',
  components: {
    ColorBox
  },
  data() {
    return {
      isVisible: true
    }
  }
}
</script>

<style>
.container {
  border: 1px solid;
  background-color: lightgrey;
}
</style>
