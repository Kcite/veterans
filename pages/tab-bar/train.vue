<!-- 技能培训 -->
<template>
	<view class="container">
		<view v-if="swiperList.length">
			<u-swiper height="320" :list="swiperList" autoplay></u-swiper>
		</view>

		<u-sticky>
			<view class="">
				<u-tabs :list="list" :is-scroll="false" :current="current" @change="change"></u-tabs>
			</view>
		</u-sticky>

		<view v-if="current === 0" class="li-list">
			<view v-for="(item, index) in skillTrainingList" @click="navTo('/pages/train/course', item.AutoID)"
				:key="index" class="li-list-item">
				<image class="img" :src="item.cSchoolUrl" mode=""></image>
				<view class="info">
					<text class="fs30 fw700">{{item.cCourseName}}</text>
					<text class="fs26 c9">{{item.cClassName}}</text>
					<text class="fs26 c9">{{item.cSchoolName || '机构名称'}}</text>
				</view>
			</view>
		</view>

		<view v-if="current === 1" class="li-list">
			<view v-for="(item, index) in trainingAgencyList" @click="navTo('/pages/train/school', item.AutoID)"
				:key="index" class="li-list-item">
				<image class="img" :src="item.cSchoolUrl" mode=""></image>
				<view class="info">
					<text class="fs30 fw700">{{item.cSchoolName || '学校名称'}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		getCourseList,
		getSchoolList
	} from '@/plugin/api'
	export default {
		data() {
			return {
				// 轮播图
				swiperList: [{
					image: 'http://xixiaruan.com/veterans/images/bg2.jpg'
				}],

				list: [{
					name: '技能培训'
				}, {
					name: '培训机构'
				}],
				current: 0,

				skillTrainingList: [{
					imgUrl: '',
					name: '电工培训',
					category: '电工培训',
					agency: '山西同文职业技术学院'
				}, {
					imgUrl: '',
					name: '养老护理',
					category: '养老护理(初级)',
					agency: '山西同文职业技术学院'
				}, {
					imgUrl: '',
					name: '安保培训',
					category: '安保培训',
					agency: '山西同文职业技术学院'
				}, {
					imgUrl: '',
					name: '美容美发',
					category: '美容美发(初级)',
					agency: '山西同文职业技术学院'
				}, ],
				trainingAgencyList: []
			}
		},
		onLoad() {},
		onShow() {
			let that = this;
			that.init();
		},
		methods: {

			//页面初始化
			init() {
				let strXzqhDm = '14';
				this.getCourseList(strXzqhDm);
				this.getSchoolList(strXzqhDm);
			},

			// 加载课程
			getCourseList(strXzqhDm) {
				let that = this;
				getCourseList({
					strXzqhDm
				}).then(({
					data: {
						code,
						data,
						msg
					}
				}) => {
					if (code === 1) {
						console.log(data);
						that.skillTrainingList = data;
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

			// 加载学校
			getSchoolList(strXzqhDm) {
				let that = this;
				getSchoolList({
					strXzqhDm
				}).then(({
					data: {
						code,
						data,
						msg
					}
				}) => {
					if (code === 1) {
						console.log(data);
						that.trainingAgencyList = data;
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

			change(index) {
				this.current = index;
			},

			/**
			 * 统一跳转接口,拦截未登录路由
			 */
			navTo(url, data, type) {
				console.log('【train】【navTo】Url：' + url);
				this.route.navTo(url, data, type);
			}
		}
	}
</script>

<style lang='scss'>
	.li-list {
		display: flex;
		flex-wrap: wrap;
		padding: 30upx;
		background-color: #fff;

		.li-list-item {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			margin-bottom: 20upx;
			width: 345upx;

			.img {
				width: 320upx;
				height: 220upx;
				background-color: #eee;
			}

			.info {
				display: flex;
				flex-direction: column;
				width: 100%;
				padding: 0 20upx;
				margin-top: 10upx;
			}
		}
	}
</style>
