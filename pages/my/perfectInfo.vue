<!-- xxx -->
<template>
	<view class="container pb30">
		<u-cell-group>
			<u-field v-model="userInfo.name" label="姓名" placeholder="请填写姓名" required input-align="right">
			</u-field>
			<u-field v-model="userInfo.cSfzh" label="身份证号" placeholder="请填写身份证号" input-align="right">
			</u-field>
		</u-cell-group>
		<view class="bgcfff p30 fs28">
			<text class="red">上传本人退伍军人证件照</text>
			<text>(照片需真实有效，仅用与线下签到时使用)</text>
			<u-upload ref="uUpload" :action="action" :auto-upload="false" :form-data="formData"
				:max-size="4 * 1024 * 1024" :max-count="1" @on-success="qiniuImgSuccess()">
			</u-upload>
		</view>

		<u-button type="primary" @click="submit()">提交信息</u-button>
	</view>
</template>

<script>
	import {
		UpLoadTwjz
	} from '@/plugin/api'
	export default {
		data() {
			return {
				userInfo: {
					name: '',
					cSfzh: ''
				},
				action: 'https://up-z1.qiniup.com',
				lists: [],

				formData: {
					'key': '',
					'token': ''
				},
			}
		},
		computed: {},
		// 只有onReady生命周期才能调用refs操作组件
		onReady() {
			// 得到整个组件对象，内部图片列表变量为"lists"
			this.lists = this.$refs.uUpload.lists;
			uni.request({
				url: 'http://82.156.230.120:3000/api/getToken',
				success: (res) => {
					console.log(res.data);
					this.formData.key = 'veterans/images/TWjz' + new Date().getTime()
					this.formData.token = res.data.data.token
				}
			})
		},
		onLoad() {

		},
		onShow() {
			let userInfo = uni.getStorageSync('userInfo');
			this.userInfo.cSfzh = userInfo.cSfzh;
			console.log(userInfo);
		},
		methods: {

			qiniuImgSuccess(index) {
				console.log(index);

			},
			// 图片上传
			upload() {
				this.$refs.uUpload.upload();
			},

			// 提交信息
			submit() {
				let that = this;
				console.log(that);

				this.upload();

				let files = [];
				// 通过filter，筛选出上传进度为100的文件(因为某些上传失败的文件，进度值不为100，这个是可选的操作)
				files = this.$refs.uUpload.lists.filter(val => {
					return val.progress == 100;
				})
				// 如果您不需要进行太多的处理，直接如下即可
				// files = this.$refs.uUpload.lists;
				console.log(files)

				if (!that.userInfo.name) {
					// that.$u.toast('倒计时结束后再发送');
					that.$refs.uToast.show({
						title: '请填写姓名',
						type: 'error'
					})
					return false;
				}

				let token = uni.getStorageSync('token')

				const params = {
					token: token,
					name: that.userInfo.name,
					TwjzUrl: that.formData.key
				}

				UpLoadTwjz(params).then(res => {
					console.log(res);
					if (res.data.code === 1) {
						setTimeout(() => {
							uni.switchTab({
								url: '/pages/tab-bar/my'
							})
						}, 1000);
					} else {
						console.log(res.data.msg);
						that.$refs.uToast.show({
							title: res.data.msg,
							type: 'error'
						})
					}
				})
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
