import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    count: 1
}
 // 做什么
const mutations = {
    increment(state) {
        state.count++;
    },
    decrement(state) {
        state.count--;
    }
};
/*actions 执行提交-commit，然后state数据发生改变，继而vue组件改变*/
const actions={
    increment: ({commit})=> {
        commit('increment')
    },
    decrement:({commit})=>{
        commit('decrement')
    }
}
export default  new Vuex.Store({
    state,
    mutations,
    actions
})