<!-- xxx -->
<template>
	<view class="container p30 bgcfff">
		<view class="">
			<text class="fs40 fw700 li2">学历要求</text>
			<view class="">
				<u-row>
					<u-col style="margin-bottom: 30rpx;" v-for="item in list[0]" :key='item.type' span="4">
						<view class="pb20">
							<u-button :type="data[0] == item.type ? 'primary' : ''" size="default" :plain="true"
								@click="cellClick(0,item.type)">
								{{item.value}}
							</u-button>
						</view>
					</u-col>
				</u-row>
			</view>
		</view>
		<view class="">
			<text class="fs40 fw700 li2">薪资待遇</text>
			<view class="">
				<u-row>
					<u-col style="margin-bottom: 30rpx;" v-for="item in list[1]" :key='item.type' span="4">
						<view class="pb20">
							<u-button :type="data[1] == item.type ? 'primary' : ''" size="default" :plain="true"
								@click="cellClick(1,item.type)">
								{{item.value}}
							</u-button>
						</view>
					</u-col>
				</u-row>
			</view>
		</view>
		<view class="">
			<text class="fs40 fw700 li2">经验要求</text>
			<view class="">
				<u-row>
					<u-col style="margin-bottom: 30rpx;" v-for="item in list[2]" :key='item.type' span="4">
						<view class="pb20">
							<u-button :type="data[2] == item.type ? 'primary' : ''" size="default" :plain="true"
								@click="cellClick(2,item.type)">
								{{item.value}}
							</u-button>
						</view>
					</u-col>
				</u-row>
			</view>
		</view>
		<view class="">
			<text class="fs40 fw700 li2">行业</text>
			<view class="">
				<u-row>
					<u-col style="margin-bottom: 30rpx;" v-for="item in list[3]" :key='item.type' span="4">
						<view class="pb20">
							<u-button :type="data[3] == item.type ? 'primary' : ''" size="default" :plain="true"
								@click="cellClick(3,item.type)">
								{{item.value}}
							</u-button>
						</view>
					</u-col>
				</u-row>
			</view>
		</view>

		<view class="li-foot">
			<u-row gutter="16">
				<u-col span="3">
					<u-button>清除</u-button>
				</u-col>
				<u-col span="9">
					<u-button type="primary" @click="submit">确定</u-button>
				</u-col>
			</u-row>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				data: [0, 0, 0, 0],

				list: [
					[{
						type: 0,
						value: '不限'
					}, {
						type: 1,
						value: '初中及以下'
					}, {
						type: 2,
						value: '中专/中技'
					}, {
						type: 3,
						value: '高中'
					}, {
						type: 4,
						value: '大专'
					}, {
						type: 5,
						value: '不限'
					}, ],
					[{
						type: 0,
						value: '不限'
					}, {
						type: 1,
						value: '初中及以下'
					}, {
						type: 2,
						value: '中专/中技'
					}, {
						type: 3,
						value: '高中'
					}, {
						type: 4,
						value: '大专'
					}, {
						type: 5,
						value: '不限'
					}, ],
					[{
						type: 0,
						value: '不限'
					}, {
						type: 1,
						value: '初中及以下'
					}, {
						type: 2,
						value: '中专/中技'
					}, {
						type: 3,
						value: '高中'
					}, {
						type: 4,
						value: '大专'
					}, {
						type: 5,
						value: '不限'
					}, ],
					[{
						type: 0,
						value: '不限'
					}, {
						type: 1,
						value: '初中及以下'
					}, {
						type: 2,
						value: '中专/中技'
					}, {
						type: 3,
						value: '高中'
					}, {
						type: 4,
						value: '大专'
					}, {
						type: 5,
						value: '不限'
					}, ]
				]
			}
		},
		onLoad() {

		},
		onShow() {

		},
		methods: {

			cellClick(i, val) {
				let that = this;
				that.data = that.data.map((item, index) => {
					if (index == i) {
						item = val;
					}
					return item;
				})
			},

			// 提交
			submit() {
				let that = this;
				console.log(that.data);

				let pages = getCurrentPages();
				console.log(pages);
				let prevPage = pages[pages.length - 2]
				console.log(prevPage);

				prevPage.$vm.screen = that.data

				uni.navigateBack({
					delta: 1
				})
			}
		}
	}
</script>

<style lang='scss'>
	.container {
		min-height: 100vh;
	}

	.li-foot {
		position: fixed;
		width: 650upx;
		height: 100upx;
		bottom: 30upx;
		left: 50upx;
	}
</style>
