<template>
    <div class="b">
        page b {{$store.state.count.count}}
        <!--外面改变state，通过传参方式进行 add(2)-->
        <button type="button" name="button" @click="add(2)">增加</button>
        <button type="button" name="button" @click="reduce">删减</button>
    </div>

</template>

<script>
    import {mapActions} from 'vuex';
    export default {
        methods:mapActions('count',['add','reduce'])
    }
</script>

<style>
</style>