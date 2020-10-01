const client = require('./client/client')

let number = {
  val1: 100,
  val2: 5
}

client.addition(number, (err, data) => {
  if (err) throw err

  console.log(`${number.val1} + ${number.val2} = ${data.res}`)
})
client.substract(number, (err, data) => {
  if (err) throw err

  console.log(`${number.val1} - ${number.val2} = ${data.res}`)
})
client.multiply(number, (err, data) => {
  if (err) throw err

  console.log(`${number.val1} * ${number.val2} = ${data.res}`)
})
client.divide(number, (err, data) => {
  if (err) throw err

  console.log(`${number.val1} / ${number.val2} = ${data.res}`)
})
