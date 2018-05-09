const Mock = require('mockjs')

module.exports = {
	route: {
		'/index/headerNav': '/headerNav',
	},
	response: {
		headerNav: Mock.mock({
			code: 200,
			data: {
				tabs: [
					{
						name: '推荐',
					},
					{
						name: '手机',
					},
					{
						name: '智能',
					},
					{
						name: '电视',
					},
					{
						name: '电脑',
					},
					{
						name: '双摄',
					},
					{
						name: '全面屏',
					},
					{
						name: '生活周边',
					},
					{
						name: '盒子',
					}
				]
			}
		})
	}
}