<template>
  <div class="wrapper">
    <div class="box">
      <div class="aside">
        <user-aside></user-aside>
      </div>
      <div class="content">
        <div class="form-wrapper">
          <el-form
            label-position="right"
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            class="demo-ruleForm"
            hide-required-asterisk>
            <el-form-item
              label="账号">
              <el-input
                v-model="account"
                disabled></el-input>
            </el-form-item>
            <el-form-item
              label="旧密码"
              prop="oldPwd">
              <el-input
                placeholder="请输入旧密码"
                v-model="ruleForm.oldPwd"
                show-password></el-input>
            </el-form-item>
            <el-form-item
              label="新密码"
              prop="newPwd">
              <el-input
                placeholder="请输入新密码"
                v-model="ruleForm.newPwd"
                show-password></el-input>
            </el-form-item>
            <el-form-item
              label="确认新密码"
              prop="checkPwd">
              <el-input
                placeholder="请确认密码"
                v-model="ruleForm.checkPwd"
                show-password></el-input>
            </el-form-item>
            <el-form-item class="btn">
              <el-button
                type="success"
                @click="submitForm"
                plain>确认提交</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserAside from '@/components/UserAside'
import { ShowMessage } from '@/common/js/util'
export default {
  components: {
    UserAside
  },
  data () {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.checkPwd !== '') {
          this.$refs.ruleForm.validateField('checkPwd')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.newPwd) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      account: sessionStorage.account,
      ruleForm: {
        oldPwd: '',
        newPwd: '',
        checkPwd: ''
      },
      rules: {
        oldPwd: [
          { required: true, message: '请输入旧密码', trigger: 'blur' }
        ],
        newPwd: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPwd: [
          { validator: validatePass2, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm () {
      let data = {
        account: this.account,
        oldPwd: this.ruleForm.oldPwd,
        newPwd: this.ruleForm.newPwd
      }
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.$post('/user/changepwd', data)
            .then((response) => {
              ShowMessage(response.code, response.msg)
              this.$router.push({ path: `/login` })
            }).catch((error) => {
              console.log(error)
            })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper
    display flex
    justify-content center
    align-items center
    background-color #f9f9f9
    .box
      margin-top 20px
      margin-bottom 20px
      height 500px
      border-radius 8px
      display flex
      .aside
        width 200px
        border-radius 8px
        background-color #fff
        margin-right 20px
      .content
        width 820px
        border-radius 8px
        background-color #fff
        display flex
        justify-content center
        align-items center
        .form-wrapper
          width 500px
          .btn
            display flex
            justify-content center
            align-items center
</style>
