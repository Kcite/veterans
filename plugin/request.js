const Fly = require("../utils/wx.js")
const instance = new Fly()

// https://www.yunxi360.com/wap_api/index/ad
// const host = 'http://sjws-et.com/'
const host = process.env.NODE_ENV === 'production' ? 'http://82.156.230.120' :
	'http://82.156.230.120';
instance.interceptors.request.use((req) => {
	const token = uni.getStorageSync('token')

	if (token) {
		// req.params.token = token
	}
	return req
})

instance.interceptors.response.use(
	(res, promise) => {
		if (res.status == '401' || res.status === '500') {
			uni.removeStorage({
				key: 'token'
			});
			return
		}

		if (res.data.code == '401' || res.data.msg === '登录状态已失效') {
			uni.removeStorage({
				key: 'token'
			});
			uni.navigateTo({
				url: '/pages/login/login'
			})
			return
		}

		return promise.resolve(res)
	},
	(err, promise) => {
		if (err.status == '401') {
			uni.removeStorage({
				key: 'token'
			});
			return
		}

		if (err.status != 200) {
			return
		}

		return promise.resolve(err.response)
	}
)

instance.config.baseURL = host

export default instance
