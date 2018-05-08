const Mock = require('mockjs')

module.exports = {
	userInfo: Mock.mock({
		status: 200,
		data: {
			userId: '121232321',
			userName: 'xiaomin',
			phone: '18883140883'
		}
	})
}