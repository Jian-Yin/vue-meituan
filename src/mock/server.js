const jsonServer = require('json-server')
const db = require('./db.js')
const routes = require('./routes.js')
const port = 3000

const server = jsonServer.create()

server.use(jsonServer.defaults())

// 将post转换为get
server.use((request, res, next) => {
	request.method = 'GET'
	next()
})

server.use(jsonServer.rewriter(routes))
server.use(jsonServer.router(db))

server.listen(port, () => {
	console.log(`JSON Server at localhost:${port}`);
})