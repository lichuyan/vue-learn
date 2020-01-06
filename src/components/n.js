// 自定义指令    这个功能没有上升到组件的过程 但是也很复杂
import Vue from 'vue'
Vue.directive('n',{
 // 这个指令在什么时候做什么事情 -定义钩子函数官网有写5个，后2用的不多
    bind:function (el,binding) {
        console.log('ddddddddddd',el); // 绑定在div上了 所以el为div  
        el.textContent=Math.pow(binding.value,2);
    },
    update:function (el,binding) {
        console.log(el);
        el.textContent=Math.pow(binding.value,2);
    },
    inserted:function (el,binding) {
        console.log(el);
        el.textContent=Math.pow(binding.value,2);
    }
});