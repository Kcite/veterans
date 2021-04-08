<!-- 政策法规 -->
<template>
	<view class="container flex column p30 li15">
		<text class="fs30 fw700 mb20">{{data.name}}</text>
		<text class="fs26 c9 mb20">时间：{{data.time}} 来源：政策法规司</text>
		<view class="li-video">
			<video style="width: 100%; height: 388rpx;" :src="data.myVideo" @error="videoErrorCallback" controls></video>
		</view>

		<view class="foot pt30 c9">
			<u-icon class="mr20" name="eye" color="#999" size="36"></u-icon>
			<text class="mr20">阅读 {{data.reading}} </text>
			<view class="flex flexalcen" @click="reviseLikes">
				<u-icon v-if="data.likesType" class="mr20" name="thumb-up-fill" color="#999" size="36"></u-icon>
				<u-icon v-else class="mr20" name="thumb-up" color="#999" size="36"></u-icon>
				<text>赞 {{data.likes}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				data: {},
			}
		},
		onLoad(options) {
			console.log(options);
			this.data = JSON.parse(options.data);
			console.log(this.data);
		},
		onShow() {

		},
		methods: {

			videoErrorCallback(e) {
				uni.showModal({
					content: e.target.errMsg,
					showCancel: false
				})
			},

			// 点赞事件
			reviseLikes() {
				if (this.data.likesType) {
					this.data.likesType = !this.data.likesType;
					this.data.likes--;
				} else {
					this.data.likesType = !this.data.likesType;
					this.data.likes++;
				}
			}
		}
	}
</script>

<style lang='scss'>
	.container {
		background-color: #fff;
	}

	.li-video {
		width: 100%;
		height: 388upx;
	}

	.foot {
		display: flex;
		justify-content: flex-end;
	}
</style>
