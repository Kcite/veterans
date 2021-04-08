<!-- 求职信息 -->
<template>
	<view class="container">
		<u-sticky>
			<view class="head flex jusb">
				<view class="left">
					<u-button shape="circle" size="mini" :ripple="true" plain :type="scope == 1 ? 'primary' : ''"
						@click="queryList(1)">全部</u-button>
					<u-button class="ml20" shape="circle" size="mini" :ripple="true" plain
						:type="scope == 2 ? 'primary' : ''" @click="queryList(2)">最新
					</u-button>
				</view>
				<view class="right">
					<u-button shape="square" size="mini" :ripple="true" @click="show = true">地点</u-button>
					<u-picker mode="region" v-model="show" :area-code='["14", "1407", "140702"]'
						:safe-area-inset-bottom="true" @confirm="confirm"></u-picker>
					<u-button class="ml20" shape="square" size="mini" :ripple="true" @click="navTo('./screen')">筛选
					</u-button>
				</view>
			</view>
		</u-sticky>
		<view class="body">
			<view class="li-list pb30">
				<view v-for="(item, index) in listData" @click="navTo('./detail',item)" :key="index"
					class="li-list-item">
					<view class="li-list-head">
						<view class="info">
							<image class="logo" :src="item.imgUrl" mode=""></image>
							<text class="name">{{item.userName}}</text>
						</view>
						<view class="time">
							发布日期：{{item.releaseData}}
						</view>
					</view>
					<view class="li-list-body">
						<view class="flex jusb">
							<text class="name">期望职务：{{item.jobName}}</text>
							<text class="red fw700">{{item.price}}</text>
						</view>
						<view class="remarks fs26 c9">
							<text>{{item.remarks}}</text>
						</view>
					</view>
				</view>
				<u-loadmore :status="status" />
				<u-empty v-if="listData.length === 0" text="暂无信息" mode="list"></u-empty>
			</view>
			<u-toast ref="uToast"></u-toast>
		</view>

		<view class="float" @click="navTo('./form')">
			<view class="">
				求职
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scope: 1,
				show: false,
				address: '',
				screen: [0, 0, 0, 0],
				listData: [{
					imgUrl: '/static/missing-face.png', // imgUrl
					userName: '李先生', // 用户名
					releaseData: '2021-03-03', // 发布日期
					jobName: '实施人员', // 岗位名称
					price: '3.5K~4.5K/月',
					workAddr: '晋中市桥东街', // 工作地址
					require: {
						workingYears: '不限',
						qualifcations: '大专',
						wayOfWorking: '全职'
					}, // 需要
					remarks: '退役军人，丰富的运营经验，活动推广，文案撰写还可以，具有一定的执行力，审美能力'
				}, {
					imgUrl: '/static/missing-face.png', // imgUrl
					userName: '李先生', // 用户名
					releaseData: '2021-03-03', // 发布日期
					jobName: '实施人员', // 岗位名称
					price: '3.5K~4.5K/月',
					workAddr: '晋中市桥东街', // 工作地址
					require: {
						workingYears: '不限',
						qualifcations: '大专',
						wayOfWorking: '全职'
					}, // 需要
					remarks: '退役军人，丰富的运营经验，活动推广，文案撰写还可以，具有一定的执行力，审美能力',
				}, {
					imgUrl: '/static/missing-face.png', // imgUrl
					userName: '李先生', // 用户名
					releaseData: '2021-03-03', // 发布日期
					jobName: '实施人员', // 岗位名称
					price: '3.5K~4.5K/月',
					workAddr: '晋中市桥东街', // 工作地址
					require: {
						workingYears: '不限',
						qualifcations: '大专',
						wayOfWorking: '全职'
					}, // 需要
					remarks: '退役军人，丰富的运营经验，活动推广，文案撰写还可以，具有一定的执行力，审美能力',
				}, {
					imgUrl: '/static/missing-face.png', // imgUrl
					userName: '李先生', // 用户名
					historyPost: '山西云洗电子有限公司·技术',
					releaseData: '2021-03-03', // 发布日期
					jobName: '实施人员', // 岗位名称
					price: '3.5K~4.5K/月',
					workAddr: '晋中市桥东街', // 工作地址
					require: {
						workingYears: '5年以上',
						qualifcations: '大专',
						age: '28岁'
					}, // 需要
					remarks: '退役军人，丰富的运营经验，活动推广，文案撰写还可以，具有一定的执行力，审美能力',
				}, {
					imgUrl: '/static/missing-face.png', // imgUrl
					userName: '李先生', // 用户名
					releaseData: '2021-03-03', // 发布日期
					jobName: '实施人员', // 岗位名称
					price: '3.5K~4.5K/月',
					workAddr: '晋中市桥东街', // 工作地址
					require: {
						workingYears: '不限',
						qualifcations: '大专',
						wayOfWorking: '全职'
					}, // 需要
					remarks: '退役军人，丰富的运营经验，活动推广，文案撰写还可以，具有一定的执行力，审美能力',
				}]
			}
		},
		onLoad() {

		},
		onShow() {

		},
		methods: {

			queryList(type) {
				let that = this;
				if (type == 1 || type == 2) {
					that.scope = type;

				} else {

				}
			},

			// 工作城市
			confirm(e) {
				let that = this;
				that.address = '';
				console.log(e.province.label + '-' + e.city.label + '-' + e.area.label);
				that.address = e.province.label + '-' + e.city.label + '-' + e.area.label;
			},

			/**
			 * 统一跳转接口,拦截未登录路由
			 * navigator标签现在默认没有转场动画，所以用view
			 */
			navTo(url, data, type) {
				console.log('【index】【navTo】Url：' + url);
				if (url) {
					if (data) {
						uni.navigateTo({
							url: url + `?data=${JSON.stringify(data)}`
						})
					} else {
						if (type == 'tab') {
							uni.switchTab({
								url
							})
						} else {
							// 保留当前页面，跳转到应用内的某个页面。但是不能跳到 tabbar 页面
							uni.navigateTo({
								url
							})
						}
					}
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

	.head {
		padding: 20upx 30upx;
		background-color: #fff;
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

			.li-list-head {
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

			.li-list-body {
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
			}
		}
	}

	.float {
		position: fixed;
		right: 30rpx;
		background: red;
		bottom: 150rpx;
		border-radius: 50rpx;
		height: 100rpx;
		width: 100rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #fff;
		font-size: 32rpx;
	}
</style>
