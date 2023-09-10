<template>
  <div id="box" @mousemove="(x = $event.offsetX), (y = $event.offsetY)">
    <span>x:{{ x }}, y: {{ y }}</span>
  </div>
</template>

<script>
export default {
  name: 'MouseCursor',
  data() {
    return {
      x: 12,
      y: 4
    }
  }
}
</script>

<style>
#box {
  height: 400px;
  width: 400px;
  border: 1px solid;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
