const state={
    money:1
};

const mutations={
    add(state){
        state.money++;
    },
    reduce(state){
        state.money--;
    }
};
/*actions 执行提交actions*/
const actions={
    add: ({commit})=> {
        commit('add')
    },
    reduce:({commit})=>{
        commit('reduce')
    }
};
export default {
    namespaced:true,
    state,
    mutations,
    actions
}