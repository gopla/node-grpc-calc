const client = require('./client/client')
const prompt = require('prompt')

prompt.start()

prompt.get(['val1', 'val2', 'operator'], (err, res) => {
	if (err) throw err
	console.log(` -> Value 1  : ${res.val1}`)
	console.log(` -> Value 2  : ${res.val2}`)
	console.log(` -> Operator : ${res.operator}`)

	let number = {
		val1: res.val1,
		val2: res.val2,
	}

	switch (res.operator) {
		case '+':
			client.addition(number, (err, data) => {
				if (err) throw err

				console.log(`${number.val1} + ${number.val2} = ${data.res}`)
			})
			break

		case '-':
			client.substract(number, (err, data) => {
				if (err) throw err

				console.log(`${number.val1} - ${number.val2} = ${data.res}`)
			})
			break

		case '*':
			client.multiply(number, (err, data) => {
				if (err) throw err

				console.log(`${number.val1} * ${number.val2} = ${data.res}`)
			})
			break

		case '/':
			client.divide(number, (err, data) => {
				if (err) throw err

				console.log(`${number.val1} / ${number.val2} = ${data.res}`)
			})

			break

		default:
			console.log(` -> Undefined operator input: ${res.operator}`)
			break
	}
})
