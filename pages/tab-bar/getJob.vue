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
									<view class="li-tag-cell" v-for="(item, index) in options3[0].qualifcations" :key="index">
										<u-tag :type="item.value == value3.qualifcations ? 'primary' : 'info'" :text="item.label" :index="item.value"
										 mode="plain" @click="tagValue1(item.value)" />
									</view>
								</view>
								<text class="fs28">工作经验</text>
								<view class="li-tag-item">
									<view class="li-tag-cell" v-for="(item, index) in options3[1].workingYears" :key="index">
										<u-tag :type="item.value == value3.workingYears ? 'primary' : 'info'" :text="item.label" :index="item.value"
										 mode="plain" @click="tagValue2(item.value)" />
									</view>
								</view>
								<text class="fs28">公司性质</text>
								<view class="li-tag-item">
									<view class="li-tag-cell" v-for="(item, index) in options3[2].wayOfWorking" :key="index">
										<u-tag :type="item.value == value3.wayOfWorking ? 'primary' : 'info'" :text="item.label" :index="item.value"
										 mode="plain" @click="tagValue3(item.value)" />
									</view>
								</view>
							</view>
						</view>
					</u-dropdown-item>
				</u-dropdown>
			</view>
		</u-sticky>

		<view class="li-list pb30">
			<view v-for="(item, index) in listData" @click="navTo('/pages/getJob/index',item)" :key="index" class="li-list-item">
				<view class="head">
					<view class="info">
						<image class="logo" :src="item.logoUrl" mode=""></image>
						<text class="name">{{item.companyName}}</text>
					</view>
					<view class="time">
						发布日期：{{item.releaseData}}
					</view>
				</view>
				<view class="body">
					<text class="name">{{item.jobName}}</text>
					<view class="info">
						<view class="info-item">
							<u-icon color="#959BA7" name="map"></u-icon>
							<text class="text">{{item.workAddr}}</text>
						</view>
						<view class="info-item">
							<u-icon color="#959BA7" name="order"></u-icon>
							<text class="text">{{item.require.workingYears}} · {{item.require.qualifcations}} · {{item.require.workingYears}}</text>
						</view>
					</view>
					<view class="label">
						<text v-for="(litem, index) in item.label" :key="index" class="label-item">{{litem.labelName}}</text>
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

				listData: [{
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
		onLoad() {

		},
		onShow() {

		},
		methods: {

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

			.body {
				display: flex;
				flex-direction: column;
				padding-top: 30upx;

				line-height: 1.75;

				.name {
					font-size: 30upx;
					font-weight: 700;
				}

				.info {
					display: flex;
					font-size: 28upx;

					.info-item {
						padding-right: 20upx;

						.text {
							padding-left: 10upx;
						}
					}
				}

				.label {
					display: flex;
					padding-top: 30upx;

					.label-item {
						background-color: #eee;
						padding: 10upx 30upx;
						margin-right: 20upx;
					}
				}
			}
		}
	}
</style>
