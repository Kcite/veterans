<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	@import "styles/iconfont.css";
	@import "uview-ui/index.scss";
	/*每个页面公共css */

	.container {
		min-height: 100vh;
		background: #f5f5f5;
	}

	.flex {
		display: flex;
	}

	.column {
		flex-direction: column;
	}

	.jual {
		justify-content: center;
		align-items: center;
	}

	.juct {
		justify-content: center;
	}

	.jusb {
		justify-content: space-between;
	}

	.alct {
		align-items: center;
	}

	.bgcfff {
		background-color: #fff;
	}

	.red {
		color: red;
	}

	/* 文字尺寸 */
	.fs24 {
		font-size: 24upx;
	}

	.fs26 {
		font-size: 26upx;
	}

	.fs28 {
		font-size: 28upx;
	}

	.fs30 {
		font-size: 30upx;
	}

	.fs40 {
		font-size: 40upx;
	}

	.fw700 {
		font-weight: 700;
	}

	.c3 {
		color: #333;
	}

	.c9 {
		color: #999;
	}

	.bgcfff {
		background-color: #FFFFFF;
	}

	.p30 {
		padding: 30upx;
	}

	.pl15 {
		padding-left: 15upx;
	}

	.pt10 {
		padding-top: 10upx;
	}

	.pt20 {
		padding-top: 20upx;
	}

	.pb10 {
		padding-bottom: 10upx;
	}

	.pb20 {
		padding-bottom: 20upx;
	}

	.pt30 {
		padding-top: 30upx;
	}

	.pb30 {
		padding-bottom: 30upx;
	}

	.pr20 {
		padding-right: 20upx;
	}

	.mt20 {
		margin-top: 20upx;
	}

	.ml10 {
		margin-left: 10upx;
	}

	.ml20 {
		margin-left: 20upx;
	}

	.mr10 {
		margin-right: 10upx;
	}

	.mr20 {
		margin-right: 20upx;
	}

	.mb20 {
		margin-bottom: 20upx;
	}

	.li15 {
		line-height: 1.5;
	}

	.li2 {
		line-height: 2;
	}

	.br10 {
		border-radius: 10upx;
	}

	.br50 {
		border-radius: 50upx;
	}
</style>
