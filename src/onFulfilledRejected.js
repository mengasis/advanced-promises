const fetch = require('node-fetch')

fetch('https://jsonplaceholder.typicode.com/todos/1').then(
  // onFulfilled
  () => Promise.reject(new Error('Invalid JSON')).then(results => console.log(results)),
  // onRejected
  error => console.error(error)
)
