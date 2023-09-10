<template>
  <button @click="isVisible = !isVisible">
    <span v-if="isVisible">Hide</span>
    <span v-else>Show</span>
  </button>
  <div class="container" v-show="isVisible">Lorem ipsum.</div>
</template>

<script>
export default {
  name: 'InfoBox',
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
