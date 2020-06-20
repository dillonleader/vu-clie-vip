<template>
    <div>
        <h2>这是two组件{{ id }}</h2>
    <el-button type="primary" @click="go">点击嵌套路由</el-button>
    <comTwo @chilEven="parMeth"></comTwo>
    <h1>{{msg}}</h1>
    </div>
</template>

<script>
    import comTwo from '@/components/comTwo'
    export default {
        data() {
            return {
                id:'',
                msg:''
            }
        },
        created() {
            this.id = this.$route.params.id
        },
        mounted() {
            
        },
        methods: {
            go(){
            this.$router.push('/three/comOne')
            },
            parMeth(parData){
                this.msg = parData
            }
        },
        components:{
            comTwo
        }
    }
</script>

<style scoped>

</style>