<template>
    <div>
        <h1>comOne子组件</h1>
        <div>
            <h3>{{goChilData.name}}</h3>
            <h4>{{goChilData.msg}}</h4>
        </div>
         <el-row><el-button type="success" @click="goFather">点击向父组件传值</el-button></el-row> 
    </div>
</template>

<script>
    export default {
        data() {
            return {
                ChilData:'子组件的数据',
            }
        },
        props: {
            goChilData: {
                type: Object,
            }
        },
        created() {
            this.kuwo()
        },
        mounted() {
        },
        methods: {
            goFather(){
                this.$emit('chilEven', this.ChilData)
            },
            kuwo(){
                
            }
        },

    }
</script>

<style scoped>

</style>    