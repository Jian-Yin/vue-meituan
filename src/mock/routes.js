const path = require('path')
const glob = require('glob')

let files = glob.sync(path.resolve(__dirname, './') + '/api/*.js')
let routes = {}

files.forEach(filepath => {
	let api = require(filepath)
	if(api.route){
		routes = Object.assign(routes, api.route);
	}
})

module.exports = routes