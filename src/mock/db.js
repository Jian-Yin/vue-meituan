const Path = require('path')
const glob = require('glob')

let files = glob.sync(Path.resolve(__dirname, './') + '/api/*.js')
let data = {}

files.forEach(filepath => {
	let api = require(filepath)
	data = Object.assign(data, api);
})

module.exports = data