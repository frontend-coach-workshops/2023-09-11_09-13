<template>
  <tr>
    <td>{{ title }}</td>
    <td>{{ isbn }}</td>
  </tr>
</template>

<script>
export default {
  name: 'BookListItem',
  props: {
    title: {
      type: String,
      required: true
    },
    isbn: {
      type: String,
      required: true
    }
  }
}
</script>
