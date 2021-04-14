<!-- 注册 -->
<template>
	<view class="container">
		<!-- logo -->
		<view class="li-login-logo flex">
			<!-- <image class="img" src="../../static/login/login.png" mode=""></image> -->
			<text class="fs40 fw700">山西退役军人服务平台</text>
		</view>
		<!-- 登录 -->
		<view class="li-login-form">
			<u-form class="li-input" :model="form" ref="uForm" :error-type="errorType">
				<!-- 手机号码 -->
				<u-form-item :leftIconStyle="{color: '#888', fontSize: '34rpx', width:'34rpx', height:'34rpx'}"
					left-icon="/static/login/phone.png" prop="phone">
					<u-input placeholder="请输入手机号" placeholderStyle="placeclass" maxlength="11" v-model="form.phone"
						type="number"></u-input>
				</u-form-item>
				<!-- 验证码 -->
				<u-form-item :leftIconStyle="{color: '#888', fontSize: '34rpx', width:'34rpx', height:'34rpx'}"
					left-icon="/static/login/key.png" prop="code" label-width="150">
					<u-input placeholder="请输入验证码" placeholderStyle="placeclass" maxlength="4" v-model="form.code"
						type="text"></u-input>
					<u-button class="li-form-code" slot="right" type="primary" size="mini" @click="getCode">{{codeTips}}
					</u-button>
				</u-form-item>
				<!-- 交易密码 -->
				<u-form-item :leftIconStyle="{color: '#888', fontSize: '34rpx', width:'34rpx', height:'34rpx'}"
					left-icon="/static/login/password.png" prop="pwd">
					<u-input placeholder="请输入登录密码" placeholderStyle="placeclass" maxlength="6" v-model="form.pwd"
						type="password"></u-input>
				</u-form-item>
			</u-form>
			<!-- 服务条款 -->
			<view class="agreement">
				<!-- <u-checkbox v-model="check" @change="checkboxChange"></u-checkbox> -->
				<view class="agreement-text">
					注册表示同意<navigator style="color: #328FFF;" url="/pages/login/serve">软件许可及服务协议</navigator>
				</view>
			</view>
			<!-- 注册 -->
			<view class="li-form-btns">
				<button class="cu-btn login-btn"
					style="color: #fff; display: flex; align-items: center; justify-content: center;" @tap="submit">注
					册</button>
			</view>
		</view>
		<!-- 验证码组件 -->
		<u-verification-code seconds="60" ref="uCode" @change="codeChange"></u-verification-code>
		<!-- toast组件 -->
		<u-toast ref="uToast" />
	</view>
</template>

