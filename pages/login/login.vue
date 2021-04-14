<template>
	<view class="login">
		<view class="login-main">
			<view class="login-logo">
				欢迎来到退伍军人服务平台
			</view>

			<view class="login-list flex border-all">
				<view class="iconfont icon-shoujihao flex"></view>
				<view class="login-input">
					<input type="number" maxlength="11" placeholder="请输入退伍证号/身份证号/手机号" class="is-input1 "
						v-model="mobilePhone" />
				</view>
			</view>
			<view class="login-list flex border-all">
				<view class="iconfont icon-yanzhengma flex"></view>
				<view class="login-input">
					<input type="number" maxlength="6" placeholder="请输入密码" class="is-input1 " v-model="userPwd" />
				</view>
			</view>
			<button class="cu-btn login-btn" @tap="doLogin">登 录</button>
			<button class="cu-btn register-btn" @tap="doTwo">注 册</button>
			<view class="login-tip">点击登录表示同意
				<navigator url="/pages/login/serve">软件许可及服务协议</navigator>
			</view>
		</view>
		<u-popup v-model="show" mode="bottom" :safe-area-inset-bottom='true' height='500rpx' border-radius="20">
			<view class='flex li-flex pt35'>
				<view class="fs18 lh1 color-shallow pt35">山西退役军人服务平台需要获取您的微信认证信息</view>
				<view class="fs14 lh1 color-shallow mt20 mb20 pb30">以便为您提供更好的服务</view>
				<view class='flex flex-center'>
					<u-button @click="show=false">取消</u-button>
					<u-button type="success" style='margin-left:100rpx' open-type="getUserInfo"
						@getuserinfo="getuserinfo">允许</u-button>
				</view>
			</view>
		</u-popup>
		<u-toast ref="uToast"></u-toast>
		<cu-toast ref="toast"></cu-toast>
	</view>
</template>


<script>
	import {
		getlogin
	} from '@/plugin/api'
	export default {
		data() {
			return {
				show: false,
				mobilePhone: "",
				userPwd: '',
				key: '',
				getCodeBtnColor: "#ffffff",
				getCodeisWaiting: false,
				sessionKey: ''
			}
		},
		onShow() {
			let that = this

			return;

			uni.login({
				provider: 'weixin',
				success: function(loginRes) {
					//获取key
					that.$u.api.userService
						.getWxcode({
							jsCode: loginRes.code
						}).then(res => {
							that.sessionKey = res.data
						})
				}
			})
		},
		onLoad() {
			console.log('onLoad');
			this.isLoading()
		},
		methods: {
			doTwo() {
				uni.navigateTo({
					url: '/pages/login/register'
				})
			},
			//判断是否授权
			isLoading() {
				let that = this
				uni.getSetting({
					success: setting => {
						if (!setting.authSetting['scope.userInfo']) {
							// that.show = true
						}
					},
					fail(res) {
						console.log(res);
					}
				})
			},

			//获取用户信息
			getuserinfo({
				detail
			}) {
				this.show = false
				if (detail.userInfo) {
					console.log(detail.userInfo)
					uni.setStorage({
						key: 'userInfo',
						data: detail.userInfo
					})
				} else {
					this.$refs.uToast.show({
						title: '授权失败，请重新授权！',
						position: 'top',
						type: 'error'
					})
				}
			},

			//普通登录
			doLogin() {
				let _this = this;
				uni.hideKeyboard()
				//模板示例部分验证规则
				// if (!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.mobilePhone))) {
				// 	uni.showToast({
				// 		title: '请填写正确手机号码',
				// 		icon: "none"
				// 	});
				// 	return false;
				// }
				if (!(/^\d{6}$/.test(this.userPwd))) {
					uni.showToast({
						title: '请填写正确密码',
						icon: "none"
					});
					return false;
				}
				uni.showLoading({
					title: '正在登录中...'
				})
				this.login(this.mobilePhone, '2', this.userPwd)
			},

			//微信登录
			login_weixin(encryptedData, iv) {
				let that = this;
				that.wxDecode(encryptedData, iv, that.sessionKey)
			},

			//加密信息解密
			wxDecode(encryptedData, iv, sessionKey) {
				let that = this
				uni.showLoading({
					title: '正在登录中...'
				})
				this.$u.api.userService
					.wxDecode({
						encryptedData: encryptedData,
						iv: iv,
						sessionKey: sessionKey
					}).then(res => {
						if (res.code) {
							this.$refs.uToast.show({
								title: '请您重新授权一键登录',
								position: 'top',
								type: 'error'
							})
							uni.hideLoading()
							return
						}
						that.login(res.data.phoneNumber, '1', '')
					})
			},

			//登录
			login(phone, type, userPwd) {
				let locaInfo = uni.getStorageSync('locaInfo');
				getlogin({
					UserName: phone,
					PassWord: userPwd,
					IP: locaInfo || ''
				}).then(({
					data: {
						code,
						data,
						msg
					}
				}) => {
					console.log(data);
					uni.hideLoading()
					if (code === 1) {
						uni.setStorage({
							key: 'token',
							data: data[0].token
						})

						uni.setStorageSync('token', data[0].token)
						let userInfo = data[0];
						userInfo.bSex = userInfo.bSex == 'False' ? '女' : '男';
						uni.setStorageSync('userInfo', userInfo)

						uni.switchTab({
							url: '/pages/tab-bar/index'
						})
						return;
						this.$vuex('token', data[0].token, true).then(() => {
							this.$vuex('USER', data[0])
							if (
								!this.vuex_returnUrl ||
								this.vuex_returnUrl.url === 'pages/login/index' ||
								this.vuex_returnUrl.url === 'pages/login/register'
							) {
								uni.switchTab({
									url: '/pages/tab-bar/my'
								})
							} else if (
								['pages/tab-bar/index', 'pages/tab-bar/list',
									'pages/tab-bar/news', 'pages/tab-bar/my'
								].indexOf(
									this.vuex_returnUrl.url
								) > -1
							) {
								uni.reLaunch({
									url: `/${this.vuex_returnUrl.urlWithArgs}`
								})
							} else {
								uni.redirectTo({
									url: `/${this.vuex_returnUrl.urlWithArgs}`
								})
							}
						})
					} else {
						// this.$refs.toast.clear()
						this.$refs.uToast.show({
							title: msg,
							position: 'top',
							type: 'error'
						})
					}
				}).catch(function(e) {
					console.log(e);
					uni.hideLoading()
				})
			}
		}
	}
