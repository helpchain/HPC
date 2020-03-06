<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// @import '@/assets/scss/variable.scss';
@import '~@/assets/scss/variable.scss';
.fullscreenBox{
	position: fixed;
	right: $right;
	top: 60px !important;
	background-color: $main-adorn-color;
	width:$fixed-btn-width;
	height:$fixed-btn-width;
	line-height:$fixed-btn-width;
	border-radius:$fixed-btn-width;
	text-align: center;
	z-index:10002;
	.iconfont-open-fullscreen,.iconfont-close-fullscreen{
		color: $mainTextColor;
		font-size: 20px;
	}
}
</style>
<template>
	<div ref="fullscreenBox" class="fullscreenBox" @click="handleFullScreen">
	  <i class="iconfont" :class="[fullscreen?'iconfont-close-fullscreen':'iconfont-open-fullscreen']"></i>
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
			fullscreen:false
		}
	},
	created() {
		let _this = this;
		_this.fullscreen = _this.$store.state.fullscreen || false;
		// _this.fullscreen = _this.$cookies.get('fullscreen')||false;
		console.log('_this.fullscreen:',_this.fullscreen);
		// _this.handleFullScreen();
	},
	methods:{
		// 全屏事件
		handleFullScreen(){
			let _this = this;
			 _this.$toast('_this.phoneType：'+_this.phoneType);
			if(_this.phoneType=='i'){
				console.log('IOS系统暂时不支持全屏窗口');
				_this.$toast('IOS系统暂时不支持全屏窗口');
				return;
			}
			if(_this.phoneType=='pt'){
				_this.$toast('葡萄浏览器暂时不支持全屏窗口');
				return;
			}
			let element = document.documentElement;
			if (_this.fullscreen) {
				_this.$toast({
					message:'关闭全屏',
					closeOnClick:true,
					duration:1000
				});
			  if (document.exitFullscreen) {
				  document.exitFullscreen();
			  } else if (document.webkitCancelFullScreen) {
				  document.webkitCancelFullScreen();
			  } else if (document.mozCancelFullScreen) {
				  document.mozCancelFullScreen();
			  } else if (document.msExitFullscreen) {
				  document.msExitFullscreen();
			  }
			} else {
				_this.$toast({
					message:'开启全屏',
					closeOnClick:true,
					duration:1000
				});
			  if (element.requestFullscreen) {
				  element.requestFullscreen();
			  } else if (element.webkitRequestFullScreen) {
				  element.webkitRequestFullScreen();
			  } else if (element.mozRequestFullScreen) {
				  element.mozRequestFullScreen();
			  } else if (element.msRequestFullscreen) {
				  // IE11
				  element.msRequestFullscreen();
			  }
			}
			_this.fullscreen = !_this.fullscreen;
			console.log('_this.fullscreen',_this.fullscreen)
			_this.$store.commit('setFullscreen', _this.fullscreen)
			console.log('fullscreen=>',_this.$store.state.fullscreen);
			// _this.$cookies.set('fullscreen', _this.fullscreen, 60 * 60 * 24)
		}
	}
}
</script>
