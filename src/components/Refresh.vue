<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// @import '@/assets/scss/variable.scss';
@import '~@/assets/scss/variable.scss';
.refreshBox{
	position: fixed;
	right: $right;
	bottom: 60px;
	background-color: $main-adorn-color;
	width:$fixed-btn-width;
	height:$fixed-btn-width;
	line-height:$fixed-btn-width;
	border-radius:$fixed-btn-width;
	text-align: center;
	z-index:0;
	.iconfont-refresh{
		color: white;
		font-size: 24px;
	}
}
</style>
<template>
  <div ref="refreshBox" class="refreshBox" @click="handleRefresh">
  	  <i class="iconfont iconfont-refresh"></i>
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
		
	},
	methods:{
		//刷新
		handleRefresh(){
			// console.log("handleRefresh")
			this.$emit('refreshEvent')
			// this.$router.go(0)
		},
	}
}
</script>
