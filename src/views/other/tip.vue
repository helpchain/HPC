<style scoped lang="scss">
	@import '~@/assets/scss/variable.scss';
    .error-page{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: $main-bg-color;
        height: 100%;
        box-sizing: border-box;
		text-align: center;
		padding: $boxPadding2;
		// padding: 100px $boxPadding2 $boxPadding2 $boxPadding2;
		.error-code{
		    line-height: 1;
		    font-size: 5rem;
		    font-weight: bolder;
		    color: #2d8cf0;
			span{
				color: #00a854;
			}
		}
		.error-desc{
		    font-size: 0.875rem;
		    color: $mainTextColor;
		}
		.error-handle{
			width: 100%;
		    margin-top: 30px;
		}
    }
    
</style>
<template>
  <div class="error-page">
      <!-- <div class="error-code">出<span>错</span>了</div>
	  <div class="placeholderLine"></div>
	  <div class="placeholderLine"></div> -->
      <div class="error-desc">该链接需在手机浏览器中打开</div>
	  <div class="placeholderLine"></div>
	  <div class="error-desc">平台推荐使用：谷歌、搜狗、百度浏览器</div>
	   <!-- <div class="error-handle">
	   		  <van-button to="/home" type="info" size="normal" color="linear-gradient(to right, #00ffe4, #005db4)" :block="true" @click="goBack">返回</van-button>
	   </div> -->
  </div>
</template>

<script>
export default {
	created() {
		let _this = this;
		let device = this.$utils.isIphoneOrAndroid();
		console.log('device',device);
		if(device!='pc'){
			_this.$router.push('login');
		}
	},
	methods: {
	  goBack(){
		  this.$router.replace('login');
	  }
	}
}
</script>
