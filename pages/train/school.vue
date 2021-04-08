<!-- xxx -->
<template>
	<view class="container">
		<image class="header" src="http://www.sxcmvc.com/ww_templete/ww_634783759337998046/images/DSC_7906_%E5%89%AF%E6%9C%AC.jpg" mode=""></image>
		<view class="head">
			<text class="label">{{newData.CourseType}}</text>
			<text class="">山西财贸职业技术学院</text>
		</view>
		<u-gap height="20" bg-color="#f5f5f5"></u-gap>
		<view class="body">
			<view class="li-list-item">
				<text class="title">班级名称：</text>
				<text class="value">{{newData.CourseName}}</text>
			</view>
			<view class="li-list-item">
				<text class="title">课程简介：</text>
				<text class="value">{{newData.cDescribe}}</text>
			</view>
			<view class="li-list-item">
				<text class="title">截止报名时间：</text>
				<text class="value">{{newData.dStartDate}}</text>
			</view>
			<button class="li-btn" type="default" @click="goFrom()">我要报名</button>
		</view>
	</view>
</template>

<script>
	import {
		getSchoolInfo
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
		onShow() {

		},
		methods: {
//页面初始化
			init(data) {
				let {type, strID} = data
				console.log(type);
				this.getSchoolInfo(strID);
			},

			getSchoolInfo(strID) {
				let that = this;
				getSchoolInfo({
					strID: strID
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
			},
			
			
			goFrom(){
				let url = '/pages/train/from'
				console.log(1)
				uni.navigateTo({
					url: url
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

	.header {
		background-color: #ccc;
		width: 100vw;
		height: 400upx;
	}

	.head {
		display: flex;
		align-items: center;
		background-color: #fff;
		padding: 30upx;

		.label {
			background-color: #eee;
			color: #2979FF;
			padding: 10upx 30upx;
			margin-right: 30upx;
		}
	}

	.body {
		background-color: #fff;
		padding: 30upx;

		.li-list-item {
			display: flex;
			flex-direction: column;
			line-height: 1.75;
			margin-bottom: 20upx;

			.title {
				font-size: 30upx;
				color: #333;
				border-left: 10upx solid #FA3534;
				line-height: 1.5;
				margin: 5upx 0;
				padding-left: 20upx;
			}

			.value {
				font-size: 28upx;
				color: #999;
			}
		}

		.li-btn {
			background-color: #2979FF;
			color: #fff;
			border-radius: 50upx;
			margin-top: 50upx;
		}
	}
</style>
