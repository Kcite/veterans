<!-- xxx -->
<template>
	<view class="container p30 bgcfff">
		<u-parse :html="newData.cContext" :show-with-animation="true"></u-parse>
	</view>
</template>

<script>
	import {
		getNewInfo
	} from '@/plugin/api'
	export default {
		data() {
			return {
				newData: {}
			}
		},
		onLoad(options) {
			//	商品数据
			console.log(JSON.parse(options.data));
			let that = this;
			that.init(JSON.parse(options.data));
		},
		onShow() {},
		methods: {
			//页面初始化
			init(AutoID) {
				this.getNewInfo(AutoID);
			},

			getNewInfo(AutoID) {
				let that = this;
				getNewInfo({
					AutoID: AutoID
				}).then(({
					data: {
						code,
						data,
						msg
					}
				}) => {
					if (code === 1) {
						console.log(data);
						that.newData = data[0];
					} else if (msg) {
						that.$refs.uToast.show({
							title: msg,
							position: 'top',
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
	}
</style>
