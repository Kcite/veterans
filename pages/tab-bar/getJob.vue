<!-- 企业招聘	-->
<template>
	<view class="container">
		<view v-if="swiperList.length">
			<u-swiper height="320" :list="swiperList" autoplay></u-swiper>
		</view>
		<u-sticky>
			<view class="li-screen">
				<u-dropdown>
					<u-dropdown-item v-model="value1" title="全部" :options="options1"></u-dropdown-item>
					<u-dropdown-item v-model="value2" title="地点" :options="options2"></u-dropdown-item>
					<u-dropdown-item title="筛选">
						<view class="slot-content">
							<view class="li-tags">
								<text class="fs28">学历要求</text>
								<view class="li-tag-item">
									<view class="li-tag-cell" v-for="(item, index) in options3[0].qualifcations"
										:key="index">
										<u-tag :type="item.value == value3.qualifcations ? 'primary' : 'info'"
											:text="item.label" :index="item.value" mode="plain"
											@click="tagValue1(item.value)" />
									</view>
								</view>
								<text class="fs28">工作经验</text>
								<view class="li-tag-item">
									<view class="li-tag-cell" v-for="(item, index) in options3[1].workingYears"
										:key="index">
										<u-tag :type="item.value == value3.workingYears ? 'primary' : 'info'"
											:text="item.label" :index="item.value" mode="plain"
											@click="tagValue2(item.value)" />
									</view>
								</view>
								<text class="fs28">公司性质</text>
								<view class="li-tag-item">
									<view class="li-tag-cell" v-for="(item, index) in options3[2].wayOfWorking"
										:key="index">
										<u-tag :type="item.value == value3.wayOfWorking ? 'primary' : 'info'"
											:text="item.label" :index="item.value" mode="plain"
											@click="tagValue3(item.value)" />
									</view>
								</view>
							</view>
						</view>
					</u-dropdown-item>
				</u-dropdown>
			</view>
		</u-sticky>

		<view class="li-list pb30">
			<view v-for="(item, index) in recruitInfoList" @click="navTo('/pages/getJob/index',item.AutoID)" :key="index"
				class="li-list-item">
				<view class="head">
					<view class="info">
						<u-image width="75rpx" height="75rpx" :src="item.cUrl">
							<view slot="error" style="font-size: 24rpx;">logo</view>
						</u-image>
						<text class="fs30 ml20">{{item.cCompanyName}}</text>
					</view>
				</view>
				<view class="flex column pt20">
					<view class="flex jusb li2">
						<text class="fs32 fw700">{{item.cpost}}</text>
						<text class="fs28 red">{{item.price || '4-5K'}}</text>
					</view>
					<view class="flex fs28">
						<view class="">
							<u-icon color="#959BA7" name="map"></u-icon>
							<text class="pl15">{{item.cJobAddress}}</text>
						</view>
						<view v-if="false" class="pl20">
							<u-icon color="#959BA7" name="order"></u-icon>
							<text class="pl15">{{item.require.workingYears}} · {{item.require.qualifcations}} ·
								{{item.require.workingYears}}</text>
						</view>
					</view>
					<view class="flex pt30">
						<text v-for="(litem, index) in item.label" :key="index" class="" style="background-color: #eee;
						padding: 10upx 30upx;
						margin-right: 20upx;">{{litem.labelName}}</text>
					</view>
				</view>
			</view>
			<u-loadmore :status="status" />
			<u-empty v-if="listData.length === 0" text="暂无信息" mode="list"></u-empty>
		</view>
		<u-toast ref="uToast"></u-toast>
	</view>
</template>

