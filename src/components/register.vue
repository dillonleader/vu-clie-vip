<template>
  <div class="register">
    <h2>注册</h2>
    <el-form
      :model="ruleForm"
      :rules="formVall"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="用户名" prop="user">
        <el-input v-model="ruleForm.user" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pwd">
        <el-input type="password" v-model="ruleForm.pwd" 
          show-password
          placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="cpwd">
        <el-input type="password" v-model="ruleForm.cpwd" 
          show-password
          placeholder="确认密码"></el-input>
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
    var confirmpwd = (rule,value,callback)=>{
      if(value === ''){
        callback(new Error('密码不能为空'))
      }else if(value!=this.ruleForm.pwd){
        callback(new Error('两次密码输入不一致'))
      }
      else{
        callback()
      }
    }
    return {
      ruleForm: {user:'',cpwd:'',pwd:''},
      formVall: {
        user: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {required: true,max: 10,min: 6,message: "用户名长度不正确",trigger: "blur"}
        ],
        pwd: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {required: true,max: 18,min: 6,message: "密码长度不正确",trigger: "blur"}
        ],
        cpwd: [{required: true,validator:confirmpwd,trigger: "blur"}]
      }
    };
  },
  methods: {
    register() {
      this.$axios
        .post("http://www.dillonl.cn:3000/regs", this.ruleForm)
        .then((res, err) => {
          if (res.data.code == 1) {
            this.$message({
              showClose: true,
              message: `恭喜${this.ruleForm.user}注册成功，快去登录吧！`,
              type: "success"
            });
          } else{
            this.$message({
              showClose: true,
              message: "注册失败",
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
    top: 120px;
    font-size: 30px;
    color: #03a9f4;
    transform: translate(-50%, 0);
  }
  .el-form {
    position: absolute;
    width: 450px;
    height: 134px;
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