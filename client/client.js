const PROTO_PATH = 'calc.proto'
const grpc = require('grpc')
const protoLoader = require("@grpc/proto-loader")

let packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  arrays: true
})

const CalcService = grpc.loadPackageDefinition(packageDefinition).CalcService
const client = new CalcService('localhost:50051', grpc.credentials.createInsecure())

module.exports = client

