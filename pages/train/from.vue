<!-- xxx -->
<template>
	<view class="container">
		<view class="from bgcfff p30">
			<u-gap height="30" bg-color="#fff"></u-gap>
			<u-field v-model="name" label="姓名" placeholder="请填写姓名">
			</u-field>
			<u-gap height="30" bg-color="#fff"></u-gap>
			<u-field v-model="mobile" label="手机号" placeholder="请填写手机号">
			</u-field>
			<u-gap height="30" bg-color="#fff"></u-gap>
			<u-button type="primary" @click="submit">提交</u-button>
			<u-gap height="30" bg-color="#fff"></u-gap>
			<text class="c9">*提交信息到机构，等待机构回电。</text>
		</view>
		<u-modal v-model="show" :content="content"></u-modal>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name: '',
				mobile: '',
				show: false,
				content: '提交成功，等机构联系。'
			}
		},
		onLoad() {

		},
		onShow() {

		},
		methods: {
			submit() {
				this.show = true;
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
