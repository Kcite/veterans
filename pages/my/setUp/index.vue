<!-- xxx -->
<template>
	<view class="container">
		<view class="u-m-t-20">
			<u-cell-group>
				<u-cell-item title="关于我们"></u-cell-item>
				<u-cell-item title="修改密码"></u-cell-item>
			</u-cell-group>
		</view>
		<view class="u-m-t-20">
			<u-cell-group>
				<u-cell-item title="退出登录" @click="Logout()"></u-cell-item>
			</u-cell-group>
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
			// 推出登录
			Logout(){
				uni.removeStorage({
					key: 'token'
				});
				uni.navigateTo({
					url: '/pages/login/login'
				})
			},
			
			/**
			 * 统一跳转接口,拦截未登录路由
			 * navigator标签现在默认没有转场动画，所以用view
			 */
			navTo(url) {
				console.log('【index】【navTo】Url：' + url);
				if (url) {
					// 保留当前页面，跳转到应用内的某个页面。但是不能跳到 tabbar 页面
					uni.navigateTo({
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

<style lang='scss'>
	.container {
		min-height: 100vh;
		background: #f5f5f5;
	}
</style>
