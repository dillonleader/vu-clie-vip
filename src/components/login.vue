<template>
  <div class="login">
    <h2>登录</h2>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="用户名" prop="username">
        <el-input v-model="ruleForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="submitForm" type="primary">登录</el-button>
        <el-button type="success" @click="goRegister">去注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 10, message: "长度在 3 到 6 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 8,
            max: 19,
            message: "长度不符合，建议大于8个字符",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    submitForm() {
      this.$axios.post("/vip/admin/login", this.ruleForm).then((res, err) => {
        if (this.ruleForm.username == "" && this.ruleForm.password == "") {
          this.$message({ message: `用户名和密码不能为空`, type: "error" });
        } else {
          if (res.data.code == 200) {
            this.$message({ message: `登录成功`, type: "success" });
            let tokens = "Bearer " + res.data.data.token;
            this.$store.commit("changeLogin", tokens);
            this.$axios.get("/vip/admin/info").then(res => {
              this.$store.commit("userStatus", res.data.data);
              console.log(res.data.data);
            });
            this.$router.push("/home/sixhund");
          } else if (res.data.code == 404) {
            this.$message({ message: `用户名或密码错误`, type: "error" });
          } else {
            console.log(err);
            this.$message({ message: `未知错误`, type: "error" });
          }
        }
      });
    },
    goRegister() {
      this.$router.push("/register");
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  width: 500px;
  height: 500px;
  position: relative;
  margin: 100px auto;
  border: 3px solid #f5f5f5;
  border-radius: 15px;
  h2 {
    position: absolute;
    top: 70px;
    left: 50%;
    font-size: 30px;
    color: #03a9f4;
    transform: translate(-50%, 0);
  }
  .el-form {
    position: absolute;
    width: 450px;
    height: 180px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    .el-form-item {
      width: 410px;
      .el-button--primary {
        margin-left: 55px;
      }
    }
  }
}
</style>