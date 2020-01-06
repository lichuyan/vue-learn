<template>
    <div class="events">
        <button type="button" name="button" v-on:click="msg('hello word', $event)">test</button>
        <div class="parent" @click="parent()">
            <p>parent</p>
            <p>parent</p>
            <p>parent</p>
            <div class="child" @click.stop="child()">
                child
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        methods:{
            msg:function (a, event) {
                console.log(a);
                console.log(event);
                if(event){
                    event.preventDefault();
                }
            },
            parent:function () {
                console.log('parent');
            },
            child(){
                console.log('child');
            }
        }
    }
</script>

<style>
</style>