<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// @import '@/assets/scss/variable.scss';
@import '~@/assets/scss/variable.scss';
.numberGrowBox{
  transform: translateZ(0);
  .numberGrow {
	// color: $main-adorn-color;
    display: block;
  }
}
</style>
<template>
	<div class="numberGrowBox">
	  <span ref="numberGrow" :data-time="time" class="numberGrow" :data-value="value">0</span>
	</div>
</template>

<script>
// import { Button } from 'vant';
// import Button from 'vant/lib/button';
// import 'vant/lib/button/style';
export default {
	props: {
	    time: {
	      type: Number,
	      default: 2
	    },
	    value: {
	      type: Number,
	      default: 0
	    }
	},
	mounted () {
	    this.numberGrow(this.$refs.numberGrow)
	},
	methods:{
		numberGrow (ele) {
			let _this = this
			let step = (_this.value * 60) / (_this.time * 1000)
			let current = 0
			let start = 0
			let t = setInterval(function () {
				start += step
				if (start > _this.value) {
					  clearInterval(t)
					  start = _this.value
					  t = null
				}
				if (current === start) {
					return
				}
				current = start.toFixed(2)
				ele.innerHTML = current.toString().replace(/(\d)(?=(?:\d{3}[+]?)+$)/g, '$1,')
			}, 10)
		}
	}
}
</script>
