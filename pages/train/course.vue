<!-- xxx -->
<template>
	<view class="container">
		<image class="header"
			src="http://www.sxcmvc.com/ww_templete/ww_634783759337998046/images/DSC_7906_%E5%89%AF%E6%9C%AC.jpg"
			mode=""></image>
		<view class="head">
			<text class="label">{{newData.cCourseName}}</text>
			<text class="">{{newData.cSchoolName}}</text>
		</view>
		<u-gap height="20" bg-color="#f5f5f5"></u-gap>
		<view class="body">
			<view class="li-list-item">
				<text class="title">班级名称：</text>
				<text class="value">{{newData.cClassName}}</text>
			</view>
			<view class="li-list-item">
				<text class="title">课程简介：</text>
				<text class="value">{{newData.cDescribe}}</text>
			</view>
			<view class="li-list-item">
				<text class="title">截止报名时间：</text>
				<text class="value">{{newData.dSignup_Start}} - {{newData.dSignUp_End}}</text>
			</view>
			<button class="li-btn" type="default" @click="goFrom()">我要报名</button>
		</view>
		<u-toast ref="uToast" />
		<u-modal v-model="show" :content="content" @confirm="navTo('/pages/tab-bar/my')"></u-modal>
	</view>
</template>

<script>
	import {
		getCourseInfo,
		getCourseTypeInfo,
		createEnrollData
	} from '@/plugin/api'
	export default {
		data() {
			return {
				newData: {},
				Course: {},
				show: false,
				content: '请先完善个人信息'
			}
		},
		onLoad(options) {
			//	商品数据
			console.log(JSON.parse(options.data));
			let that = this;
			that.init(JSON.parse(options.data));
		},
		onShow() {

		},
		methods: {
			//页面初始化
			init(autoid) {
				this.getCourseInfo(autoid);
			},

			getCourseInfo(autoid) {
				let that = this;
				getCourseInfo({
					autoid: autoid
				}).then(({
					data: {
						code,
						data,
						msg
					}
				}) => {
					if (code === 1) {
						console.log(data);
						that.newData = data[0];

						// that.getCourseTypeInfo(data[0].cCourseID);
					} else if (msg) {
						that.$refs.uToast.show({
							title: msg,
							position: 'top',
							type: 'error'
						})
					}
				})
			},

			getCourseTypeInfo(CourseID) {
				let that = this;
				getCourseTypeInfo({
					strID: CourseID
				}).then(({
					data: {
						code,
						data,
						msg
					}
				}) => {
					if (code === 1) {
						console.log(data);
						that.Course = data[0];
					} else if (msg) {
						that.$refs.uToast.show({
							title: msg,
							position: 'top',
							type: 'error'
						})
					}
				})
			},
			
			goFrom() {

				let that = this;
				let token = uni.getStorageSync('TOKEN')
				let userInfo = uni.getStorageSync('userInfo')
				if (userInfo.bCertification === "False") {
					that.show = true;
					return;
				}

				console.log();
				createEnrollData({
					token: token,
					cCourseBySchoolID: that.newData.AutoID,
					cCourseName: that.newData.cCourseName
				}).then(({
					data: {
						code,
						data,
						msg
					}
				}) => {
					if (code === 1) {
						console.log(data);
						that.$refs.uToast.show({
							title: msg,
							position: 'top',
							type: 'success'
						})
					} else if (msg) {
						that.$refs.uToast.show({
							title: msg,
							position: 'top',
							type: 'error'
						})
					}
				})

				// let url = '/pages/train/from'
				// uni.navigateTo({
				// 	url: url
				// })
			},
			/**
			 * 统一跳转接口,拦截未登录路由
			 * navigator标签现在默认没有转场动画，所以用view
			 */
			navTo(url) {
				console.log('【index】【navTo】Url：' + url);
				if (url) {
					// 保留当前页面，跳转到应用内的某个页面。但是不能跳到 tabbar 页面
					uni.switchTab({
						url: url
					})
				} else {
					this.$refs.uToast.show({
						title: '暂无内容',
						type: 'warning'
					})
				}
			}
		}
	}
</script>

<style lang='scss'>
	.container {
		min-height: 100vh;
		background: #f5f5f5;
	}

	.header {
		background-color: #ccc;
		width: 100vw;
		height: 400upx;
	}

	.head {
		display: flex;
		align-items: center;
		background-color: #fff;
		padding: 30upx;

		.label {
			background-color: #eee;
			color: #2979FF;
			padding: 10upx 30upx;
			margin-right: 30upx;
		}
	}

	.body {
		background-color: #fff;
		padding: 30upx;

		.li-list-item {
			display: flex;
			flex-direction: column;
			line-height: 1.75;
			margin-bottom: 20upx;

			.title {
				font-size: 30upx;
				color: #333;
				border-left: 10upx solid #FA3534;
				line-height: 1.5;
				margin: 5upx 0;
				padding-left: 20upx;
			}

			.value {
				font-size: 28upx;
				color: #999;
			}
		}

		.li-btn {
			background-color: #2979FF;
			color: #fff;
			border-radius: 50upx;
			margin-top: 50upx;
		}
	}
</style>
