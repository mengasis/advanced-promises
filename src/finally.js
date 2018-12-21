const fetch = require('node-fetch')

var status = new Set([])

status.add('Init')

fetch('https://jsonplaceholder.typicode.com/todos/1fhghb')
  .then(response => {
    if (!response.ok) {
      status.add('Error API')
      return Promise.reject(new Error('Error API'))
    }
    status.add('Successfully')

    return response.json().then(results => results)
  })
  .catch(error => {
    setTimeout(() => status.add('Error'), 1000)

    console.error(error)
  })
  .finally(() => {
    setTimeout(() => status.add('Cleaned'), 1000)
  })

setInterval(() => console.log(status), 200)
