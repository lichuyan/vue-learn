/*路由配置*/
import Vue from 'vue';
import VueRouter from 'vue-router';
import pageA from './pages/a.vue';
import pageB from './pages/b.vue';

Vue.use(VueRouter);

const routes = [
    // 路径（随便起）-- 对应的路径
    { path: '/pagea', component: pageA },
    // 将pagea设置为默认
    // { path: '/', component: pageA },
    { path: '/pageb', component: pageB }
]

// 必须经过实例化
const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
});

// 导出
export default router