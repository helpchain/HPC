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
		    font-size: 10rem;
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
      <div class="error-code">4<span>0</span>4</div>
      <div class="error-desc">啊哦,您所访问的页面中途丢包了</div>
	  <div class="placeholderLine"></div>
	  <div class="error-desc">解决方案:过会儿再试</div>
      <div class="error-handle">
		  <van-button to="/home" type="info" size="normal" color="linear-gradient(to right, #00ffe4, #005db4)" :block="true">返回首页</van-button>
		  <div class="placeholderLine"></div>
		  <div class="placeholderLine"></div>
		  <van-button type="info" size="normal" color="linear-gradient(to right, #005db4, #00ffe4)" :block="true" @click="goBack">返回上一页</van-button>
      </div>
  </div>
</template>

<script>
export default {
  methods: {
      goBack(){
          this.$router.go(-1);
      }
  }
}
</script>