<script>
	import {
		getRecruitInfoList
	} from '@/plugin/api'
	export default {
		data() {
			return {
				// 轮播图
				swiperList: [{
					image: 'http://xixiaruan.com/veterans/images/bg3.jpg'
				}],
				status: 'nomore',
				value1: 1,
				value2: 2,
				value3: {
					qualifcations: 0,
					workingYears: 0,
					wayOfWorking: 0
				},
				options1: [{
						label: '全部',
						value: 1,
					},
					{
						label: '兼职',
						value: 2,
					},
					{
						label: '劳务派遣',
						value: 3,
					}
				],
				options2: [{
						label: '太原',
						value: 1,
					},
					{
						label: '晋中',
						value: 2,
					},
				],
				options3: [{
					// 学历要求
					qualifcations: [{
						label: '不限',
						value: 0,
					}, {
						label: '初中',
						value: 1
					}, {
						label: '高中',
						value: 2
					}, {
						label: '大学',
						value: 3
					}]
				}, {
					// 工作年限
					workingYears: [{
						label: '全部',
						value: 0,
						type: 'dark'
					}, {
						label: '无经验',
						value: 1
					}, {
						label: '1年以下',
						value: 2
					}, {
						label: '1-3年',
						value: 3
					}]
				}, {
					// 公司性质
					wayOfWorking: [{
						label: '全部',
						value: 0,
					}, {
						label: '国企',
						value: 1
					}, {
						label: '民营',
						value: 2
					}],
				}],
				
				recruitInfoList: [],

				listData: [{
					logoUrl: '/static/index-selected.png', // logourl
					companyName: '中保（北京）保安服务有限公司太原分公司', // 公司名称
					releaseData: '2021-03-03', // 发布日期
					jobName: '秩序维护员', // 岗位名称
					addr: '太原市 万柏林区',
					workAddr: '太原市万柏林区晋祠路中国铁建花语堂售楼部', // 工作地址
					price: '4-5K',
					require: {
						workingYears: '不限',
						qualifcations: '不限',
						wayOfWorking: '全职'
					}, // 需要
					label: [{
						labelName: '男性'
					}, {
						labelName: '175cm以上'
					}, {
						labelName: '20-35周岁'
					}]
				}, {
					logoUrl: '/static/index-selected.png', // logourl
					companyName: '山西唐元纳智', // 公司名称
					releaseData: '2021-03-03', // 发布日期
					jobName: '实施人员', // 岗位名称
					workAddr: '晋中市桥东街', // 工作地址
					require: {
						workingYears: '不限',
						qualifcations: '大专',
						wayOfWorking: '全职'
					}, // 需要
					label: [{
						labelName: '会开车'
					}, {
						labelName: '会喝酒'
					}]
				}]
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
				this.getRecruitInfoList();
			},

			// 加载课程
			getRecruitInfoList() {
				let that = this;
				getRecruitInfoList({}).then(({
					data: {
						code,
						data,
						msg
					}
				}) => {
					if (code === 1) {
						console.log(data);
						that.recruitInfoList = data;
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

			tagValue1(index) {
				let that = this;
				that.value3.qualifcations = index;
			},
			tagValue2(index) {
				let that = this;
				that.value3.workingYears = index;
			},
			tagValue3(index) {
				let that = this;
				that.value3.wayOfWorking = index;
			},

			/**
			 * 统一跳转接口,拦截未登录路由
			 * navigator标签现在默认没有转场动画，所以用view
			 */
			navTo(url, data, type) {
				console.log('【getJob】【navTo】Url：' + url);

				let that = this;
				let token = uni.getStorageSync('token')
				let userInfo = uni.getStorageSync('userInfo')
				if (!token) {
					that.content = '请先登录';
					that.loginShow = true;
					return;
				}
				console.log(!userInfo.bCertification || userInfo.bCertification === "False");
				if (!userInfo.bCertification || userInfo.bCertification === "False") {
					that.content = '请先完善个人信息';
					that.show = true;
					return;
				}

				this.route.navTo(url, data, type);
			}
		}
	}
</script>

<style lang='scss'>
	.container {
		min-height: 100vh;
		background: #f5f5f5;
	}


	.li-screen {
		height: 80upx;
		background-color: #fff;


		.slot-content {
			display: flex;
			flex-direction: column;
		}

		.li-tags {
			display: flex;
			flex-direction: column;
			background-color: #fff;
			padding: 30upx;

			.fs28 {
				color: rgb(96, 98, 102);
				line-height: 2;
			}

			.li-tag-item {
				display: flex;
				flex-wrap: wrap;
				padding: 20upx 0;

				.li-tag-cell {
					padding: 0upx 15upx;
				}
			}
		}
	}


	.li-list {

		display: flex;
		flex-direction: column;

		.li-list-item {
			display: flex;
			flex-direction: column;
			padding: 30upx;
			margin-bottom: 20upx;
			background-color: #fff;

			.head {
				display: flex;
				align-items: center;
				justify-content: space-between;


				.info {
					display: flex;
					align-items: center;
					height: 72upx;

					.logo {
						height: 60upx;
						width: 60upx;
					}

					.name {
						font-size: 28upx;
						padding-left: 20upx;
						color: #333;
					}
				}

				.time {
					color: #999;
				}
			}
		}
	}
</style>
