// import * as pageApi from '@/api/pageApi';

// 获取页面配置信息
// export const loadPageConfig = ({ commit }) => {
//   pageApi.getPageConfig().then(res => {
//     console.log(res.result);
//     commit('SET_PAGE_INFO', res.result);
//   });
// };
export const setFullscreen = ({ commit },fullScreen) => {   
	//同上注释，num为要变化的形参
	commit('SET_FULLSCREEN',fullScreen)
};
// export const setFullscreen = ({ commit }) => {
//   commit('SET_FULLSCREEN', res.result);
// };