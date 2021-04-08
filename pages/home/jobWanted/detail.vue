<!-- 求职信息 -->
<template>
	<view class="container bgcfff p30">
		<view class="flex alct pb30">
			<u-avatar :src="data.imgSrc"></u-avatar>
			<view class="flex column ml20 li15">
				<text class="fw700">{{data.userName}}</text>
				<text>{{data.historyPost}}</text>
			</view>
		</view>
		<view class="body">
			<view class="flex alct pb30">
				<u-icon name="order" color="#333" size="28"></u-icon>
				<text class="ml10">{{data.require.workingYears}} · {{data.require.qualifcations}} · {{data.require.age}}</text>
			</view>
			<view class="remarks c9 pb30">
				<text>{{data.remarks}}</text>
			</view>

			<view class="li-section">
				<view class="li-section-title pl15 mt20 mb20">
					求职期望
				</view>
				<view class="">
					<view class="li2">
						<view class="flex jusb">
							<text class="fw700">销售专员，晋中</text>
							<text class="red">3.5K~4.5K/月</text>
						</view>
						<view class="">
							<text>行业不限</text>
						</view>
					</view>
				</view>
			</view>
			<view class="li-section">
				<view class="li-section-title pl15 mt20 mb20">
					岗位经验
				</view>
				<view class="li-section-body">
					<view class="li2">
						<view class="li-list-head">
						</view>
						<view class="li-list-body">
							<text>置业顾问1年9个月</text>
						</view>
					</view>
				</view>
			</view>
			<view class="li-section">
				<view class="li-section-title pl15 mt20 mb20">
					工作经历
				</view>
				<view class="li-section-body">
					<view class="li2">
						<view class="flex jusb">
							<text class="fw700">田森</text>
							<text>2020.12-2021.02</text>
						</view>
						<view class="flex column">
							<text class="c3">置业顾问</text>
							<text class="c9">负责处理图形化事务。</text>
						</view>
					</view>
				</view>
			</view>
			<view class="li-section">
				<view class="li-section-title pl15 mt20 mb20">
					教育经历
				</view>
				<view class="li-section-body">
					<view class="li2">
						<view class="flex jusb">
							<text class="fw700">中国石油大学</text>
							<text>2017.12-2020.02</text>
						</view>
						<view class="li-list-body">
							<text>电气自动化及其它自动化·非全日制·本科</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="foot mt20">
			<u-button type="primary" shape="circle" @click="">去联系他</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				data: {
					imgUrl: '/static/missing-face.png', // imgUrl
					userName: '李先生', // 用户名
					historyPost: '山西云洗电子有限公司·技术',
					releaseData: '2021-03-03', // 发布日期
					jobName: '实施人员', // 岗位名称
					price: '3.5K~4.5K/月',
					workAddr: '晋中市桥东街', // 工作地址
					require: {
						workingYears: '5年以上',
						qualifcations: '大专',
						age: '28岁'
					}, // 需要
					remarks: '退役军人，丰富的运营经验，活动推广，文案撰写还可以，具有一定的执行力，审美能力'
				}
			}
		},
		onLoad(options) {
			console.log(options);
			this.data = JSON.parse(options.data);
			console.log(this.data);
		},
		onShow() {

		},
		methods: {

		}
	}
</script>

<style lang='scss'>
	.container {
		background-color: #fff;
	}
	
	.li-section {
	}

	.li-section-title {
		border-left: 10upx solid #2979FF;
	}
	
	.foot {
		position: absolute;
		width: 690upx;
		bottom: 50upx;
	}
</style>
