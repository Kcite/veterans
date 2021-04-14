import http from "./request.js";
// get方式
// 用户登录
// export const getlogin = data => http.get('/user/login', data)
// wx用户获取sessionKey
export const wxSessionKey = data => http.get('/user/wxSessionKey', data)
// wx数据解密
export const wxDecode = data => http.get('/user/wxDecode', data)
// 短信发送
export const sendSMS = data => http.get('/user/sendSMS', data)
// 获取订单列表
export const orderList = data => http.get('/order/orderList', data)
// 订单详情
export const orderDetail = data => http.get('/order/orderGet', data)
// 订单客户确认
export const orderConfirm = data => http.get('/order/orderConfirm', data)

// 查询swiper列表
// export const getSwiperList = data => http.get('/ShowMain.asmx/GetMainBanner', data)


//post方式

// 用户注册
export const registerPerson = data => http.post('/person.asmx/registerPerson', data, {
	headers: {
		"content-type": "application/x-www-form-urlencoded",
	}
})

// 校验手机号
export const VerifyPhone = data => http.post('/Person.asmx/VerifyPhone', data, {
	headers: {
		"content-type": "application/x-www-form-urlencoded",
	}
})

// 用户登录
export const getlogin = data => http.post('/Person.asmx/Login', data, {
	headers: {
		"content-type": "application/x-www-form-urlencoded",
	}
})

// 获取用户信息
export const getPersonToken = data => http.post('/Person.asmx/getPersonToken', data, {
	headers: {
		"content-type": "application/x-www-form-urlencoded",
	}
})

// 完善信息
export const updatePersonInfo = data => http.post('/Person.asmx/updatePersonInfo', data, {
	headers: {
		"content-type": "application/x-www-form-urlencoded",
	}
})

// 实名认证-更新退伍军人证件
export const UpLoadTwjz = data => http.post('/Person.asmx/UpLoadTwjz', data, {
	headers: {
		"content-type": "application/x-www-form-urlencoded",
	}
})

// getSwiperList | 获取banner
export const getSwiperList = data => http.post('/ShowMain.asmx/GetMainBanner', data, {
	headers: {
		"content-type": "application/x-www-form-urlencoded",
	}
})

// getNoticeBarList | 获取滚动信息
export const getNoticeBarList = data => http.post('/NoticeBar.asmx/getNoticeBarList', data, {
	headers: {
		"content-type": "application/x-www-form-urlencoded",
	}
})

// getNewsListByTop | 获取首页新闻
export const getNewsListByTop = data => http.post('/News.asmx/getNewsListByTop', data, {
	headers: {
		"content-type": "application/x-www-form-urlencoded",
	}
})

// getNewsList | 获取新闻列表
export const getNewsList = data => http.post('/News.asmx/getNewsList', data, {
	headers: {
		"content-type": "application/x-www-form-urlencoded",
	}
})

// getNewInfo | 获取新闻详情
export const getNewInfo = data => http.post('/News.asmx/getNewInfo', data, {
	headers: {
		"content-type": "application/x-www-form-urlencoded",
	}
})

// getCourseList | 获取课程列表
export const getCourseList = data => http.post('/Course.asmx/GetCourseBySchool_List', data, {
	headers: {
		"content-type": "application/x-www-form-urlencoded",
	}
})

// getCourseInfo | 获取课程详情
export const getCourseInfo = data => http.post('/Course.asmx/GetCourseBySchool_Info', data, {
	headers: {
		"content-type": "application/x-www-form-urlencoded",
	}
})

// createEnrollData | 课程报名
export const createEnrollData = data => http.post('/Enroll.asmx/createEnrollData', data, {
	headers: {
		"content-type": "application/x-www-form-urlencoded",
	}
})
// getEnrollListByPerson | 我的课程
export const getEnrollListByPerson = data => http.post('/Enroll.asmx/getEnrollListByPerson', data, {
	headers: {
		"content-type": "application/x-www-form-urlencoded",
	}
})

// getCourseInfo | 获取课程
export const getCourseTypeInfo = data => http.post('/Course.asmx/getCourseInfo', data, {
	headers: {
		"content-type": "application/x-www-form-urlencoded",
	}
})

// getSchoolList
export const getSchoolList = data => http.post('/School.asmx/getSchoolList', data, {
	headers: {
		"content-type": "application/x-www-form-urlencoded",
	}
})

// getSchoolInfo
export const getSchoolInfo = data => http.post('/School.asmx/getSchoolInfo', data, {
	headers: {
		"content-type": "application/x-www-form-urlencoded",
	}
})
