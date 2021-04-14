<!-- xxx -->
<template>
	<view class="container pb30">
		<u-navbar :is-back="false" title="首页">
			<!-- <view class="flex pr20" slot="right">
				<u-icon class="mr10" name="search" color="#ff0000" :size="54"></u-icon>
				<u-icon name="scan" color="#ff0000" :size="54"></u-icon>
			</view> -->
		</u-navbar>

		<view class="li-swiper" v-if="swiperList.length">
			<u-swiper height="420" :list="swiperList" autoplay indicator-pos="bottomRight" @click="swiperClick">
			</u-swiper>
		</view>

		<view class="bgcfff pt20 pb20">
			<u-grid :col="4" :border='false'>
				<u-grid-item @click="navTo('/pages/home/policies/index')">
					<u-icon name="zhengce" color="#ff0000" :size="80" custom-prefix="li-icon"></u-icon>
					<view class="fw700">政策法规</view>
				</u-grid-item>
				<u-grid-item @click="navTo('/pages/tab-bar/getJob','','tab')">
					<u-icon name="qiuzhi1" color="#ff0000" :size="80" custom-prefix="li-icon"></u-icon>
					<view class="fw700">企业招聘</view>
				</u-grid-item>
				<u-grid-item @click="navTo('/pages/home/jobWanted/index')">
					<u-icon name="jiuye" color="#ff0000" :size="80" custom-prefix="li-icon"></u-icon>
					<view class="fw700">就业求职</view>
				</u-grid-item>
				<u-grid-item @click="navTo('/pages/tab-bar/train','','tab')">
					<u-icon name="peixun" color="#ff0000" :size="80" custom-prefix="li-icon"></u-icon>
					<view class="fw700">技能培训</view>
				</u-grid-item>
				<u-grid-item @click="navTo('/pages/home/education')">
					<u-icon name="xueli" color="#ff0000" :size="80" custom-prefix="li-icon"></u-icon>
					<view class="fw700">学历提升</view>
				</u-grid-item>
				<u-grid-item @click="navTo('')">
					<u-icon name="falv" color="#ff0000" :size="80" custom-prefix="li-icon"></u-icon>
					<view class="fw700">法律援助</view>
				</u-grid-item>
				<u-grid-item @click="navTo('')">
					<u-icon name="gongjian" color="#ff0000" :size="80" custom-prefix="li-icon"></u-icon>
					<view class="fw700">拥军共建</view>
				</u-grid-item>
				<u-grid-item @click="getCS()">
					<u-icon name="gongyi" color="#ff0000" :size="80" custom-prefix="li-icon"></u-icon>
					<view class="fw700">热心公益</view>
				</u-grid-item>
			</u-grid>

			<!-- 播报信息 -->
			<view class="flex alct ml20 mr20 pr20 br50" style="background: #E1E9FF;" @click="navTo('/pages/new/index')">
				<view style="flex: 1;">
					<u-notice-bar mode="vertical" :list="noticeBarList" type="primary" bg-color="#E1E9FF"
						volume-size="44" border-radius="50"></u-notice-bar>
				</view>
				<view style="width: 120rpx;">
					查看更多
				</view>
			</view>
		</view>
		<!-- salogin -->
		<u-image width="100%" height="200rpx" src="http://xixiaruan.com/veterans/images/salogin.png">
		</u-image>
		<!-- 政府新闻 -->
		<view>
			<u-card margin="20rpx 0rpx" :show-foot="false">
				<u-section slot="head" title="政府新闻" sub-title="查看更多" font-size="30" line-color="#f00"
					@click="navTo('/pages/new/index')"></u-section>
				<view slot="body">
					<view class="flex pt10 pb10" v-for="item in newList" :key="item.AutoID"
						@click="navTo('/pages/new/detail',item.AutoID)">
						<u-image class="mr20 br10" width="240rpx" style="flex: 0 0 240rpx;" height="150rpx"
							:src="item.cImgUrl">
						</u-image>
						<view class="flex column jusb">
							<text class="title">{{item.cTitle}}</text>
							<text class="fs24 c9">{{item.dLastDate}} {{item.cFrom}}</text>
						</view>
					</view>
				</view>
			</u-card>
		</view>
		<!-- 就业资讯 -->
		<view>
			<u-card margin="20rpx 0rpx" :show-foot="false">
				<u-section slot="head" title="就业资讯" sub-title="查看更多" font-size="30" line-color="#f00"
					@click="navTo('/pages/new/index')"></u-section>
				<view slot="body">
					<view class="flex pt10 pb10" v-for="item in newList" :key="item.image"
						@click="navTo('/pages/new/detail')">
						<u-image class="mr20 br10" width="240rpx" style="flex: 0 0 240rpx;" height="150rpx"
							:src="item.image">
						</u-image>
						<view class="flex column jusb">
							<text class="title">{{item.title}}</text>
							<text class="fs24 c9">{{item.time}} {{item.origin}}</text>
						</view>
					</view>
				</view>
			</u-card>
		</view>
		<u-toast ref="uToast"></u-toast>
	</view>
</template>