</script>



<style lang="scss">
	page {
		background-color: #FFFFFF;

	}

	.border-all {
		position: relative;
	}

	.border-all:after {
		position: absolute;
		top: 0;
		left: 0;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		width: 200%;
		height: 200%;
		border: 1px solid #E5EAF0;
		border-radius: inherit;
		content: " ";
		-webkit-transform: scale(.5);
		-ms-transform: scale(.5);
		transform: scale(.5);
		-webkit-transform-origin: 0 0;
		-ms-transform-origin: 0 0;
		transform-origin: 0 0;
		pointer-events: none;
		border-radius: 50%;
	}

	.flex {
		display: flex;
	}

	.li-flex {
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding-top: 35upx;
	}

	.flex-center {
		text-align: center;
	}

	.login {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	.login-main {
		flex: 1;
		padding: 0 70upx;

		.login-logo {
			width: 500upx;
			font-size: 40upx;
			// height: 242rpx;
			padding-bottom: 50upx;
			margin: 200rpx auto 0 auto;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.logo-tip {
			text-align: center;
			padding-top: 50upx;
			font-size: 32upx;
			font-weight: 200;
			color: rgba(51, 51, 51, 1);
			padding-bottom: 50upx;
		}

		.login-list {
			margin-top: 35upx;
			height: 100upx;
			align-items: center;
			padding: 0 30upx;

			&.border-all {
				&:after {
					border: 1px solid #D0D0D0;
					border-radius: 100upx;
				}
			}

			.iconfont {
				width: 65upx;
				font-size: 44upx;
				align-items: center;

				&:after {
					margin-left: 20upx;
					content: '';
					width: 2upx;
					height: 35upx;
					background: #D0D0D0;
					display: block;
				}
			}

			.login-input {
				flex: 1;

				input {
					font-size: 28upx;
					color: #333333;
					padding-left: 20upx;
				}
			}

			.code-sx {
				content: '';
				width: 2upx;
				height: 25upx;
				background: #D0D0D0;
				margin-right: 25upx;
			}

			.codeimg {
				font-size: 24upx;
				color: #999999;
			}
		}

		.login-btn {
			margin-top: 70upx;
			height: 96upx;
			width: 100%;
			background: linear-gradient(-90deg, rgba(80, 85, 168, 1), rgba(104, 110, 210, 1));
			border-radius: 47upx;
			font-size: 34upx;
			color: #ffffff;
		}

		.register-btn {
			margin-top: 20upx;
			height: 96upx;
			width: 100%;
			background: #999;
			border-radius: 47upx;
			font-size: 34upx;
			color: #ffffff;
		}

		.login-tip {
			padding-top: 26upx;
			font-size: 22upx;
			color: #666666;
			text-align: center;

			navigator {
				margin-left: 10upx;
				display: inline-block;
				color: #5055A8;
			}
		}
	}
</style>
