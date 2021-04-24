<!-- xxx -->
<template>
	<view class="container p30">
		<view class="pb30 li2">
			<text class="fs30 fw700">{{data.jobName}}</text>
			<view class="flex">
				<view class="flex">
					<u-icon color="#959BA7" name="map"></u-icon>
					<text class="ml10">{{data.workAddr}}</text>
				</view>
				<view class="flex ml20">
					<u-icon color="#959BA7" name="order"></u-icon>
					<text class="ml10">{{data.require.workingYears}} · {{data.require.qualifcations}} · {{data.require.workingYears}}</text>
				</view>
			</view>
			<text class="fs28 c9">报名截止时间：2021.05.01</text>
		</view>
		<view class="li-body">
			<view class="">
				<text class="fs30 fw700">职位详情</text>
				<view class="label">
					<text v-for="(litem, index) in data.label" :key="index" class="label-item">{{litem.labelName}}</text>
				</view>
			</view>
			<view class="flex column pt20 pb20 li15">
				<text>岗位职责：</text>
				<text class="c9">1.这里是职责详情。</text>
				<text class="c9">1.这里是职责详情。</text>
				<text class="c9">1.这里是职责详情。</text>
			</view>
			<view class="flex column pt20 pb20">
				<text>任职要求：</text>
				<text class="c9">1.这里是职责详情。</text>
				<text class="c9">1.这里是职责详情。</text>
				<text class="c9">1.这里是职责详情。</text>
			</view>
			<view class="">
				<text class="fs30 fw700">公司信息</text>
				<view class="">
					<view class="flex alct pb30 pt30">
						<u-avatar :src="data.imgSrc"></u-avatar>
						<view class="flex column ml20 li15">
							<text class="fw700">{{data.userName}}</text>
							<text>{{data.historyPost}}</text>
						</view>
					</view>

					<view class="" @click="goToAdd()">
						<map style="width: 100%; height: 150px;" :latitude="latitude" :longitude="longitude" :markers="covers"
						 :enable-zoom="false" :enable-scroll="false" @tap="tap">
						</map>
					</view>
				</view>
			</view>
		</view>
		<view class="li-foot mt20">
			<u-button type="primary" shape="circle">申请加入</u-button>
		</view>
	</view>
</template>

<script>
	import {
		getRecruitInfo
	} from '@/plugin/api'
	export default {
		data() {
			return {
				AutoID: '',
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
				},
				latitude: 39.909,
				longitude: 116.39742,
				covers: [{
					latitude: 39.909,
					longitude: 116.39742,
				}, {
					latitude: 39.90,
					longitude: 116.39,
				}]
			}
		},
		onLoad(options) {
			console.log(options);
			this.AutoID = JSON.parse(options.data) || this.data;
			let that = this;
			that.init(this.AutoID);
		},
		onShow() {
			
		},
		methods: {
			
			//页面初始化
			init(AutoID) {
				this.getRecruitInfo(AutoID);
			},
			
			// 加载课程
			getRecruitInfo(strXzqhDm) {
				let that = this;
				getRecruitInfo({
					AutoID
				}).then(({
					data: {
						code,
						data,
						msg
					}
				}) => {
					if (code === 1) {
						console.log(data);
						that.skillTrainingList = data;
					} else if (msg) {
						that.$refs.uToast.show({
							title: msg,
							position: 'top',
							type: 'error'
						})
					}
					uni.hideNavigationBarLoading()
					uni.stopPullDownRefresh()
				})
			},
			
			tap(){
				console.log(111);
				uni.getLocation({
					type: 'gcj02', //返回可以用于uni.openLocation的经纬度
					success: function(res) {
						const latitude = res.latitude;
						const longitude = res.longitude;
						uni.openLocation({
							latitude: latitude,
							longitude: longitude,
							success: function() {
								console.log('success');
							}
						});
					}
				});
			},

			goToAdd() {
				uni.getLocation({
					type: 'gcj02', //返回可以用于uni.openLocation的经纬度
					success: function(res) {
						const latitude = res.latitude;
						const longitude = res.longitude;
						uni.openLocation({
							latitude: latitude,
							longitude: longitude,
							success: function() {
								console.log('success');
							}
						});
					}
				});
			}
		}
	}
</script>

<style lang='scss'>
	.container {
		background-color: #FFFFFF;
	}

	.li-foot {
		position: absolute;
		width: 690upx;
		bottom: 50upx;
	}
</style>
