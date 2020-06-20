<template>
    <div>
        <h1>comTwo组件</h1>
         <el-row><el-button type="success" @click="goFather">点击向父组件传值</el-button></el-row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                chilData: "来自子组件的数据"
            }
        },
        mounted() {
            
        },methods: {
             goFather() {
                this.$emit('chilEven',this.chilData)
            }
        },
    }
</script>

<style scoped>

</style>