<!-- xxx -->
<template>
	<view class="container p30">
		<view class="pt30 pb30">
			<text class="fs30 fw700">编辑求职期望</text>
		</view>
		<u-form :model="form" ref="uForm" label-width="180">
			<u-form-item label="期望职位">
				<u-input type="select" v-model="form.position.name" @click="openPage()" />
			</u-form-item>
			<u-form-item label="期望行业">
				<u-input type="select" v-model="form.industry" @click="industryShow = true" />
				<u-select v-model="industryShow" :list="industryList"  @confirm="industryConfirm"></u-select>
			</u-form-item>
			<u-form-item label="工作城市">
				<u-input v-model="form.address" type="select" @click="show = true" />
				<u-picker mode="region" v-model="show" :area-code='["14", "1407", "140702"]'
					:safe-area-inset-bottom="true" @confirm="confirm"></u-picker>
			</u-form-item>
			<u-form-item label="薪资要求">
				<u-input type="select" v-model="form.salary" @click="salaryShow = true" />
				<u-select :default-value="salaryDefaultValue" mode="single-column" v-model="salaryShow"
					:list="salaryList" @confirm="salaryConfirm" @cancel="salaryCancel"></u-select>
			</u-form-item>
			<!-- <u-form-item label="岗位经验">
				<u-input type="select" v-model="form.intro" @click="salaryShow = true" />
				<u-select v-model="salaryShow" :list="salarylist"></u-select>
			</u-form-item> -->
			<!-- <u-form-item label="工作经历/实习经历">
				<u-switch slot="right" v-model="switchVal"></u-switch>
			</u-form-item>
			<u-form-item label="教育经历">
				<u-switch slot="right" v-model="switchVal"></u-switch>
			</u-form-item> -->
		</u-form>

		<view class="foot mt20">
			<u-button type="primary" shape="circle">发布审核</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					name: '',
					intro: '',
					position: '', // 期望职位
					industry: '',
					address: '',
					salary: ''
				},

				// 期望行业
				industryShow: false,
				industryList: [{
						value: '1',
						label: '互联网'
					},
					{
						value: '2',
						label: '金融'
					},
					{
						value: '3',
						label: '广告'
					},
					{
						value: '4',
						label: '教育'
					},
					{
						value: '5',
						label: '服务业'
					},
					{
						value: '6',
						label: '汽车'
					}
				],
				// 薪资要求
				salaryShow: false,
				salaryDefaultValue: [3],
				salaryList: [{
						value: '1',
						label: '1K'
					},
					{
						value: '2',
						label: '2K'
					},
					{
						value: '3',
						label: '3K'
					},
					{
						value: '4',
						label: '4K'
					},
					{
						value: '5',
						label: '5K'
					},
					{
						value: '6',
						label: '6K'
					}
				],
				show: false,
				list: [{
						value: '1',
						label: '江'
					},
					{
						value: '2',
						label: '湖'
					}
				],
				checkboxList: [{
						name: '苹果',
						checked: false,
						disabled: false
					},
					{
						name: '雪梨',
						checked: false,
						disabled: false
					},
					{
						name: '柠檬',
						checked: false,
						disabled: false
					}
				],
				radioList: [{
						name: '鲜甜',
						disabled: false
					},
					{
						name: '麻辣',
						disabled: false
					}
				],
				radio: '',
				switchVal: false
			}
		},
		onLoad() {

		},
		onShow() {

		},
		methods: {

			// 期望职位
			openPage() {
				this.$u.route({
					type: 'to',
					params: {
						age: 22,
						name: '李商隐'
					},
					url: '/pages/template/mallMenu/index',
					animationType: 'slide-in-bottom'
				});
			},

			// 工作城市
			confirm(e) {
				let that = this;
				that.form.address = '';
				console.log(e.province.label + '-' + e.city.label + '-' + e.area.label);
				that.form.address = e.province.label + '-' + e.city.label + '-' + e.area.label;
			},
			// 行业
			industryConfirm(e) {
				let that = this;
				that.form.industry = '';
				e.map((val, index) => {
					this.form.industry += this.form.industry == '' ? val.label : '-' + val.label;
				})
			},
			// 薪资要求
			salaryConfirm(e) {
				let that = this;
				that.form.salary = '';
				e.map((val, index) => {
					this.form.salary += this.form.salary == '' ? val.label : '-' + val.label;
				})
			},
			salaryCancel(e) {
				console.log(e);
			}
		}
	}
</script>

<style lang='scss'>
	.container {
		background: #fff;
	}
</style>
