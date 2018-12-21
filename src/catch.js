const fetch = require('node-fetch')

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(() =>
    Promise.reject(new Error('Invalid JSON')).then(results => console.log(results))
  )
  .catch(error => console.error(error))
