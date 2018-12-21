function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

console.log('Ready!')

sleep(1000)
  .then(() => console.log('After 1s'))
  .then(() => sleep(1000))
  .then(() => console.log('After 2s'))
  .then(() => sleep(1000))
  .then(() => console.log('After 3s'))
  .then(() => sleep(1000))
  .then(() => console.log('After 4s'))
  .then(() => sleep(1000))
  .then(() => console.log('After 5s'))
  .catch(() => console.error('Error: Rejected'))
