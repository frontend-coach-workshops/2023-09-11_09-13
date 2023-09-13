<template>
  <form @submit.prevent="updateBook" v-if="book">
    <p class="box-success" :class="{ active: showSuccessMsg }">
      Die Daten wurden erfolgreich gespeichert
    </p>
    <h1>Edit Book id: {{ book.id }}</h1>
    <div>
      <label for="title">Title</label>
      <input type="text" id="title" v-model="book.title" />
    </div>
    <hr />
    <button>Save</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      book: null,
      showSuccessMsg: false
    }
  },
  methods: {
    updateBook() {
      fetch('http://localhost:4730/books/' + this.$route.params.id, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.book)
      }).then(() => this.updateComplete())
    },
    updateComplete() {
      this.showSuccessMsg = true
      setTimeout(() => (this.showSuccessMsg = false), 5000)
    }
  },
  created() {
    fetch('http://localhost:4730/books/' + this.$route.params.id)
      .then((response) => response.json())
      .then((jsonData) => (this.book = jsonData))
  }
}
</script>

<style scoped>
.box-success {
  border: 2px solid green;
  background-color: lightgreen;
  color: green;
  padding: 10px;
  margin-bottom: 20px;
  opacity: 0;
  transition: 500ms;
}

.box-success.active {
  opacity: 1;
}

input[type='text'] {
  border: 2px solid gray;
  display: block;
  width: 100%;
  padding: 5px;
  border-radius: 3px;
}
</style>
