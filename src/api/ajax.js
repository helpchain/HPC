// import Vue from 'vue';
// import $ from 'jquery'
// import http from './public'
import qs from 'qs'
import router from '@/router.js'
import VueCookies from 'vue-cookies';
import { Dialog } from 'vant'
// import { getCookie } from '../assets/js/utils.js'
// import axios from 'axios'
// import http from './service'
// import Vue from 'vue';
// import VueCookies from 'vue-cookies';
// Vue.use(VueCookies);

export default {
	getJson(url, doSuccess) {
		$.getJSON(url, function(res) {
			if (typeof doSuccess == "function") {
				doSuccess(res);
			}
		})
	},
	ajax(url, method, params, doSuccess, doComplete) {
		let _this = this;
		let queryAjax = $.ajax({
			url: url,
			type: method,
			timeout: 10000,
			// processData: true,
			// contentType: 'application/json',
			// dataType:'json',
			// data : JSON.stringify(params), 
			data: method == 'GET' ? qs.stringify(params) : qs.stringify(params),
			beforeSend: function(XMLHttpRequest) {
				// XMLHttpRequest.setRequestHeader("token", localStorage.getItem('token'));
				// that.progressDialog = true;
				let token = VueCookies.get('token');
				// //console.log("cookie token in complete", token);
				if(token){
					 XMLHttpRequest.setRequestHeader('token', token);
				}else{
					// alert("登录状态已过期,请重新登录");
					// router.replace('login');
				}
				// localStorage.getItem('token') ? XMLHttpRequest.setRequestHeader('token', localStorage.getItem('token')) : '';
			},
			complete: function(XMLHttpRequest,status) {
				console.log('status',status)
				console.log('complete_XMLHttpRequest',XMLHttpRequest.responseJSON)
				if(XMLHttpRequest.responseJSON&&XMLHttpRequest.responseJSON.code=='登录已过期，请重新登录') {
					Dialog.alert({
						title: '温馨提示',
						message: XMLHttpRequest.responseJSON.message
					}).then(() => {
						router.replace('/login');
					});
				}else if(status=='timeout' || status=='error') {//超时,status还有success,error等值的情况
					//queryAjax.abort();
					Dialog.alert({
						title: '温馨提示',
						message: '网络不稳定或系统维护,请过会儿再试'
					}).then(() => {
						router.replace({
							path: '/maintain'
						});
					});
				}
				if (typeof doComplete == "function") {
					doComplete(status);
				}
			},
			success: function(res) {
				if (typeof res == 'string') {
					res = JSON.parse(res);
				}
				if (typeof doSuccess == "function") {
					doSuccess(res);
				}
			},
			error: function(res) {
				// //console.log("errorInfo", res);
				if(res.status == 500){
					// alert(res.responseJSON.message);
					Dialog.alert({
					  title: '温馨提示',
					  message: res.responseJSON.message
					}).then(() => {
					  // on close
					  //router.replace('/login');
					  //_this.$router.push('/login');
					});
					// router.replace({
					// 	path: '/login'
					// });
				}
			}
		});
	},
	ajax4List(url, method, params, doSuccess) {
		var that = this;
		$.ajax({
			url: url,
			type: method,
			timeout: 10000,
			// processData: true,
			contentType: 'application/json',
			dataType:'json',
			// data : JSON.stringify(params), 
			data: method == 'GET' ? qs.stringify(params) : (params),
			beforeSend: function(XMLHttpRequest) {
				// XMLHttpRequest.setRequestHeader("token", localStorage.getItem('token'));
				// that.progressDialog = true;
				let token = VueCookies.get('token');
				// //console.log("cookie token in complete", token);
				token ? XMLHttpRequest.setRequestHeader('token', token) : '';
			},
			complete: function(XMLHttpRequest,status) {
				if(status=='timeout') {//超时,status还有success,error等值的情况
					Dialog.alert({
						title: '温馨提示',
						message: '哎呦网络不好,请过会儿再试'
					}).then(() => {
						
					});
				}
				if (typeof doComplete == "function") {
					doComplete(status);
				}
			},
			success: function(res) {
				//console.log(res, "====success====")
				if (typeof res == 'string') {
					res = JSON.parse(res);
				}
				if (typeof doSuccess == "function") {
					doSuccess(res);
				}
			},
			error: function(res) {
				//console.log("error", res);
				if(res.status == 500){
					alert(res.responseJSON.message);
					// router.replace({
					// 	path: '/login'
					// });
				}
			}
		});
	}
}