<script>
	import {
		registerPerson, // 注册
		VerifyPhone, // 校验手机号
		sendSMS, // 获取验证码
		getlogin // 登录
	} from '@/plugin/api'
	export default {
		data() {
			return {
				// 文字提示
				errorType: ['toast'],
				// 验证码
				codeTips: '',
				form: {
					phone: '',
					code: '',
					pwd: ''
				},
				rules: {
					phone: [{
							required: true,
							len: 11,
							message: '请输入正确的手机号',
							// 可以单个或者同时写两个触发验证方式 
							trigger: 'blur',
						}, {
							// 自定义验证函数，见上说明
							validator: (rule, value, callback) => {
								// 上面有说，返回true表示校验通过，返回false表示不通过
								// this.$u.test.mobile()就是返回true或者false的
								return this.$u.test.mobile(value);
							},
							message: '手机号码不正确',
							// 触发器可以同时用blur和change
							trigger: 'blur',
						},
						// 校验用户是否已存在
						{
							asyncValidator: (rule, value, callback) => {
								VerifyPhone({
									Phone: value
								}).then(res => {
									console.log(res);
									// 如果验证不通过，需要在callback()抛出new Error('错误提示信息')
									if (res.data.code === 0) {
										callback(new Error('手机号已经注册'));
									} else {
										// 如果校验通过，也要执行callback()回调
										callback();
									}
								})
							},
							// 如果是异步校验，无需写message属性，错误的信息通过Error抛出即可
							// message: 'xxx'
						}
					],
					code: [{
						len: 4,
						message: '请输入验证码',
						trigger: 'blur'
					}],
					pwd: [{
						len: 6,
						message: '请输入登录密码',
						trigger: 'blur'
					}]
				}
			}
		},
		onReady() {
			// 设置uForm组件的校验规则
			this.$refs.uForm.setRules(this.rules);
		},
		methods: {
			// 更改验证码显示文字
			codeChange(text) {
				this.codeTips = text;
			},
			// 获取验证码
			getCode() {
				let that = this;
				if (!that.form.phone) {
					// that.$u.toast('倒计时结束后再发送');
					that.$refs.uToast.show({
						title: '请输入手机号码',
						type: 'error'
					})
					return false;
				}
				if (that.$refs.uCode.canGetCode) {
					// 模拟向后端请求验证码
					uni.showLoading({
						title: '正在获取验证码',
						mask: true
					})
					console.log(that.form.phone);
					uni.hideLoading();
					// 这里此提示会被this.start()方法中的提示覆盖
					that.$u.toast('验证码已发送');
					// 通知验证码组件内部开始倒计时
					that.$refs.uCode.start();
					return;
					sendSMS({
						smsType: '1',
						userPhone: that.form.phone
					}).then(res => {
						console.log(res);
						if (res.data.code === 0) {
							uni.hideLoading();
							// 这里此提示会被this.start()方法中的提示覆盖
							that.$u.toast('验证码已发送');
							// 通知验证码组件内部开始倒计时
							that.$refs.uCode.start();
						} else {
							uni.hideLoading();
							console.log(res.data.msg);
							that.$refs.uToast.show({
								title: res.data.msg,
								position: 'top',
								type: 'error'
							})

							if (res.data.msg === '账号已注册，请登录') {
								setTimeout(() => {
									uni.hideLoading();
									uni.redirectTo({
										url: 'login'
									})
								}, 2000);
							}
						}
					})
				} else {
					that.$u.toast('倒计时结束后再发送');
				}
			},
			// 注册
			submit() {
				let that = this;
				this.$refs.uForm.validate(valid => {
					if (valid) {
						console.log('验证通过');

						that.goRegist(that.form.code, that.form.phone, that.form.pwd);
						this.$refs.uForm.resetFields();
					} else {
						console.log('验证失败');
					}
				});
			},
			// 注册
			goRegist(code, phone, pwd) {
				let that = this
				let params = {
					UserName: phone,
					PassWord: pwd,
					Phone: phone
				}
				registerPerson(params).then(res => {
					console.log(res);
					if (res.data.code === 1) {

						that.$refs.uToast.show({
							title: '正在跳转登录',
							type: 'success'
						})
						let locaInfo = uni.getStorageSync('locaInfo');

						let params = {
							UserName: phone,
							PassWord: pwd,
							IP: locaInfo
						}

						// 登录
						getlogin(params).then(res => {
							console.log(res);
							console.log(res.data.code === 1);
							if (res.data.code === 1) {
								console.log(res.data.data[0].token);
								uni.hideLoading()
								console.log(res.data.data[0].token);
								uni.setStorageSync('token', res.data.data[0].token)
								console.log(res.data.data[0]);
								uni.setStorageSync('userInfo', res.data.data[0])
								setTimeout(() => {
									uni.switchTab({
										url: '/pages/tab-bar/index'
									})
								}, 1000);
							} else {
								uni.hideLoading()
								console.log(res.data.msg);
								that.$refs.uToast.show({
									title: '登录失败',
									type: 'error'
								})
								setTimeout(() => {
									uni.hideLoading();
									uni.redirectTo({
										url: 'login'
									})
								}, 1000);
							}
						}).catch(error => {});
					} else {
						console.log(res.data.msg);
						that.$refs.uToast.show({
							title: res.data.msg,
							type: 'error'
						})

						if (res.data.msg === '账号已注册，请登录') {
							setTimeout(() => {
								uni.hideLoading();
								uni.redirectTo({
									url: 'login'
								})
							}, 2000);
						}
					}
				}).catch(error => {});
			}
		}
	}
</script>

<style lang="scss">
	@import '../../style/login.scss';

	.login-btn {
		margin-top: 70upx;
		height: 96upx;
		width: 100%;
		background: linear-gradient(-90deg, rgba(80, 85, 168, 1), rgba(104, 110, 210, 1));
		border-radius: 47upx;
		font-size: 34upx;
		color: #ffffff;
	}

	// 协议
	.agreement {
		display: flex;
		align-items: center;
		margin: 30rpx 0;

		.agreement-text {
			display: flex;
			padding-left: 8rpx;
			color: $u-tips-color;
		}
	}
</style>
