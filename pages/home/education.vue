<!-- 学历提升 -->
<template>
	<view class="container">
		<view class="head">

		</view>
		<view class="body">
			<view class="li-list">
				<view class="li-list-item">
					<image class="li-list-img" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F16%2F09%2F02%2F2157c97cecb7734.jpg&refer=http%3A%2F%2Fbpic.588ku.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1617595337&t=5bc14f6a8023e38196e2394105aa1901" mode=""></image>
					<text class="li-list-name">山西财贸职业技术学院</text>
				</view>
				<view class="li-list-item">
					<u-image class="li-list-img" width="100%" height="160rpx" mode="aspectFill" src="https://img.sj33.cn/uploads/allimg/201402/7-14020G11925242.png"></u-image>
					<text class="li-list-name">太原科技大学</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		onLoad() {

		},
		onShow() {

		},
		methods: {

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
		.li-list-item {
			display: flex;
			flex-direction: column;
			width: 330upx;
			margin-bottom: 30upx;
			border-radius: 10upx;
			
			.li-list-img {
				width: 100%;
				height: 160upx;
			}
			
			.li-list-name {
				height: 70upx;
				line-height: 70upx;
				text-align: center;
				width: 100%;
				background-color: #eee;
			}
		}
	}
</style>
