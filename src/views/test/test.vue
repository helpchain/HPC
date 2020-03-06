<style scoped lang="scss">
	@import '~@/assets/scss/index.scss';
	.test{
		@include pageBlackBG();
		.matrix{
			position: relative;
		}
		.content{
			position: absolute;
			left: 0;
			top: 0;
			color: white;
			z-index: 1001;
		}
	}
</style>
<template>
	<div class="test">
		<canvas class="matrix" id="matrix">
		</canvas>
		<div class="content">
			了看得见啊看来大家阿斯利康
			<br>
			爱睡懒觉的阿拉斯加大深刻理解打开了时间的
		</div>
	</div>
</template>

<script>
import mHeader from '@/components/Header.vue';

export default {
	data() {
		return {
			
		}
	},
	components:{
	    mHeader
	},
	mounted() {
		let _this = this;
		_this.startCodeRain();
	},
	methods:{
		startCodeRain(){
			var matrix = document.getElementById("matrix");
			var context = matrix.getContext("2d");
			matrix.height = window.innerHeight;
			matrix.width = window.innerWidth;
			var drop = [];
			var fontSize = 12; //字体
			var columns = matrix.width / fontSize;
			for (var i = 0; i < columns; i++) {
			    drop[i] = 1;
			}
			function drawMatrix() {
			    context.fillStyle = "rgba(0, 0, 0, 0.1)";
			    context.fillRect(0, 0, matrix.width, matrix.height);
			    context.fillStyle = "green";
			    context.font = fontSize + "px";
			    for (var i = 0; i < columns; i++) {
			        context.fillText(Math.floor(Math.random() * 2), i * fontSize, drop[i] * fontSize);
			        if (drop[i] * fontSize > (matrix.height * 2 / 3) && Math.random() > 0.85){
						drop[i] = 0;
					}
			        drop[i]++;
			    }
			}
			setInterval(drawMatrix, 50);//按照指定间隔一直执行方法
		}
	}
}
</script>
