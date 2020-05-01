
export default {
    data:function(){
        return{
            title:"李储岩"
        }
    },
    created: function () {
        this.hello()
    },
    methods: {
        hello: function () {
            console.log('hello from mixin!')
        }
    }

}