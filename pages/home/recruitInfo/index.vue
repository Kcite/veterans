<!-- xxx -->
<template>
	<view class="container">
		<view class="">
			<u-toast ref="uToast"></u-toast>
			<u-swiper height="420" :list="list" :title="title" :effect3d="effect3d" :indicator-pos="indicatorPos"
				:mode="mode" :interval="3000" @click="click"></u-swiper>
		</view>
		<view class="li-card">
			<u-card :full="true">
				<view class="" slot="body">
					<view class="u-body-item u-flex u-border-bottom u-col-between u-p-t-0" v-for="item in dataList"
						:key="item.AutoID" @click="navTo('/pages/home/recruitInfo/detail',item.AutoID)">
						<image class="li-card-img" :src="item.cImgUrl" mode="aspectFill"></image>
						<view class="u-body-item-title u-line-2">
							<text class="title">{{item.cRecruitTitle}}</text>
							<text class="fs26">岗位：{{item.cpost}}/{{item.iNumber}}名</text>
							<text class="fs24 c9">{{item.dInDate}} {{item.cCompanyName}}</text>
						</view>
					</view>
				</view>
			</u-card>
		</view>
	</view>
</template>

<script>
	import {
		getRecruitInfoList
	} from '@/plugin/api'

	export default {
		data() {
			return {
				list: [],
				title: true,
				mode: 'number',
				indicatorPos: 'bottomCenter',
				dataList: []
			}
		},
		onLoad() {

		},
		onShow() {
			let that = this;
			that.init();
		},
		methods: {
			//页面初始化
			init() {
				this.getRecruitInfoList();
			},

			//
			getRecruitInfoList() {
				let that = this;
				getRecruitInfoList().then(({
					data: {
						code,
						data,
						msg
					}
				}) => {
					if (code === 1) {
						// console.log(data);

						that.list = data.filter((item, index) => {
							item.url = '';
							item.image = item.cUrl;
							item.title = item.cRecruitTitle;
							return index < 3;
						})

						that.dataList = data.filter((item, index) => {
							return index > 2;
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

			change(index) {
				// console.log(index);
			},
			click(index) {
				// console.log(index);
				this.navTo('/pages/home/recruitInfo/detail', this.list[index].AutoID)
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
	.container {
		min-height: 100vh;
		background: #f5f5f5;
	}

	.u-body-item {
		font-size: 32rpx;
		color: #333;
		padding: 20rpx 0rpx;
	}

	.u-body-item image {
		width: 240rpx;
		flex: 0 0 240rpx;
		height: 150rpx;
		border-radius: 8rpx;
		margin-right: 20rpx;
	}

	.u-body-item .u-body-item-title {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 150upx;
		padding: 10upx 0upx;

		.title {
			font-size: 28upx;
			color: #333;
		}

		.time {
			font-size: 24upx;
			color: #999;
		}
	}
</style>
