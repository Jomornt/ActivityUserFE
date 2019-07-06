<template>
  <div class="wrapper">
    <div class="branch">
      <div>西瓜活动</div>
    </div>
    <div class="window">
      <div class="content">
        <div class="title">
            <div class="login">登录</div>
          <div>·</div>
          <router-link to="/register">
            <div class="register"> 注册</div>
          </router-link>
        </div>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
          <el-form-item prop="account">
            <el-input
              placeholder="请输入手机号"
              v-model="ruleForm.account"
              prefix-icon="el-icon-user-solid">
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              placeholder="请输入密码"
              v-model="ruleForm.password"
              prefix-icon="el-icon-lock"
              show-password>
            </el-input>
          </el-form-item>
          <el-form-item class="notify">
            <el-checkbox style="color:#999">记住我</el-checkbox>
            <span class="question">登陆遇到问题？</span>
          </el-form-item>
          <el-form-item>
            <div
              class="loginBtn"
              @click="submitForm">登陆</div>
          </el-form-item>
        </el-form>
        <el-divider style="width:50px">社交账号登陆</el-divider>
        <div class="loginIcon">
          <div class="sina"><img src="./sina.png" alt=""></div>
          <div class="wechat"><img src="./wechat.png" alt=""></div>
          <div class="qq"><img src="./qq.png" alt=""></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ShowMessage } from '@/common/js/util'
export default {
  data () {
    return {
      ruleForm: {
        account: '',
        password: ''
      },
      rules: {
        account: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { pattern: /^1[34578]\d{9}$/, message: '请输入正确手机号码' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm () {
      let _this = this
      let data = {
        account: this.ruleForm.account,
        password: this.ruleForm.password
      }
      this.$post('/user/login', data)
        .then((response) => {
          if (response.code === 200) {
            console.log(response)
            sessionStorage.account = response.data.user.account
            console.log(sessionStorage.account)
            _this.$router.push({ path: '/home' })
          }
          ShowMessage(response.code, response.msg)
        }).catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper
  position fixed
  top 0
  left 0
  right 0
  bottom 0
  background-color #f1f1f1
  display flex
  justify-content center
  align-items center
  a
    text-decoration none
  .branch
    position absolute
    left 50px
    top 50px
    div
      font-size 40px
      font-weight bold
      color #ea6f5a
  .window
    width 400px
    background #fff
    border-radius 4px
    box-shadow 0 0 8px rgba(0,0,0,.1)
    .content
      display flex
      flex-direction column
      justify-content center
      align-items center
      .title
        display flex
        flex-direction row
        margin-top 55px
        margin-bottom 55px
        font-size 18px
        color #969696
        .login
          height 30px
          width 50px
          text-align center
          font-weight 700
          color #ea6f5a
          border-bottom 2px solid #ea6f5a
          margin-right 20px
        .register
          height 30px
          width 50px
          text-align center
          margin-left 20px
          color #969696
        .register:hover
          border-bottom 2px solid #ea6f5a
      .input
        width 300px
      .notify
        font-size 14px
        color #999
        display flex
        flex-direction row
        .question
          margin-left 105px
      .loginBtn
        width 300px
        height 43px
        border-radius 25px
        background-color #3194d0
        text-align center
        line-height 43px
        color #fff
        cursor pointer
        font-size 18px
      .el-divider--horizontal
        width 250px
        color #999
        margin-top 50px
      .loginIcon
        margin-top 10px
        display flex
        flex-direction row
        justify-content center
        align-items center
        margin-bottom 50px
        .sina
          margin-right 40px
        .qq
          margin-left 40px
        img
          width 30px
          height 30px
</style>
