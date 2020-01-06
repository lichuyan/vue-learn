<template>
    <div class="com">
        <slot name="a"></slot>
       child components
        {{name}}
        {{age}}
        <!--必须用emit  自定义了一个patch事件 父组件就可以直接使用patch事件了-->
        <button type="button" name="button" @click="$emit('patch',23)">发送到父组件</button>
        <!--组件尾部加一个插槽--加多个插槽时用name区分开，使用时也的加name-->
        <slot name="b"></slot>
    </div>

</template>

<script>
    export default {
        props:['age'],
        data(){
          return{
              name:'com'
          }
        },
        methods:{
        }
    }
</script>

<style>
</style>