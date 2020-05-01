<template>
    <div class="a">
        <!--第一个money是对应的模块-->
        page a {{$store.state.money.money}}
        <button type="button" name="button" @click="add">增加</button>
        <button type="button" name="button" @click="reduce">删减</button>

        <h3>Count is {{ theCount }}</h3>

    </div>
</template>

<script>

    import {mapActions,mapGetters} from 'vuex';
    export default {

        methods: {
            // 使用命名空间
            ...mapActions('money',
                ['add','reduce']),
        },
        computed: {
            ...mapGetters('money',[
                'theCount'
            ]),
        },
        mounted() {
            console.log(this.theCount)
        }
    }
</script>

<style>
</style>