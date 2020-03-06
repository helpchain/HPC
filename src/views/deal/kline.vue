<style lang="scss" scoped>
	@import '~@/assets/scss/index.scss';
	.klinePage{
		@include pageHaveHeight4Scroll();
		.klineBox {
			.kline{
				width: 100%;
				height: 300px;
			}
		}
	}
	
</style>
<template>
	<div class="klinePage">
		<m-header>
			<i class="leftBox iconfont iconfont-left-arrow" @click="back"></i>
			<div class="text">
				K线图
			</div>
			<i class="rightBox icon"></i>
		</m-header>
		<div class="klineBox">
			<div class="placeholderLine20"></div>
			<div class="kline" id="kline"></div>
		</div>
		<!-- </van-pull-refresh> -->
		<!-- <m-refresh @refreshEvent="refreshEvent"></m-refresh> -->
	</div>
</template>

<script>
	import mHeader from '@/components/Header.vue';
	// import mRefresh from '@/components/Refresh.vue';
	// import mFullscreen from '@/components/Fullscreen.vue';
	export default {
		name: 'kline',
		data() {
			return {
				dataArr:''
			}
		},
		components: {
			mHeader
		},
		mounted() {
			let _this = this;
			this.toScrollTop();
			// 基于准备好的dom，初始化echarts实例 写在 mounted（）里面
			/* _this.$nextTick(() => { 
				_this.myEcharts();
				_this.myKLineEcharts();
			}); */
			if(_this.$cookies.get("hasKLData")){
				let dataArr = JSON.parse(localStorage.getItem("klineData"));
				_this.getKLineDataArr(dataArr);
			}else{
				_this.getAssistStatisticsBookList4Num();
			}
		},
		methods: {
			back(){
				this.$router.go(-1);
			},
			toScrollTop(){
				window.scrollTo(0,0);
				document.body.scrollTop = 0;
				document.documentElement.scrollTop = 0;
			},
			getAssistStatisticsBookList4Num(){
				let _this = this;
				//获取最近30条价格信息
				let params = {
					num: 30
				}
				_this.$ajax.ajax(_this.$api.getAssistStatisticsBookList4Num, 'GET', params, function(res) {
					if (res.code == _this.$api.CODE_OK) {
						let dataArr = res.data;
						_this.$cookies.set("hasKLData",1,_this.$cookies.cookiesTime8h);
						localStorage.setItem("klineData",JSON.stringify(dataArr));
						_this.getKLineDataArr(dataArr);
					}
				})
			},
			getKLineDataArr(dataArr){
				let _this = this;
				let dataList = [];
				dataArr.forEach((item)=>{
					let itemArr = []; 
					itemArr.push(_this.$utils.getDate(item.createTime));
					itemArr.push(item.open);
					itemArr.push(item.close);
					itemArr.push(item.lowest);
					itemArr.push(item.highest);
					itemArr.push(item.transactionNum24);
					dataList.push(itemArr)
				})
				let data = _this.$utils.splitData(dataList);
				// _this.dataList = dataList;
				console.log("data",data);
				_this.myKLineEcharts(data);
			},
			myKLineEcharts(data){
				let _this = this;
				let myChart = echarts.init(document.getElementById("kline"));
				let colorList = ['#c23531','#2f4554','#61a0a8','#d48265','#91c7ae','#749f83','#ca8622','#bda29a','#6e7074','#546570','#c4ccd3'];
				let labelFont = 'bold 12px Sans-serif';
				//h5
				let dates = data.categoryData;
				let values = data.values;
				let volumes = data.volumes;
				let dataMA5 = _this.$utils.calculateMA(5, values);
				let dataMA10 = _this.$utils.calculateMA(10, values);
				let dataMA20 = _this.$utils.calculateMA(20, values);
				let option = {
				    animation: false,
				    color: colorList,
				    title: {
				        left: 'center',
				        text: 'HPC帮扶链'
				    },
				    legend: {
				        top: 30,
				        data: ['日K', 'MA5', 'MA10', 'MA20', 'MA30']
				    },
				    tooltip: {
				        trigger: 'axis',
				        transitionDuration: 300,
				        confine: true,
				        bordeRadius: 4,
				        borderWidth: 1,
				        borderColor: '#333',
				        backgroundColor: 'rgba(0, 132, 0, 0.9)',
				        textStyle: {
				            fontSize: 12,
				            color: '#ffffff'
				        },
				        position: function (pos, params, el, elRect, size) {
				            var obj = {
				                top: 60
				            };
				            obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 5;
				            return obj;
				        }
				    },
				    axisPointer: {
				        link: [{
				            xAxisIndex: [0, 1]
				        }]
				    },
				    dataZoom: [{
				        type: 'slider',
				        xAxisIndex: [0, 1],
				        realtime: false,
				        start: 20,
				        end: 100,
				        top: 65,
				        height: 20,
				        handleIcon: 'M10.7,11.9H9.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
				        handleSize: '120%'
				    }, {
				        type: 'inside',
				        xAxisIndex: [0, 1],
				        start: 40,
				        end: 70,
				        top: 30,
				        height: 20
				    }],
				    xAxis: [{
				        type: 'category',
				        data: dates,
				        boundaryGap : false,
				        axisLine: { lineStyle: { color: '#777' } },
				        axisLabel: {
				            formatter: function (value) {
				                return echarts.format.formatTime('MM-dd', value);
				            }
				        },
				        min: 'dataMin',
				        max: 'dataMax',
				        axisPointer: {
				            show: true
				        }
				    }, {
				        type: 'category',
				        gridIndex: 1,
				        data: dates,
				        scale: true,
				        boundaryGap : false,
				        splitLine: {show: false},
				        axisLabel: {show: false},
				        axisTick: {show: false},
				        axisLine: { lineStyle: { color: '#777' } },
				        splitNumber: 20,
				        min: 'dataMin',
				        max: 'dataMax',
				        axisPointer: {
				            type: 'shadow',
				            label: {show: false},
				            triggerTooltip: true,
				            handle: {
				                show: true,
				                margin: 30,
				                color: '#B80C00'
				            }
				        }
				    }],
				    yAxis: [{
				        scale: true,
				        splitNumber: 2,
				        axisLine: { lineStyle: { color: '#777' } },
				        splitLine: { show: true },
				        axisTick: { show: false },
				        axisLabel: {
				            inside: true,
				            formatter: '{value}\n'
				        }
				    }, {
				        scale: true,
				        gridIndex: 1,
				        splitNumber: 2,
				        axisLabel: {show: false},
				        axisLine: {show: false},
				        axisTick: {show: false},
				        splitLine: {show: false}
				    }],
				    grid: [{
				        left: 20,
				        right: 20,
				        top: 110,
				        height: 120
				    }, {
				        left: 20,
				        right: 20,
				        height: 40,
				        top: 260
				    }],
				    graphic: [{
				        type: 'group',
				        left: 'center',
				        top: 70,
				        width: 300,
				        bounding: 'raw',
				        children: [{
				            id: 'MA5',
				            type: 'text',
				            style: {fill: colorList[1], font: labelFont},
				            left: 0
				        }, {
				            id: 'MA10',
				            type: 'text',
				            style: {fill: colorList[2], font: labelFont},
				            left: 'center'
				        }, {
				            id: 'MA20',
				            type: 'text',
				            style: {fill: colorList[3], font: labelFont},
				            right: 0
				        }]
				    }],
				    series: [{
				        name: 'Volume',
				        type: 'bar',
				        xAxisIndex: 1,
				        yAxisIndex: 1,
				        itemStyle: {
				            color: '#7fbe9e'
				        },
						tooltip: {
							formatter: function (param) {
								param = param[0];
								return [
									'Date: ' + param.name + '<hr size=1 style="margin: 3px 0">',
									'Open: ' + param.data[0] + '<br/>',
									'Close: ' + param.data[1] + '<br/>',
									'Lowest: ' + param.data[2] + '<br/>',
									'Highest: ' + param.data[3] + '<br/>',
								].join('');
							}
						},
				        emphasis: {
				            itemStyle: {
				                color: '#140'
				            }
				        },
				        data: volumes
				    }, {
				        type: 'candlestick',
				        name: '日K',
				        data: values,
				        itemStyle: {
				            color: '#ef232a',
				            color0: '#14b143',
				            borderColor: '#ef232a',
				            borderColor0: '#14b143'
				        },
				        emphasis: {
				            itemStyle: {
				                color: 'black',
				                color0: '#444',
				                borderColor: 'black',
				                borderColor0: '#444'
				            }
				        }
				    }, {
				        name: 'MA5',
				        type: 'line',
				        data: dataMA5,
				        smooth: true,
				        showSymbol: false,
				        lineStyle: {
				            width: 1
				        }
				    }, {
				        name: 'MA10',
				        type: 'line',
				        data: dataMA10,
				        smooth: true,
				        showSymbol: false,
				        lineStyle: {
				            width: 1
				        }
				    }, {
				        name: 'MA20',
				        type: 'line',
				        data: dataMA20,
				        smooth: true,
				        showSymbol: false,
				        lineStyle: {
				            width: 1
				        }
				    }]
				};
				myChart.setOption(option);
			},
		}
	}
</script>


