/* 模拟数据 */

// 轮播图列表
export function swiperList() {
	let data = [{
		url: '/pages/new/detail',
		image: 'http://www.mva.gov.cn/sy/pc/syyt/images/P020210210740844784569.jpg',
		title: ''
	}, {
		url: '/pages/new/detail',
		image: 'http://www.mva.gov.cn/sy/tpxw/202103/W020210303422145462444.jpg'
	}, {
		url: '/pages/new/detail',
		image: 'http://www.mva.gov.cn/sy/tpxw/202102/W020210221743778850569.jpg'
	}, {
		url: '/pages/home/policies/index',
		image: 'http://www.mva.gov.cn/sy/tpxw/202102/W020210210747417334318.jpg'
	}, {
		url: '/pages/new/detail',
		image: 'http://www.mva.gov.cn/sy/tpxw/202102/W020210207670620502881.jpg'
	}]
	return data
}
// 滚动通知
export function noticeBarList() {
	let data = [
		'西藏山南军分区边防官兵：我们站立的地方是中国',
		'中国军方已仁至义尽，印方勿再自欺欺人！',
		'这段视频，还原了喀喇昆仑那场英勇战斗……',
		'中央军委政治工作部领导就新修订的《军队政治工作条',
	]
	return data
}
// 新闻
export function newList() {
	let data = [{
			url: '/pages/new/detail',
			image: 'https://dss0.bdstatic.com/6Ox1bjeh1BF3odCf/it/u=2841462214,1650160094&fm=217&app=2&size=f242,162&n=0&g=0n&f=JPG?s=DA03F205101361C84AA168DE0100C0B3&sec=1613877947&t=fffa9ad4e5535ef56afbe371a3d7cdf8',
			title: '中国军方已仁至义尽，印方勿再自欺欺人！',
			time: '2021年02月19日 21:59',
			origin: '中新网微信公众号'
		},
		{
			url: '/pages/new/detail',
			image: 'https://dss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3464182287,3519893733&fm=173&app=49&size=f242,162&n=0&g=0n&f=JPEG?s=FE2FB0440633019C4FA4AE8A0300A09F&sec=1613877958&t=b80d26474c108979a42a888af10a34b0',
			title: '00后戍边战士为何说对祖国有清澈的爱?康辉这样解释',
			time: '2021-02-20 09:12',
			origin: '央视新闻'
		}
	]
	return data
}
// 资讯
export function infoList() {
	let data = [{
			url: '/pages/new/detail',
			image: 'https://dss0.bdstatic.com/6Ox1bjeh1BF3odCf/it/u=2841462214,1650160094&fm=217&app=2&size=f242,162&n=0&g=0n&f=JPG?s=DA03F205101361C84AA168DE0100C0B3&sec=1613877947&t=fffa9ad4e5535ef56afbe371a3d7cdf8',
			title: '中国军方已仁至义尽，印方勿再自欺欺人！',
			time: '2021年02月19日 21:59',
			origin: '中新网微信公众号'
		},
		{
			url: '/pages/new/detail',
			image: 'https://dss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3464182287,3519893733&fm=173&app=49&size=f242,162&n=0&g=0n&f=JPEG?s=FE2FB0440633019C4FA4AE8A0300A09F&sec=1613877958&t=b80d26474c108979a42a888af10a34b0',
			title: '00后戍边战士为何说对祖国有清澈的爱?康辉这样解释',
			time: '2021-02-20 09:12',
			origin: '央视新闻'
		}
	]
	return data
}
// 政策法规
export function policiesList() {
	let data = [{
		imgUrl: 'http://www.mva.gov.cn/sy/zt/tyjrbzf/xcdp/202102/W020210209315621963303.jpg',
		name: '退役军人政策法规微动漫之：伤残抚恤金如何发放和管理？',
		time: '2021年02月09日 08:43',
		source: '政策法规司',
		myVideo: 'http://www.mva.gov.cn/sy/dsp/zcfg/202101/P020210128647291392817.mp4',
		reading: '1000',
		likes: '900',
		likesType: true
	}, {
		imgUrl: 'http://www.mva.gov.cn/sy/zt/tyjrbzf/xcdp/202102/W020210208315473002680.jpg',
		name: '退役军人政策法规微动漫之：伤残证件种类及发放管理',
		time: '2021年02月08日 08:43',
		source: '政策法规司',
		myVideo: 'http://www.mva.gov.cn/sy/dsp/zcfg/202101/P020210128646627546576.mp4',
		reading: '2000',
		likes: '1500',
		likesType: false
	}, {
		imgUrl: 'http://www.mva.gov.cn/sy/zt/tyjrbzf/xcdp/202102/W020210207283652424222.jpg',
		name: '退役军人政策法规微动漫之：残疾等级的评定程序',
		time: '2021年02月07日 07:50',
		source: '政策法规司',
		myVideo: 'http://www.mva.gov.cn/sy/dsp/zcfg/202101/P020210128645764412333.mp4',
		reading: '2200',
		likes: '1992',
		likesType: true
	}, {
		imgUrl: 'http://www.mva.gov.cn/sy/zt/tyjrbzf/xcdp/202102/W020210206335254495559.jpg',
		name: '退役军人政策法规微动漫之：残疾军人的抚恤和供养',
		time: '2021年02月06日 09:02',
		source: '政策法规司',
		myVideo: 'http://www.mva.gov.cn/sy/dsp/zcfg/202101/P020210128645001242588.mp4',
		reading: '2221',
		likes: '1221',
		likesType: false
	}, {
		imgUrl: 'http://www.mva.gov.cn/sy/zt/tyjrbzf/xcdp/202102/W020210205322247046724.jpg',
		name: '退役军人政策法规微动漫之：残疾军人分类等级和评残的权限类型',
		time: '2021年02月05日 08:54',
		source: '政策法规司',
		myVideo: 'http://www.mva.gov.cn/sy/dsp/zcfg/202101/P020210128644317196392.mp4',
		reading: '4002',
		likes: '2031',
		likesType: false
	}, {
		imgUrl: 'http://www.mva.gov.cn/sy/zt/tyjrbzf/xcdp/202102/W020210204319208442738.jpg',
		name: '退役军人政策法规微动漫之：“三属”享受哪些抚恤待遇？',
		time: '2021年02月04日 08:49',
		source: '政策法规司',
		myVideo: 'http://www.mva.gov.cn/sy/dsp/zcfg/202101/P020210128643765666070.mp4',
		reading: '5021',
		likes: '3112',
		likesType: false
	}, {
		imgUrl: 'http://www.mva.gov.cn/sy/zt/tyjrbzf/xcdp/202102/W020210203306688839281.jpg',
		name: '退役军人政策法规微动漫之：光荣院的入住程序和服务费用有哪些规定？',
		time: '2021年02月03日 08:26',
		source: '政策法规司',
		myVideo: 'http://www.mva.gov.cn/sy/dsp/zcfg/202101/P020210128643099393628.mp4',
		reading: '5121',
		likes: '2141',
		likesType: false
	}, {
		imgUrl: 'http://www.mva.gov.cn/sy/zt/tyjrbzf/xcdp/202102/W020210202300135464028.jpg',
		name: '退役军人政策法规微动漫之：光荣院都提供哪些服务保障？',
		time: '2021年02月02日 08:17',
		source: '政策法规司',
		myVideo: 'http://www.mva.gov.cn/sy/dsp/zcfg/202101/P020210128642541933105.mp4',
		reading: '6092',
		likes: '3122',
		likesType: false
	}]
	return data
}
// 折现图数据
export function columnList() {
	let data = {
		categories: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
		series: [{
			name: "交易价格",
			data: [3400, 3445, 3100, 3780, 3100, 3911, 3420],
			color: "#328FFF",
			textColor: '#999',
			textSize: 14,
			// format:
		}]
	}
	return data
}
// 柱状图数据
export function lineList() {
	let data = {
		categories: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
		series: [{
			name: "交易价格",
			data: [15, 45, 37, 43, 34, 39, 20],
			color: "#fff",
			textColor: '#fff',
			textSize: 14,
			// format:
		}]
	}
	return data
}
