<!-- xxx -->
<template>
	<view class="container pb30">
		<u-cell-group>
			<u-field v-model="userInfo.name" label="姓名" placeholder="请填写姓名" required input-align="right">
			</u-field>
			<u-field v-model="userInfo.IDCard" label="身份证号" placeholder="请填写身份证号" input-align="right">
			</u-field>
			<u-field @click="showSexAction" v-model="userInfo.sex" :disabled="true" label="性别" placeholder="请选择性别"
				right-icon="arrow-down-fill" required input-align="right">
			</u-field>
			<u-action-sheet @click="clickSexItem" :list="sexList" v-model="showSex"></u-action-sheet>
			<u-field @click="showArmsAction" v-model="userInfo.arms" :disabled="true" label="兵种" placeholder="请选择兵种"
				right-icon="arrow-down-fill" required input-align="right">
			</u-field>
			<u-action-sheet @click="clickArmsItem" :list="armsList" v-model="showArms"></u-action-sheet>
			<u-field v-model="userInfo.currentAdds" label="现居地址" placeholder="请填写现居地址" :required="true"
				input-align="right">
			</u-field>
			<u-field v-model="userInfo.phone" label="联系电话" placeholder="请填写联系电话" :required="true" input-align="right">
			</u-field>
		</u-cell-group>
		<view class="bgcfff p30 fs28">
			<text class="red">上传本人退伍军人证件照</text>
			<text>(照片需真实有效，仅用与线下签到时使用)</text>
			<u-upload :action="action" :file-list="fileList"></u-upload>
		</view>

		<u-button type="primary" @click="submit()">提交信息</u-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {

				userInfo: {
					name: '',
					IDCard: '',
					sex: '',
					arms: '',
					currentAdds: '',
					phone: ''
				},

				sexList: [{
						text: '男',
					},
					{
						text: '女'
					},
					{
						text: '保密'
					}
				],
				showSex: false,


				armsList: [{
						text: '陆军',
					},
					{
						text: '空军'
					},
					{
						text: '海军'
					},
					{
						text: '武警'
					},
					{
						text: '火箭兵'
					}
				],
				showArms: false,

				// 演示地址，请勿直接使用
				action: 'http://www.example.com/upload',
				fileList: [{
					url: 'http://pics.sc.chinaz.com/files/pic/pic9/201912/hpic1886.jpg',
				}]
			}
		},
		computed: {},
		onLoad() {

		},
		onShow() {

		},
		methods: {

			showSexAction() {
				this.showSex = true;
			},
			clickSexItem(index) {
				this.userInfo.sex = this.sexList[index].text;
			},

			showArmsAction() {
				this.showArms = true;
			},
			clickArmsItem(index) {
				this.userInfo.arms = this.armsList[index].text;
			},

			// 提交信息
			submit() {
				let that = this;
				console.log(that);
				
				if (!that.userInfo.name) {
					// that.$u.toast('倒计时结束后再发送');
					that.$refs.uToast.show({
						title: '请填写姓名',
						type: 'error'
					})
					return false;
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