<script>
	import {
		getSwiperList,
		getNoticeBarList,
		getNewsListByTop
	} from '@/plugin/api'
	export default {
		data() {
			return {
				swiperList: [], // 轮播图
				noticeBarUrlList: [], // 滚动信息全部内容
				noticeBarList: [], // 滚动通知
				newList: [], // 政府新闻
				infoList: [], // 资讯
				locaInfo: null, // 当前经纬度
			}
		},
		onLoad() {
			console.log('[index][onLoad]');

		},
		onShow() {
			let that = this;
			console.log('[index][onShow]');

			uni.getLocation({
				type: 'wgs84',
				success: function(res) {
					// console.log('当前位置的经度：' + res.longitude);
					// console.log('当前位置的纬度：' + res.latitude);

					that.locaInfo = {
						latitude: res.latitude,
						longitude: res.longitude
					}
					console.log('locaInfo', res.latitude + ',' + res.longitude);
					uni.setStorageSync('locaInfo', res.latitude + ',' + res.longitude);
					that.init();
				},
				fail() {
					that.init();
				}
			});
		},
		// 下拉刷新
		onPullDownRefresh() {
			console.log('【index】【onPullDownRefresh】【loadData】');
			this.init();
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 1000);
		},
		// 分享功能
		onShareAppMessage: function(options) {
			console.log('【index】【onShareAppMessage】分享配置(options)：', options);
		
			let shareList = this.shareList;
			// 设置菜单中的转发按钮触发转发事件时的转发内容
			let shareObj = {
				// 首页分享
				title: shareList.remark, // 默认是小程序的名称(可以写slogan等)
				path: shareList.ad_link + '?scene=' + this.userInfo.id, // 默认是当前页面，必须是以‘/’开头的完整路径
				imageUrl: shareList.ad_code, //自定义图片路径，可以是本地文件路径、代码包文件路径或者网络图片路径，支持PNG及JPG，不传入 imageUrl 则使用默认截图。显示图片长宽比是 5:4
				success: function(res) {
					console.log(res);
					// 转发成功之后的回调
					if (res.errMsg == 'shareAppMessage:ok') {
						console.log('【index】【onShareAppMessage】分享成功！');
					}
				},
				fail: function() {
					// 转发失败之后的回调
					if (res.errMsg == 'shareAppMessage:fail cancel') {
						// 用户取消转发
						console.log('【index】【onShareAppMessage】用户取消转发');
					} else if (res.errMsg == 'shareAppMessage:fail') {
						// 转发失败，其中 detail message 为详细失败信息
						console.log('【index】【onShareAppMessage】转发失败', res.detail, res.message);
					}
				}
			};
			// 来自页面内的按钮的转发
			if (options.from == 'button') {
				console.log('【index】【onShareAppMessage】推荐人(sponsor)：', this.userInfo.id);
				// 此处可以修改 shareObj 中的内容
				if (this.userInfo.id) {
					shareObj.path = shareList.ad_link + '?scene=' + this.userInfo.id;
				} else {
					this.$api.msg('请登录后尝试！');
					shareObj.path = '/pages/index/index';
				}
			}
			// 返回shareObj
			return shareObj;
		},
		methods: {

			//页面初始化
			init() {
				this.getSwiperList(); // 轮播图
				this.getNoticeBarList(); // 滚动通知
				this.getNewsListByTop(); // 新闻
			},

			// 加载首页数据
			getSwiperList() {
				let that = this;
				getSwiperList().then(({
					data: {
						code,
						data,
						msg
					}
				}) => {
					if (code === 1) {
						// console.log(data);
						that.swiperList = data.map(item => {
							item.image = item.cMenuImg
							return item;
						})
					} else if (msg) {
						that.$refs.uToast.show({
							title: msg,
							position: 'top',
							type: 'error'
						})
					}
					uni.hideNavigationBarLoading()
					uni.stopPullDownRefresh()
				})
			},

			// 轮播图点击事件
			swiperClick(index) {
				if (this.swiperList[index].cUrl) {
					this.navTo(this.swiperList[index].cUrl)
				}
			},

			// 
			getNoticeBarList() {
				let that = this;
				getNoticeBarList().then(({
					data: {
						code,
						data,
						msg
					}
				}) => {
					if (code === 1) {
						// console.log(data);
						that.noticeBarUrlList = data;
						that.noticeBarList = data.map(item => {
							item = item.cNotice
							return item;
						})
					} else if (msg) {
						that.$refs.uToast.show({
							title: msg,
							position: 'top',
							type: 'error'
						})
					}
					uni.hideNavigationBarLoading()
					uni.stopPullDownRefresh()
				})
			},

			//
			getNewsListByTop() {
				let that = this;
				getNewsListByTop().then(({
					data: {
						code,
						data,
						msg
					}
				}) => {
					if (code === 1) {
						// console.log(data);
						that.newList = data;
						// that.noticeBarList = data.map(item => {
						// 	item = item.cNotice
						// 	return item;
						// })
					} else if (msg) {
						that.$refs.uToast.show({
							title: msg,
							position: 'top',
							type: 'error'
						})
					}
					uni.hideNavigationBarLoading()
					uni.stopPullDownRefresh()
				})
			},

			/**
			 * 跳转
			 */
			navTo(url, data, type) {
				console.log('【index】【navTo】Url：' + url);
				this.route.navTo(url, data, type);
				// if (url) {
				// 	if (data) {
				// 		uni.navigateTo({
				// 			url: url + `?data=${JSON.stringify(data)}`
				// 		})
				// 	} else {
				// 		if (type == 'tab') {
				// 			uni.switchTab({
				// 				url
				// 			})
				// 		} else {
				// 			// 保留当前页面，跳转到应用内的某个页面。但是不能跳到 tabbar 页面
				// 			uni.navigateTo({
				// 				url
				// 			})
				// 		}
				// 	}
				// } else {
				// 	this.$refs.uToast.show({
				// 		title: '暂无内容',
				// 		type: 'warning'
				// 	})
				// }
			}
		}
	}
</script>

<style lang='scss'>
</style>
