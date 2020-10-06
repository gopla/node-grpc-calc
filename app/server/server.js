const PROTO_PATH = './app/calc.proto'
const grpc = require('grpc')
const protoLoader = require('@grpc/proto-loader')

let packageDefinition = protoLoader.loadSync(PROTO_PATH, {
	keepCase: true,
	longs: String,
	enums: String,
	arrays: true,
})
const calcProto = grpc.loadPackageDefinition(packageDefinition)

const server = new grpc.Server()

server.addService(calcProto.CalcService.service, {
	addition: (call, callback) => {
		let val1 = call.request.val1,
			val2 = call.request.val2

		let res = {
			res: parseInt(val1) + parseInt(val2),
		}
		callback(null, res)
	},

	substract: (call, callback) => {
		let val1 = call.request.val1,
			val2 = call.request.val2

		let res = {
			res: parseInt(val1) - parseInt(val2),
		}
		callback(null, res)
	},

	multiply: (call, callback) => {
		let val1 = call.request.val1,
			val2 = call.request.val2

		let res = {
			res: parseInt(val1) * parseInt(val2),
		}
		callback(null, res)
	},

	divide: (call, callback) => {
		let val1 = call.request.val1,
			val2 = call.request.val2

		let res = {
			res: parseInt(val1) / parseInt(val2),
		}
		callback(null, res)
	},
})

server.bind('127.0.0.1:50051', grpc.ServerCredentials.createInsecure())
console.log('Server running at http://127.0.0.1:50051')
server.start()
