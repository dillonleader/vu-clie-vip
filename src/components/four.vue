<template>
  <div>
    <h1>
      这是four组件
      <i>{{ name }}</i>
    </h1>
    <el-button type="primary" @click="go">点击params路由传参</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: ""
    };
  },
  created() {
    this.name = this.$route.query.user;
    console.log(this.$route);
  },
  methods: {
    go() {
      // this.$router.push("/two/123");
      this.$router.push({
        name: "two",
        params: {
          id: 147
        }
      });
    }
  }
};
</script>

<style scoped>
</style>