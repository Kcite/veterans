<!-- xxx -->
<template>
	<view class="container">
		<u-card margin="20rpx 0rpx" :show-foot="false" :show-head="false">
			<view class="" slot="body">
				<view class="u-body-item u-flex u-border-bottom u-col-between u-p-t-0" v-for="item in dataList"
					:key="item.AutoID">
					<image class="li-card-img" :src="item.cImgUrl" mode="aspectFill"></image>
					<view class="u-body-item-title u-line-2 flex column">
						<text class="fs30 c3">{{item.cCourseName}}</text>
						<text class="fs24 c9">{{item.cSchoolName}} </text>
						<text class="fs24 c9">{{item.dSignupDate}} </text>
					</view>
				</view>
			</view>
		</u-card>
	</view>
</template>

<script>
	import {
		getEnrollListByPerson
	} from '@/plugin/api'
	export default {
		data() {
			return {
				dataList: []
			}
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
				let token = uni.getStorageSync('TOKEN')
				getEnrollListByPerson({token}).then(({
					data: {
						code,
						data,
						msg
					}
				}) => {
					if (code === 1) {
						console.log(data);
						that.dataList = data;

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
			}
		}
	}
</script>

<style lang='scss'>
	.container {
		min-height: 100vh;
		background: #f5f5f5;
		padding-top: 1upx;
	}

	.u-card-wrap {
		background-color: $u-bg-color;
		padding: 1px;
	}

	.u-body-item {
		font-size: 32rpx;
		color: #333;
		padding: 20rpx 10rpx;
	}

	.u-body-item image {
		width: 120rpx;
		flex: 0 0 120rpx;
		height: 120rpx;
		border-radius: 8rpx;
		margin-left: 12rpx;
	}
</style>
