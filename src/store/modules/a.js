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

const getters = {
    // 参数是state
    // theCount: state => {
    //     return state.money+9;
    // }

    theCount: state =>  state.money+9
};

export default {
    namespaced:true,
    state,
    mutations,
    actions,
    getters
}