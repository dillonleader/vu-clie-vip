<template>
  <div>
    <ul class="nav-list">
      <li class="fication">
        <a href>
          <img src="https://b.appsimg.com/upload/momin/2018/09/10/150/1536548648745.png" />
          <span>商品分类</span>
          <div class="item-list">
              <div class="shops">女装/男装/内衣</div>
              <div class="shops">女鞋/男鞋/箱包</div>
              <div class="shops">护肤彩妆/个护</div>
              <div class="shops">运动户外</div>
              <div class="shops">家电数码</div>
              <div class="shops">母婴童装</div>
              <div class="shops">手表配饰</div>
              <div class="shops">居家用品</div>
              <div class="shops">唯品生活</div>
              <div class="shops">唯品国际/唯品奢</div>
              <div class="shops">医药健康</div>
          </div>
        </a>
      </li>
      <router-link to='/home/sixhund' tag="li">
        <a href>618来了</a>
      </router-link>
      <router-link to="/home/crayrobb" tag="li">
        <a href>最后疯抢</a>
      </router-link>
      <router-link to="" tag="li">
        <a href>唯品快枪</a>
      </router-link>
      <router-link to="" tag="li">
        <a href>女装</a>
      </router-link>
      <router-link to="" tag="li">
        <a href>母婴</a>
      </router-link>
      <router-link to="" tag="li">
        <a href>家电</a>
      </router-link>
      <router-link to="" tag="li">
        <a href>国际</a>
      </router-link>
      <router-link to="" tag="li">
        <a href>美妆</a>
      </router-link>
      <router-link to="" tag="li">
        <a href>鞋包</a>
      </router-link>
      <router-link to="" tag="li">
        <a href>男装</a>
      </router-link>
      <router-link to="" tag="li">
        <a href>运动</a>
      </router-link>
      <li class="more">
        <a href>更多</a>
        <div class="more-hov">
          <a href="">家居</a>
          <a href="">生活</a>
          <a href="">配饰</a>
          <a href="">唯品·奢侈</a>
          <a href="">扶贫</a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  created() {
      
  },
  mounted() {
     $('.item-list').hide()
      $('.fication').mouseover(function (){
          $('.item-list').stop().slideDown()
      })
      $('.fication').mouseout(function (){
          $('.item-list').stop().slideUp()
      })
      
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.nav-list {
  width: 100%;
  height: 45px;
  margin-top: 25px;
  .fication {
    position: relative;
    width: 156px;
    height: 100%;
    background: #f10180;
    .item-list{
        width: 100%;
        position: absolute;
        top: 45px;
        left: 0;
        z-index: 99;
        background: #f10180;
        & div:hover{
            background: #fff;
            color: #f10180;
        }
    }
    a {
      display: block;
      padding: 0 15px;
      color: #fff;
      img {
        display: block;
        margin-left: 15px;
        margin-top: 7px;
        float: left;
      }
      span {
        display: block;
        float: left;
        line-height: 45px;
        padding-left: 5px;
      }
    }
  }
  li {
    float: left;
    line-height: 45px;
        text-align: center;
    &>a{display: block;width: 100%;height: 100%;}
   
    &:nth-child(n + 2):hover>a {
      color: #f10180;
    }
     &:nth-child(n+2){
        padding: 0 15px;
    }
  }
  .more {
    position: relative;
    text-align: center;
    padding: 0 35px !important;
    &:hover{
        box-shadow: 0 -2px 3px 0 rgba(0,0,0,.06);
    }
    &:hover .more-hov{
        display: block;
    }
    .more-hov {
      position: absolute;
      display: none;
      top: 45px;
      left: 0;
      width: 102px;
      height: 230px;
      background: #fff;
      z-index: 99;
      box-shadow: 0 2px 3px 0 rgba(0,0,0,.06);
      font-size: 14px;
      a{
          display: block;
          font-size: 16px;
          color: #000;
          &:hover{
              color: #f10180;
          }
      }
      
    }
  }
}
</style>