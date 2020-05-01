<template>
    <div>
        <button type="button" @click="getData">搜索</button>
        <router-link to="/pagea">Go to Foo</router-link>

    </div>
    
</template>

<script>
    // 需要把http放到main.js下，成为全局的变量，这里就可以直接使用了

    export default {
        name: "request",
        data(){
            return{
                searchParams:{
                    name:"lichuyan",
                    age:13
                },
                pageNum: 1
            }
        },
        methods: {
            getData(){
                this.$http.get({
                    url: '/case/query',
                    data: {
                        pageNum:this.pageNum,
                        ...this.searchParams
                    }
                }, false).then(data => {
                    console.log('服务器返回的数据是--------',data)
                }).catch(err => {
                    console.log('请求的失败的数据是--------',err)
                });
            }
        },
    }
</script>

<style scoped>

</style>