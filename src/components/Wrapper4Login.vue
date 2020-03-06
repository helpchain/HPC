<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// @import '@/assets/scss/variable.scss';
@import '~@/assets/scss/variable.scss';
.body {
  position: absolute;
  top: 0;
  width: 100%;
  bottom: $footerHeight;
  background: $main-bg-color;
  overflow-y: scroll;
}
</style>
<template>
  <transition name="van-fade">
    <router-view></router-view>
  </transition>
</template>

<script>
export default {
	props: {
		msg: String
	},
	data() {
		return {
			
		}
	},  
	components:{
	},
	watch:{
		$route(now,old){
			let _this = this;
			_this.$utils.scrollTop();
			// console.log("scrollTop");
		},
	},
	created() {
		let _this = this;
		
	},
	methods:{
		touchStart:function(ev) {
			let _this = this;
			ev = ev || event;
			console.log(ev.targetTouches);
		},
		//刷新
		handleRefresh(){
			this.$router.go(0)
		}
	}
}
</script>
