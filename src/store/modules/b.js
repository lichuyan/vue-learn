const state={
    count:7
};

// 同步事务
const mutations={
    add(state,param){
        if(param){
            state.count+=param;
        }else {
            state.count++;
        }
    },
    reduce(state){
        state.count--;
    },
};

/*actions 执行提交actions--异步事务*/
const actions={
    add: ({ commit},param)=> {
        commit('add',param);
    },
    reduce:({commit})=>{
        commit('reduce')
    },
    hello: ({ commit, state, dispatch },param)=> {
        commit('add',param);
        console.log('=======',state);
        console.log('=======',param);
        commit('reduce',param)
        // 用来做一步操作
        dispatch('reduce',param)
    },
};


const getters = {

};

export default {
    namespaced:true, //命名空间
    state,
    mutations,
    actions,
    getters
}