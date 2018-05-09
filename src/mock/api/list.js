const Mock = require('mockjs')

/*
若route存在 响应必须写在 response 中
若route不存在 响应可以写在 response 中，也可直接写在 exports 中
route 中可存放多个路由， response 也可存放多个响应
*/

module.exports = {
	route: {
		'/product': '/product',
		'/pro?productId=1': '/product?productId=1'
	},
	response: {
		product: [
			Mock.mock({
				productId: 1,
				name: 'test1'
			}),
			Mock.mock({
				productId: 2,
				name: 'test2'
			})
		]		
	}
}