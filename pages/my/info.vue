<!-- xxx -->
<template>
	<view class="container">
		<u-cell-group>
			<u-cell-item center :is-link="true" value="" index="index" @click="avatarCropper()" :arrow="true"
				:border-bottom="false" title="头像">
				<u-avatar :src="userInfo.cAvatar || '/static/missing-face.png'"></u-avatar>
			</u-cell-item>
			<u-field v-model="userInfo.cUserName" label="昵称" placeholder="请填写昵称" :border-top="false"
				:border-bottom="false" input-align="right">
			</u-field>
			<u-cell-item :border-bottom="false" title="性别" value="" :arrow="false">
				<u-radio-group style="float: right;" v-model="userInfo.bSex" @change="radioGroupChange">
					<u-radio @change="radioChange" v-for="(item, index) in list" :key="index" :name="item.name"
						:disabled="item.disabled">
						{{item.name}}
					</u-radio>
				</u-radio-group>
			</u-cell-item>
			<u-field v-model="userInfo.cSfzh" label="身份证号" placeholder="请输入身份证号" :border-top="false"
				:border-bottom="false" input-align="right">
			</u-field>
			<u-field v-model="userInfo.cPhone" label="手机号码" placeholder="请填写手机号码" :border-top="false"
				:border-bottom="false" input-align="right">
			</u-field>
			<u-field @click="value = true" v-model="adds" :disabled="true" label="现居地址" placeholder="请填写现居地址"
				right-icon="arrow-down-fill" input-align="right">
			</u-field>
			<city-select v-model="value" @city-change="cityChange"></city-select>
		</u-cell-group>

		<u-button type="primary" @click="submit()">完善信息</u-button>

		<u-toast ref="uToast"></u-toast>
	</view>
</template>

<script>
	import {
		updatePersonInfo,
		getPersonToken
	} from '@/plugin/api'

	import citySelect from './u-city-select.vue';
	export default {
		components: {
			citySelect
		},
		data() {
			return {
				userInfo: {

				},
				Avatar: '',
				nickType: false,
				nickName: '万里',
				list: [{
						name: '男',
						disabled: false
					},
					{
						name: '女',
						disabled: false
					}
				],

				// u-radio-group的v-model绑定的值如果设置为某个radio的name，就会被默认选中
				value: false,
				adds: ''
			}
		},
		computed: {},
		onLoad() {},
		onShow() {let that = this;
			let userInfo = uni.getStorageSync('userInfo');
			this.userInfo = userInfo;
			that.adds = that.userInfo.cSheng + '-' + that.userInfo.cShi + '-' + that.userInfo.cQuxian
			console.log(userInfo);
		},
		methods: {
			// 头像
			avatarCropper() {
				uni.navigateTo({
					url: 'avatarCropper'
				})
			},
			// 性别切换
			radioChange(e) {
				let that = this;
				console.log(e);
				that.userInfo.bSex = e;
			},
			// 现居地址
			cityChange(e) {
				let that = this;
				console.log(e);
				that.adds = e.province.label + '-' + e.city.label + '-' + e.area.label
				that.userInfo.cSheng = e.province.label
				that.userInfo.cShi = e.city.label
				that.userInfo.cQuxian = e.area.label
				that.userInfo.cXzqh = e.area.value
			},

			// 选中任一radio时，由radio-group触发
			radioGroupChange(e) {
				// console.log(e);
			},
			// 提交信息
			submit() {
				this.updatePersonInfo();
			},

			updatePersonInfo() {
				let that = this;

				if (that.userInfo.cSfzh) {
					let valid = this.$u.test.idCard(that.userInfo.cSfzh);
					if (!valid) {
						this.$refs.uToast.show({
							title: '身份证号验证失败',
							position: 'top',
							type: 'error'
						})
						console.log('验证失败');
						return;
					}
				}

				if (that.userInfo.cPhone) {
					let valid = this.$u.test.mobile(that.userInfo.cPhone);
					if (!valid) {
						this.$refs.uToast.show({
							title: '手机号码验证失败',
							position: 'top',
							type: 'error'
						})
						console.log('验证失败');
						return;
					}
				}

				let token = uni.getStorageSync('token')

				const params = that.userInfo
				params.token = token
				params.bSex = params.bSex === "男" ? true : false

				updatePersonInfo(params).then(res => {
					console.log(res);
					if(res.data.code === 1){
						
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
