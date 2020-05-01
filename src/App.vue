<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <HelloWorld msg="helloword"/>
        <events></events>
        <!--静态
        <com age="19"></com>-->
        <!--动态-->
        <com :age="age" @patch="send">
      <!--      动态向子组件里加东西，子组件里本身没有的-->
            <h1 slot="a">我要加东西</h1>
            <h1 slot="b">我要加东西2</h1>
        </com>
        <!--<myVuex/>-->
        <pagea/>
        <pageb/>
        <render></render>
        <info></info>
        <request></request>
    </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue'
    import './components/n';
    import events from './components/events.vue';
    import com from  './components/com.vue';
//    import myVuex from './components/vuex.vue';
    import pagea from './components/a.vue';
    import pageb from './components/b.vue';
    import render from "./components/render";
    import info from "./mixin/info";
    import request from "./common/request";

    export default {
        name: 'app',
        components: {
            HelloWorld,
            events,
            com,
//            myVuex,
            pagea,
            pageb,
            render,
            info,
            request
        },
        data(){
            return{
                age:12
            }
        },
        methods:{
           send:function (ag) {
               console.log(ag);
               this.age= this.age+3;
           }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
