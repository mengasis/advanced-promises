const fs = require('fs')

function read(path, encoding) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, encoding, (err, buf) => {
      if (err) reject(err)

      resolve(buf)
    })
  })
}
function write(path, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, err => {
      if (err) reject(err)

      console.log('Successfully written to file.')
      resolve()
    })
  })
}

function remove(filename) {
  return new Promise((resolve, reject) => {
    fs.unlink(filename, err => {
      if (err) reject(err)
      console.log('File deleted successfully')
      resolve()
    })
  })
}

const filename = 'test.txt'

write(filename, 'Hello!')
  .then(() => read(filename, 'utf-8'))
  .then(result => console.log('File readed: ', result))
  .then(() => remove(filename))
  .catch(err => console.error(err))
