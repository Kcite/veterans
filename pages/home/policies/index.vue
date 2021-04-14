<!-- 政策法规 -->
<template>
	<view class="container">
		<view class="li-list">
			<view v-for="(item, index) in list" @click="navTo('./detail',item)" :key="index" class="li-list-item">
				<u-image width="100%" height="160rpx" :src="item.imgUrl"></u-image>
				<text class="li-list-name">{{item.name}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		policiesList
	} from '@/common/data'
	import {
		fuelList
	} from '@/plugin/api'
	export default {
		data() {
			return {
				list: []
			}
		},
		onLoad() {
			let that = this;
			console.log('[home/policies/index][onLoad]');
			that.init();
		},
		onShow() {

		},
		methods: {
			//页面初始化
			init() {
				this.getPoliciesList();
			},

			getPoliciesList() {
				this.list = policiesList();
				
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
		justify-content: space-between;
		background-color: #fff;
		padding: 30upx;
		padding-bottom: 0;

		.li-list-item {
			display: flex;
			flex-direction: column;
			width: 330upx;
			margin-bottom: 30upx;
			border-radius: 10upx;

			.li-list-name {
				font-size: 26upx;
				line-height: 1.5;
				text-align: center;
				width: 100%;
				background-color: #eee;
			}
		}
	}
</style>
