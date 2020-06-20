<template>
  <div id="app">
    <!-- <a href="/">one</a>
    <a href="/two">two</a>
    <a href="/three">three</a> -->

    <!-- 在使用 a 标签进行路由跳转的时候， a标签自动刷新页面 -->

    <!-- <router-link to="/" exact>one</router-link> -->
    <!-- 这里的 exact 是取消默认的样式 -->
    <!-- <router-link to="/two" >two</router-link> -->
    <!-- <router-link to="/three" >three</router-link> -->
   <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.router-link-active{
  color: #f0f;
}
.activeClass{
  color: #0f0;
}
</style>
