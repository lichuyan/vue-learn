import Vue from 'vue'
// APP.vue是默认的启动的页面，这里不用它作为启动页面了
import App from './App.vue'
// 改成路由的方式启动页面
// import router from './router';
// import store from './store'
Vue.config.productionTip = false;
/*所以这里的store是全局变量了*/
import store from './store/index'

new Vue({
  render: h => h(App),
 // router
    store
}).$mount('#app');  // 自动挂载在app下的
