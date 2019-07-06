<template>
  <div class="wrapper">
    <div class="branch">
      <img src="./branch.png" alt="">
    </div>
    <div class="window">
      <div class="content">
        <div class="title">
          <router-link to="/login">
            <div class="login">登录</div>
          </router-link>
          <div>·</div>
          <div class="register"> 注册</div>
        </div>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
          <el-form-item class="input" prop="nickname">
            <el-input
              placeholder="你的昵称"
              prefix-icon="el-icon-user"
              v-model="ruleForm.nickname">
            </el-input>
          </el-form-item>
          <el-form-item class="input" prop="phonenum">
            <el-input
              placeholder="手机号"
              prefix-icon="el-icon-mobile-phone"
              v-model="ruleForm.phonenum">
            </el-input>
          </el-form-item>
          <el-form-item class="input" prop="verifycode" ref="phoneValidate">
            <el-input
              placeholder="手机验证码"
              prefix-icon="el-icon-key"
              v-model="ruleForm.verifycode">
              <el-button
                slot="append"
                :disabled="!this.btnInfo.canClick"
                @click="sendSms('phoneValidate')">
                {{btnInfo.content}}
              </el-button>
            </el-input>
          </el-form-item>
          <el-form-item class="input" prop="password">
            <el-input
              placeholder="设置密码"
              prefix-icon="el-icon-lock"
              v-model="ruleForm.password"
              show-password>
            </el-input>
          </el-form-item>
          <el-form-item>
            <div
              class="loginBtn"
              @click="submitForm(ruleForm)">注册
            </div>
          </el-form-item>
        </el-form>
        <div class="notify">
          点击 “注册” 即表示您同意并愿意遵守
          <a href="#">用户协议</a>和
          <a href="#">隐私政策</a>
        </div>
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
        nickname: '',
        phonenum: '',
        verifycode: '',
        password: ''
      },
      rules: {
        nickname: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 2, max: 15, message: '长度在 2 到 15 个字符', trigger: 'blur' }
        ],
        phonenum: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { pattern: /^1[34578]\d{9}$/, message: '请输入正确手机号码' }
        ],
        verifycode: [
          { required: true, message: '请输入验证码', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 18, message: '长度在 6 到 18 个字符', trigger: 'blur' }
        ]
      },
      btnInfo: {
        content: '发送验证码',
        totalTime: 10,
        canClick: true
      }
    }
  },
  methods: {
    submitForm (formName) {
      let _this = this
      let data = {
        nickname: this.ruleForm.nickname,
        verifycode: this.ruleForm.verifycode,
        phonenum: this.ruleForm.phonenum,
        password: this.ruleForm.password
      }
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          _this.$post('/user/register', data)
            .then((response) => {
              if (response.code === 200) {
                console.log('wate')
                _this.$router.push({ path: 'login' })
              }
              ShowMessage(response.code, response.msg)
            }).catch((error) => {
              console.log(error)
            })
        } else {
          return false
        }
      })
    },
    changeBtn () {
      if (!this.btnInfo.canClick) return
      this.btnInfo.canClick = false
      this.btnInfo.content = this.btnInfo.totalTime + 's后再发送'
      let clock = window.setInterval(() => {
        this.btnInfo.totalTime--
        this.btnInfo.content = this.btnInfo.totalTime + 's后再发送'
        if (this.btnInfo.totalTime <= 0) {
          window.clearInterval(clock)
          this.btnInfo.content = '发送验证码'
          this.btnInfo.totalTime = 10
          this.btnInfo.canClick = true
        }
      }, 1000)
    },
    sendSms (validateName) {
      let _this = this
      this.$refs.ruleForm.validateField('phonenum', (valid) => {
        if (valid !== '') return false
        _this.changeBtn()
        let data = {
          phonenum: this.ruleForm.phonenum
        }
        _this.$post('/user/sendSms', data)
          .then((response) => {
            ShowMessage(response.code, response.msg)
          }).catch((error) => {
            console.log(error)
          })
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
  .router-link-active
    text-decoration: none
  .branch
    position absolute
    left 50px
    top 50px
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
        margin-top 40px
        margin-bottom 40px
        font-size 18px
        color #969696
        .login
          height 30px
          width 50px
          text-align center
          margin-right 20px
          color #969696
        .register
          height 30px
          width 50px
          text-align center
          font-weight 700
          color #ea6f5a
          border-bottom 2px solid #ea6f5a
          margin-left 20px
        .login:hover
          border-bottom 2px solid #ea6f5a
      .input
        width 300px
        padding 0px
      .loginBtn
        width 300px
        height 43px
        border-radius 25px
        background-color #42c02e
        text-align center
        line-height 43px
        color #fff
        font-size 18px
        cursor pointer
        margin-bottom 0px
      .notify
        color #969696
        font-size 12px
        width 200px
        text-align center
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
        margin-bottom 30px
        .sina
          margin-right 40px
        .qq
          margin-left 40px
        img
          width 30px
          height 30px
</style>
