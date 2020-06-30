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
      <el-form-item label="用户名" prop="user">
        <el-input v-model="ruleForm.user"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pwd">
        <el-input type="password" v-model="ruleForm.pwd" autocomplete="off"></el-input>
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
        user: "",
        pwd: ""
      },
      rules: {
        user: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 10, message: "长度在 3 到 6 个字符", trigger: "blur" }
        ],
        pwd: [
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
      this.$axios.post("http://www.dillonl.cn:3000/login", this.ruleForm).then((res, err) => {
        console.log(res);
        if (this.ruleForm.user == "" && this.ruleForm.pwd == "") {
          this.$message({ message: `用户名和密码不能为空`, type: "error" });
        } else {
          if (res.data.code == 1) {
            this.$message({ message: `登录成功`, type: "success" });
            localStorage.setItem("regkey", res.data.token)
            this.$router.push("/home/sixhund");
          } else{
            this.$message({ message: `用户名或密码错误`, type: "error" });
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