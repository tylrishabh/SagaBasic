
export default function requestGetUsers() {
  return fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
}