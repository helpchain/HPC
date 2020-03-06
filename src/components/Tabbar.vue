<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '~@/assets/scss/index.scss';
.van-tabbar{
	background-color:inherit !important;
}
[class*=van-hairline]::after{
	border: 1px solid $mainBorderColor !important; 
}
.van-tabbar-item{
	@include userSelectNone();
}
</style>
<template>
  <van-tabbar v-model="active" inactive-color="#ffffff" active-color="#ffae00">
    <van-tabbar-item icon="home-o" replace to="/home">首页</van-tabbar-item>
    <van-tabbar-item icon="coupon-o" replace to="/mill">矿机商城</van-tabbar-item>
	<!-- <van-tabbar-item icon="shop-o" replace to="/shop">小店</van-tabbar-item> -->
    <van-tabbar-item icon="after-sale" replace to="/deal">交易市场</van-tabbar-item>
    <van-tabbar-item icon="contact" replace to="/my">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
// import { Button } from 'vant';
// import Button from 'vant/lib/button';
// import 'vant/lib/button/style';
export default {
	props: {
		msg: String
	},
    data() {
		return {
			active: 0,
			boolTrue:true
		}
	},
	created() {
		//...判断tabbar 的 active
		let _this = this;
		let params = window.location.hash;
		let hash = params.substr(2);
		console.log("hash",hash);
		switch(hash) {
		    case 'home':
		       _this.active = 0;
		       break;
			case 'mill':
			   _this.active = 1;
			   break;
			case 'deal':
			   _this.active = 2;
			   break;
			case 'my':
			   _this.active = 3;
			   break;
		    default:
		       _this.active = 0;
		} 
	},
	methods:{
		
	}
}
</script>
