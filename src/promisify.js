const fs = require('fs')
const util = require('util')

const write = util.promisify(fs.writeFile)
const read = util.promisify(fs.readFile)
const remove = util.promisify(fs.unlink)

const filename = 'test.txt'

write(filename, 'Hello!')
  .then(() => {
    console.log('Successfully written to file.')
    return read(filename, 'utf-8')
  })
  .then(result => {
    console.log('File readed: ', result)
  })
  .then(() => remove(filename))
  .then(() => {
    console.log('File deleted successfully')
  })
  .catch(err => console.error(err))
