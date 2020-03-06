module.exports = {
	configureWebpack: (config) => {
		/* if (process.env.NODE_ENV === 'production') {
			config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
		} */
	},
	configureWebpack: {
		externals: {
			"vue":"Vue",
			"jquery":"$",
			"echarts": "echarts"
		}
	},
	// baseUrl: './',
	publicPath: './',
	productionSourceMap: false,
	devServer: {
		port: 8086,
		proxy: {
			'/bflApp': {
				target: 'http://localhost:8001/',
				changeOrigin: true,
				pathRewrite: {
					'/bflApp': ''
				}
			},
			/* '/ms':{
			    target: 'https://www.easy-mock.com/mock/592501a391470c0ac1fab128',
			    changeOrigin: true
			} */
		}
	}
}
