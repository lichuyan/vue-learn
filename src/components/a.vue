<template>
    <div class="a">
        <!--第一个money是对应的模块-->
        page a {{$store.state.money.money}}
        <button type="button" name="button" @click="add">增加</button>
        <button type="button" name="button" @click="reduce">删减</button>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';
    export default {
        methods:mapActions('money',['add','reduce'])
    }
</script>

<style>
</style>