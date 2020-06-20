<template>
  <div class="register">
    <h2>注册</h2>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="ruleForm.email"></el-input>
      </el-form-item>
      <el-form-item label="icon" prop="icon">
        <el-input v-model="ruleForm.icon"></el-input>
      </el-form-item>
      <el-form-item label="昵称" prop="nickname">
        <el-input v-model="ruleForm.nickname"></el-input>
      </el-form-item>
      <el-form-item label="用户名" prop="username">
        <el-input v-model="ruleForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="个性签名" prop="note">
        <el-input type="textarea" v-model="ruleForm.note"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="register" type="primary">注册</el-button>
        <el-button type="success" @click="goLogin">去登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        email: "",
        icon: "",
        nickname: "",
        username: "",
        password: "",
        note: ""
      },
      rules: {
        email: [
          { required: true, message: "请输入邮箱地址", trigger: "blur" },
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: "blur"
          }
        ],
        icon: [
          { required: true, message: "请输入icon", trigger: "blur" },
          { min: 3, max: 8, message: "长度在 3 到 8 个字符", trigger: "blur" }
        ],
        nickname: [
          { required: true, message: "请输入昵称", trigger: "blur" },
          { min: 3, max: 10, message: "长度在 3 到 10 个字符", trigger: "blur" }
        ],
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 10, message: "长度在 3 到 10 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 8,
            max: 19,
            message: "长度不符合，建议大于8个字符",
            trigger: "blur"
          }
        ],
        note: [
          { required: true, message: "请填写个性签名", trigger: "blur" },
          { min: 6, max: 50, message: "长度在 6 到 50 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    register() {
      this.$axios
        .post("/vip/admin/register", this.ruleForm)
        .then((res, err) => {
          if (res.data.code == 200) {
            // console.log(res);
            this.$message({
              showClose: true,
              message: `恭喜${this.ruleForm.nickname}注册成功，快去登录吧！`,
              type: "success"
            });
          } else if (res.data.code == 201) {
            this.$message({
              showClose: true,
              message: "注册失败,该邮箱已经注册过了,请换一个邮箱注册!!!",
              type: "error"
            });
          } else if (res.data.code == 401) {
            this.$message({
              showClose: true,
              message: "未经授权",
              type: "error"
            });
          } else if (res.data.code == 403) {
            this.$message({
              showClose: true,
              message: "禁止访问",
              type: "error"
            });
          } else if (res.data.code == 404) {
            this.$message({
              showClose: true,
              message: "资源访问不到",
              type: "error"
            });
          } else {
            this.$message({
              showClose: true,
              message: "未知错误",
              type: "error"
            });
          }
        });
    },
    goLogin() {
      this.$router.push("/login");
    }
  }
};
</script>

<style lang="scss" scoped>
.register {
  width: 500px;
  height: 535px;
  position: relative;
  margin: 100px auto;
  border: 3px solid #f5f5f5;
  border-radius: 15px;
  h2 {
    position: absolute;
    left: 50%;
    font-size: 30px;
    color: #03a9f4;
    transform: translate(-50%, 0);
  }
  .el-form {
    position: absolute;
    width: 450px;
    height: 375px;
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