<!-- 我的 -->
<template>
	<view class="container">
		<view class="bg">
			<view class="user">
				<view class="head">
					<u-avatar size='120' :src="src"></u-avatar>
					<view v-if="userInfo.cUserName" class="info">
						<text class="fs40">{{userInfo.cUserName || '未填写'}}</text>
						<text class="fs32">{{userInfo.cPhone}}</text>
					</view>
					<view v-if="!userInfo.cUserName" class="info" @click="navTo('/pages/login/login')">
						<text>点击登录账号</text>
					</view>
				</view>
				<view v-if="!bCertification" class="tip" @click="navTo('/pages/my/perfectInfo')">
					未完成认证
					<u-icon name="arrow-right"></u-icon>
				</view>
			</view>
		</view>
		<u-gap height="20" bg-color="#f5f5f5"></u-gap>
		<view class="u-m-t-20">
			<u-cell-group>
				<u-cell-item icon="edit-pen" title="信息完善" @click="navTo('/pages/my/info')"></u-cell-item>
				<u-cell-item icon="man-add" title="退伍军人认证" @click="navTo('/pages/my/perfectInfo')"></u-cell-item>
				<u-cell-item icon="shopping-cart" title="我的培训" @click="navTo('/pages/my/enroll')"></u-cell-item>
			</u-cell-group>
		</view>
		<u-gap height="20" bg-color="#f5f5f5"></u-gap>
		<view class="">
			<u-grid :col="4" :border="false" align="center">
				<u-grid-item>
					<u-icon name="/static/my/扫码.png" width="50" height="50" :size="46"></u-icon>
					<view class="grid-text">邀请码</view>
				</u-grid-item>
				<u-grid-item>
					<u-icon name="/static/my/签到.png" width="50" height="50" :size="46"></u-icon>
					<view class="grid-text">签到</view>
				</u-grid-item>
				<u-grid-item>
					<u-icon name="/static/my/分销.png" width="50" height="50" :size="46"></u-icon>
					<view class="grid-text">分销</view>
				</u-grid-item>
				<u-grid-item>
					<u-icon name="/static/my/招聘.png" width="50" height="50" :size="46"></u-icon>
					<view class="grid-text">招聘</view>
				</u-grid-item>
				<u-grid-item>
					<u-icon name="/static/my/求职.png" width="50" height="50" :size="46"></u-icon>
					<view class="grid-text">求职</view>
				</u-grid-item>
				<u-grid-item>
					<u-icon name="/static/my/直播.png" width="50" height="50" :size="46"></u-icon>
					<view class="grid-text">直播</view>
				</u-grid-item>
				<u-grid-item>
					<u-icon name="/static/my/商城.png" width="50" height="50" :size="46"></u-icon>
					<view class="grid-text">商城</view>
				</u-grid-item>
				<u-grid-item>
					<u-icon name="/static/my/支付.png" width="50" height="50" :size="46"></u-icon>
					<view class="grid-text">支付</view>
				</u-grid-item>
				<u-grid-item @click="makePhoneCall">
					<u-icon name="server-man" color="#ff0000" :size="46"></u-icon>
					<view class="grid-text">客服</view>
				</u-grid-item>
				<u-grid-item @click="navTo('/pages/my/setUp/index')">
					<u-icon name="setting" color="#ff0000" :size="46"></u-icon>
					<view class="grid-text">设置</view>
				</u-grid-item>
			</u-grid>
		</view>

		<!-- <view class="u-m-t-20">
			<u-cell-group>
				<u-cell-item icon="phone" title="客服电话" @click="makePhoneCall"></u-cell-item>
				<u-cell-item icon="setting" title="账号设置" @click="navTo('/pages/my/setUp/index')"></u-cell-item>
			</u-cell-group>
		</view> -->

		<view class="li-logo">
			<text>山西唐元纳智科技有限公司</text>
			<text>技术支持<text style="color: #2979FF;">0354-2426688</text></text>
		</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				userInfo: {},
				src: ''
			}
		},
		onLoad() {
			this.userInfo = uni.getStorageSync('userInfo')
		},
		onShow() {
			this.userInfo = uni.getStorageSync('userInfo')
		},
		methods: {


			makePhoneCall() {
				uni.makePhoneCall({
					phoneNumber: '0354-2426688'
				})
			},

			/**
			 * 统一跳转接口,拦截未登录路由
			 * navigator标签现在默认没有转场动画，所以用view
			 */
			navTo(url, data, type) {
				console.log('【getJob】【navTo】Url：' + url);
				this.route.navTo(url, data, type);
			}
		}
	}
</script>

<style lang='scss'>
	.container {
		min-height: 100vh;
		background: #f5f5f5;
	}

	.bg {
		/* background-color: #fff; */
		/* padding: 30upx 0; */
	}

	.user {
		position: relative;
		height: 300upx;
		border-radius: 0 0 10upx 10upx;
		/* background-image: ; */
		background: url('https://iknow-pic.cdn.bcebos.com/c2cec3fdfc0392456310dea28994a4c27c1e25f1?x-bce-process=image/resize,m_lfit,w_600,h_800,limit_1/quality,q_85/format,f_jpg') bottom right no-repeat;
		background-color: #FF4605;
		background-size: 400upx 300upx;
		/* background: linear-gradient(160deg, #0B5BB1, #1D5450, #EDF7F7); */
		color: #fff;
		/* margin: 0 30upx; */

		.head {
			display: flex;
			align-items: center;
			padding: 50upx;
		}

		.info {
			display: flex;
			flex-direction: column;
			padding-left: 30upx;
			font-size: 30upx;
			line-height: 1.75;
		}

		.tip {
			position: absolute;
			display: flex;
			align-items: center;
			right: 0;
			bottom: 50upx;
			background: #FBFB4B;
			color: #0B5BB1;
			height: 70upx;
			width: 200upx;
			padding-left: 20upx;
			border-radius: 10upx 0 0 10upx;
		}
	}


	.li-list {

		.li-list-item {
			position: relative;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			background-color: #fff;
			height: 110upx;
			border-bottom: 1upx solid #eee;
			padding: 0 30upx;

			.li-list-icon {
				border-radius: 10upx;
				width: 70upx;
				height: 70upx;
			}

			.li-list-body {
				display: flex;
				flex-direction: column;
				line-height: 1.75;
				padding-left: 20upx;

				.title {
					font-size: 30upx;
					color: #333;
				}

				.small {
					font-size: 28upx;
					color: #999;
				}
			}

			.li-icon-right {
				position: absolute;
				right: 30upx;
			}
		}
	}

	.li-logo {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-top: 50upx;
		padding-bottom: 30upx;
		width: 100vw;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #999;
	}
</style>
