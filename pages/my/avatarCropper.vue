<!-- xxx -->
<template>
	<view class="container">
		
		<view class="u-avatar-wrap">
			<image class="u-avatar-demo" :src="avatar" mode="aspectFill"></image>
		</view>
		<u-button @click="chooseAvatar()">进入裁剪页</u-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				avatar: 'https://cdn.uviewui.com/uview/common/logo.png',
			}
		},

		created() {
			// 监听从裁剪页发布的事件，获得裁剪结果
			uni.$on('uAvatarCropper', path => {
				this.avatar = path;
				// 可以在此上传到服务端
				uni.uploadFile({
					url: 'http://www.example.com/upload',
					filePath: path,
					name: 'file',
					complete: (res) => {
						console.log(res);
					}
				});
			})
		},
		methods: {
			chooseAvatar() {
				console.log(22);
				let that = this;
				uni.navigateTo({
					url: '/uview-ui/components/u-avatar-cropper/u-avatar-cropper'
				})
				// 此为uView的跳转方法，详见"文档-JS"部分，也可以用uni的uni.navigateTo
				// that.$u.route({
				// 	// 关于此路径，请见下方"注意事项"
				// 	url: 'uview-ui/components/u-avatar-cropper/u-avatar-cropper',
				// 	// 内部已设置以下默认参数值，可不传这些参数
				// 	params: {
				// 		// 输出图片宽度，高等于宽，单位px
				// 		destWidth: 300,
				// 		// 裁剪框宽度，高等于宽，单位px
				// 		rectWidth: 200,
				// 		// 输出的图片类型，如果'png'类型发现裁剪的图片太大，改成"jpg"即可
				// 		fileType: 'jpg',
				// 	}
				// })
			}
		}
	}
</script>

<style lang='scss'>
	.container {
		min-height: 100vh;
		background: #f5f5f5;
	}

	.wrap {
		padding: 40rpx;
	}

	.u-avatar-wrap {
		margin-top: 80rpx;
		overflow: hidden;
		margin-bottom: 80rpx;
		text-align: center;
	}

	.u-avatar-demo {
		width: 150rpx;
		height: 150rpx;
		border-radius: 100rpx;
	}
</style>
