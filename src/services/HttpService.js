const API_URL = 'http://localhost:4730'

export function fetchData(path = '/', options = {}) {
  return fetch(API_URL + path, options).then((response) => response.json())
}

export function getBooks(id) {
  return fetchData('/books/' + id)
}
