// import Vue from 'vue';
import Vuex from 'vuex';
// import * as actions from './actions';
// import * as mutations from './mutations';
// import * as getters from './getters';
Vue.use(Vuex);
const state={//要设置的全局访问的state对象
    fullscreen: false
};
const getters = {//实时监听state值的变化(最新状态)
    getFullscreen(state) {//承载变化的showFooter的值
       return state.fullscreen
    }
};
const mutations = {
    setFullscreen(state,fullscreen){//同上，这里面的参数除了state之外还传了需要增加的值fullscreen
       state.fullscreen = fullscreen;
    }
};
const actions = {
    setFullscreen(context,fullscreen){//同上注释，fullscreen为要变化的形参
        context.commit('setFullscreen',fullscreen)
    }
};
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});
