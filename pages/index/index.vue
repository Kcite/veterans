<template>
	<view class="container">
		<button class="li-btn" :class="{ 't180' : result }" type="default"
			@click="navTo('/pages/tab-bar/index')">跳过</button>
		<image class="interlude" src="http://xixiaruan.com/veterans/images/index331.jpg"></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				result: false
			}
		},
		onLoad() {
			let that = this;
			const res = uni.getSystemInfoSync();
			const rate = res.windowHeight / res.windowWidth;
			let limit = res.windowHeight == res.screenHeight ? 1.8 : 1.65; // 临界判断值
			if (rate > limit) {
				that.result = true;
			}
			setTimeout(function() {
				that.navTo('/pages/tab-bar/index')
			}, 3000)
		},
		methods: {

			navTo(url, data) {
				console.log('【index】【navTo】Url：' + url);
				if (url) {
					uni.switchTab({
						url: url
					})
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

<style lang="scss" scoped>
	.container {
		display: flex;
		align-items: flex-end;
		background-color: #6698CD;
	}

	.li-btn {
		position: absolute;
		top: 135upx;
		right: 30upx;
		line-height: 1.5;
		background-color: #fff;
		color: #333;
		border: 2upx solid #999;
		border-radius: 40upx;
		padding: 5upx 30upx;
	}

	.t180 {
		top: 180upx;
	}

	.interlude {
		width: 100%;
		height: 1480upx;
	}
</style>
