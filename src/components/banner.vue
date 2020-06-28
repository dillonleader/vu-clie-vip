<template>
  <div>
    <el-carousel indicator-position="outside" interval="4000">
      <el-carousel-item v-for="(item, index) in bannerList" :key="index">
          <a href="" :style="{'backgroundImage': 'url(' + item.img + ')'}">
            <img :src="item.img" alt="图片加载失败">
          </a>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
    data() {
        return {
            bannerList:[]
        }
    },
    created() {
        this.getBanner()
    },
    methods: {
        getBanner(){
            this.$axios.get('/banner').then((res, err) => {
                if(res.status == 200){
                    this.bannerList = res.data.ADADSR8G8W.items
                }else{
                    console.log(err);
                }
            })
        }
    },
};
</script>

<style lang="scss" scoped>
.el-carousel,.el-carousel__container,.el-carousel__container,.el-carousel__item{
    height: 360px !important;
}
</style>