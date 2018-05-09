const path = require('path')
const glob = require('glob')

let files = glob.sync(path.resolve(__dirname, './') + '/api/*.js')
let data = {}

files.forEach(filepath => {
	let api = require(filepath)
	data = Object.assign(data, api.response ? api.response : api);
})

module.exports = data