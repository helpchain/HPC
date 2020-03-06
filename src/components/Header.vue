<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// @import '@/assets/scss/variable.scss';
@import '~@/assets/scss/index.scss';
.header {
  position: fixed;
  top: 0;
  left: 0;
  height: $headerHeight;
  width: 100%;
  line-height: $headerHeight;
  background: $main-box-fh-bg-color;
  border-bottom: 0.0625rem solid $bottomLineColor;
  @include userSelectNone();
  z-index:200;
	  .van-nav-bar{
		  background-color: inherit !important;
		  color: $mainTextColor;
	  }
	  .van-nav-bar__title{
		  color: inherit !important;
	  }
	.header-wrapper{
	  position:relative;
	  height:100%;
	  display: flex;
	  padding: 0 $boxPadding2;
	  box-sizing: border-box;
	  align-items: center;
	  // height: $header-height;
	  // line-height: $header-height;
	  .leftBox{
			flex: 0 0 70px;
			color: $main-box-fh-text-color;
			font-size: 0.75rem;
	  }
	  .text{
		  flex: 1;
		  text-align: center;
		  font-size: 16px;
		  color:$main-box-fh-text-color;
	  }
	  .rightBox{
			flex: 0 0 70px;
			text-align: right;
			&.text{
				color: $main-adorn-color;
				font-size: 0.75rem;
				color: $main-box-fh-text-color;
			}
			&.icon{
				color: $main-box-fh-text-color;
				font-size: 20px;
			}
	  }
	}
}
</style>
<template>
  <div class="header">
  	<div class="header-wrapper">
		<slot></slot>
	</div>
  </div>
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
		// let params = window.location.hash;
		// let hash = params.substr(2);
		// console.log("hash",hash);
		// switch(hash) {
		//     case 'home':
		//        _this.active = 0;
		//        break;
		//     case 'mill':
		//        _this.active = 1;
		//        break;
		// 	case 'store':
		// 	   _this.active = 2;
		// 	   break;
		// 	case 'deal':
		// 	   _this.active = 3;
		// 	   break;
		// 	case 'my':
		// 	   _this.active = 4;
		// 	   break;
		//     default:
		//        _this.active = 0;
		// } 
	}
}
</script>
