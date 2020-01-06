<template>
    <div class="hello">
        <h1>{{ msg }}  </h1>
        <div class="hello" v-bind:id="id">
            <p> {{ msg1 }}</p>
            <p v-html="msg1"></p>
        </div>
        <div>
            {{number+1}}
        </div>

        <!--指令-->
        <p v-if="seen">现在你看到我了</p>
        <p v-else>你失败了</p>

        <!--自定义指令使用-->
        <div v-n="4">
        </div>

        <!--计算属性-->
        <!--样式-->
        <div :class="[a1,a2]">
            我借你{{money}},你换我{{a}},还剩{{b}}
        </div>

        <div :class="{'test-1':a3,'test-2':a4}">
          style object
        </div>

     <!--   动态修改样式&#45;&#45;推荐-->
        <div :class=obj>
            直接传一个对象
        </div>

      <!--  为了让没有发生变化的节点复用，不用全部都更新.通过item指定为key来判断虚拟dom 需不需替换-->
        <ul>
            <li v-for="(item,index) in list" :key="item">
                {{index}}---{{item}}
            </li>
        </ul>

        <!--分组使用-->
        <ul>
            <template v-for="item in list" >
                <li :key="item+1">hello</li>
                <li :key="item">{{item}}</li>
            </template>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        // 传参入口，接收别人给的参数
        props: {
            msg: String
        },
        // mvvm据驱动模版
        data() {
            return {
                msg1: '<span style=\'color: red\'>hello word</span>',
                id:'txt',
                number:1,
                seen:false,
                money:100,
                a:12,
                a1:'test-1',
                a2:'test-2',
                a3:true,
                a4:true,
                obj:{'test-1':true,'test-2':true},
                list:['a','b','c','d']
            }
        },
        computed:{
            // 监听b
            b:function () {
                return this.money-this.a;
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
