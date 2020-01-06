<template>
<div class="vuex">
    vuex{{$store.state.count}}
    <button type="button" name="button" @click="increment">增加</button>
    <button type="button" name="button" @click="decrement">删除</button>
</div>
</template>

<script>
    import {mapActions} from 'vuex'
    export default {
       /* 做了事件关联*/
        methods:mapActions([
            'increment',
            'decrement'
        ])
    }
</script>

<style>
</style>