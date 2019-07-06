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
            label-width="80px"
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
              label="昵称"
              prop="nickname">
              <el-input
                placeholder="请输入昵称"
                v-model="ruleForm.nickname"
              ></el-input>
            </el-form-item>
            <el-form-item
              label="性别"
              prop="gender">
            <template>
              <el-radio v-model="ruleForm.gender" label="男">男</el-radio>
              <el-radio v-model="ruleForm.gender" label="女">女</el-radio>
            </template>
            </el-form-item>
            <el-form-item
              label="出生日期"
              prop="birth">
              <el-date-picker
                v-model="ruleForm.birth"
                type="date"
                format="yyyy-MM-dd"
                value-format="yyyy-MM-dd"
                placeholder="请选择日期">
              </el-date-picker>
            </el-form-item>
            <el-form-item
              label="介绍"
              prop="intro">
              <el-input
                type="textarea"
                v-model="ruleForm.intro"></el-input>
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
// import Qs from 'qs'
export default {
  components: {
    UserAside
  },
  data () {
    return {
      account: sessionStorage.account,
      ruleForm: {
        nickname: '',
        gender: '男',
        birth: '',
        intro: ''
      },
      rules: {
        nickname: [
          { required: true, message: '请输入昵称', trigger: 'blur' }
        ],
        gender: [
          { required: true, message: '请选择性别', trigger: 'blur' }
        ],
        birth: [
          { required: true, message: '请选择出生日期', trigger: 'blur' }
        ],
        intro: [
          { required: true, message: '请输入介绍', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm () {
      let data = {
        account: this.account,
        nickname: this.ruleForm.nickname,
        gender: this.ruleForm.gender,
        birth: this.ruleForm.birth,
        intro: this.ruleForm.intro
      }
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.$patch('/user', data)
            .then((response) => {
              // window.location.reload()
              sessionStorage.account = this.account
              window.location.reload()
              ShowMessage(response.code, response.msg)
            }).catch((error) => {
              console.log(error)
            })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  },
  mounted () {
    let _this = this
    this.$fetch('/user/' + sessionStorage.account)
      .then((response) => {
        console.log(response)
        let userInfo = response.data.userInfo[0]
        _this.ruleForm.nickname = userInfo.nickname
        _this.ruleForm.gender = userInfo.gender
        _this.ruleForm.intro = userInfo.intro
        _this.ruleForm.birth = userInfo.birth
        console.log()
      }).catch((error) => {
        console.log(error)
      })
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
          margin-top 30px
          margin-bottom 20px
          width 500px
          .btn
            display flex
            justify-content center
            align-items center
</style>
