<template>
    <div>
        <h1>{{title}}</h1>
    </div>
    
</template>

<script>
    import infoMixin from "./infoMixin";
    export default {
        name: "info",
        mixins: [infoMixin],
    }
</script>

<style scoped>

</style>