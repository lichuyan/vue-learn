<!--<template functional >-->
<!--    <div>-->
<!--        <h1> render</h1>-->
<!--    </div>-->
<!--</template>-->

<script>
    export default {
        name: "render",
        mounted() {

        },
        /**
         * render: 渲染函数
         * 参数: createElement
         * 参数类型: Function
         */
        render: function (createElement) {
            return createElement(
                // 1. 要渲染的标签名称：第一个参数【必需】
                'div',
                // 2. 1中渲染的标签的属性，详情查看文档：第二个参数【可选】
                {
                    style: {
                        color: 'red',
                        border: '1px solid #ccc'
                    },
                    /*给div绑定事件*/
                    on: {
                        click: () => {
                            console.log('点击事件')
                        }
                    },
                },
                this.value,
                // 3. 1中渲染的标签的子元素数组：第三个参数【可选】
                // [
                //     'text',   // 文本节点直接写就可以
                //     _this.$slots.default,  // 所有不具名插槽，是个数组
                //     createElement('div', _header)   // createElement()创建的VNodes
                // ]
            )
        },
        data () {
            return {
                style: {
                    width: '200px',
                    height: '200px',
                    border: '1px solid #aaa'
                },
                value: 'component value'
            }
        }
    }
</script>

<style scoped>

</style>