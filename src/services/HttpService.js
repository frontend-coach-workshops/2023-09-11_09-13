const API_URL = 'http://localhost:4730'

function fetchData(path = '/', options = {}) {
  return fetch(API_URL + path, options).then((response) => response.json())
}

function deleteItem(path, id) {
  return fetchData(path + id, {
    method: 'DELETE'
  })
}

function updateItem(path, data) {
  return fetchData(path, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
}

export function getAllBooks() {
  return fetchData('/books')
}

export function getBook(id) {
  return fetchData('/books/' + id)
}

export function deleteBook(id) {
  return deleteItem('/books/' + id)
}

export function updateBook(id, bookData) {
  return updateItem('/books/' + id, bookData)
}
