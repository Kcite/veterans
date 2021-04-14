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
						:key="item.AutoID" @click="navTo('/pages/new/detail',item.AutoID)">
						<image class="li-card-img" :src="item.cImgUrl" mode="aspectFill"></image>
						<view class="u-body-item-title u-line-2">
							<text class="title">{{item.cTitle}}</text>
							<text class="time">{{item.dLastDate}} {{item.cFrom}}</text>
						</view>
					</view>
				</view>
			</u-card>
		</view>
	</view>
</template>

<script>
	import {
		getNewsList
	} from '@/plugin/api'
	
	export default {
		data() {
			return {
				list: [{
						url: '/pages/new/detail',
						image: 'http://www.mva.gov.cn/sy/tpxw/202103/W020210303422145462444.jpg',
						title: '“时代楷模”拉齐尼·巴依卡'
					},
					{
						url: '/pages/new/detail',
						image: 'http://www.mva.gov.cn/sy/tpxw/202103/W020210303413226370584.jpg',
						title: '[正午国防军事]退役军人事务部组织开展“老兵永远跟党走”中国共产党成立100周年系列庆祝活动'
					},
					{
						url: '/pages/new/detail',
						image: 'http://www.mva.gov.cn/sy/tpxw/202102/W020210227715769282350.jpg',
						title: '退役军人事务部部署2021年清明烈士祭扫工作'
					}
				],
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
				this.getNewsList();
			},

			//
			getNewsList() {
				let that = this;
				getNewsList().then(({
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
							item.image = item.cImgUrl;
							item.title = item.cTitle;
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
				this.navTo('/pages/new/detail', this.list[index].AutoID)
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
