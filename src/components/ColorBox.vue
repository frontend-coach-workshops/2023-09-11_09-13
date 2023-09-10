<template>
  <nav>
    <button
      class="btn btn-a"
      :class="{ 'btn-active': activeLetter === 'A' }"
      v-on:click="activeLetter = 'A'"
    >
      A
    </button>
    <button
      class="btn btn-b"
      :class="{ 'btn-active': activeLetter === 'B' }"
      v-on:click="activeLetter = 'B'"
    >
      B
    </button>
    <button
      class="btn btn-c"
      :class="{ 'btn-active': activeLetter === 'C' }"
      v-on:click="activeLetter = 'C'"
    >
      C
    </button>
  </nav>
  <main>
    <div class="letter letter-a" :class="{ 'letter-active': activeLetter === 'A' }">A</div>
    <div class="letter letter-b" :class="{ 'letter-active': activeLetter === 'B' }">B</div>
    <div class="letter letter-c" :class="{ 'letter-active': activeLetter === 'C' }">C</div>
  </main>
</template>

<script>
export default {
  name: 'ColorBox',
  data() {
    return {
      activeLetter: 'A'
    }
  }
}
</script>

<style>
main nav {
  text-align: center;
  margin-bottom: 20px;
}

.btn {
  font-size: 2rem;
  display: inline-block;
  margin-right: 10px;
  width: 100px;
  opacity: 0.3;
  cursor: pointer;
}

.btn-active {
  opacity: 1;
}

.btn-a {
  background-color: hotpink;
}

.btn-b {
  background-color: dodgerblue;
}

.btn-c {
  background-color: mediumorchid;
}

main main {
  text-align: center;
}

.letter {
  opacity: 0.3;
  display: inline-block;
  padding: 30px 60px;
  text-align: center;
  font-weight: bold;
  font-size: 5rem;
  margin-right: 10px;
}

.letter-active {
  opacity: 1;
}

.letter-a {
  color: hotpink;
  border: 10px solid hotpink;
}

.letter-b {
  color: dodgerblue;
  border: 10px solid dodgerblue;
}

.letter-c {
  color: mediumorchid;
  border: 10px solid mediumorchid;
}
</style>
