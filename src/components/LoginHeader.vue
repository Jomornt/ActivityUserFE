<template>
  <div class="topLine">
    <el-dropdown>
      <span class="el-dropdown-link hoverChange">
        {{nickname}}<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>
          <router-link to="/userinfo">
            个人信息
          </router-link>
        </el-dropdown-item>
        <el-dropdown-item>
          <div @click="dialogVisible = true">注销</div>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%">
      <span>您确定要退出吗？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="logout">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: {
    nickname: String
  },
  data () {
    return {
      dialogVisible: false
    }
  },
  methods: {
    changeVisible () {
      this.dialogVisible = true
      console.log(this.dialogVisible)
    },
    logout () {
      this.dialogVisible = false
      sessionStorage.removeItem('account')
      this.$emit('logout')
    }
  }
}
</script>

<style lang="stylus" scoped>
a
  text-decoration none
.hoverChange
  color #969696
  cursor pointer
.hoverChange:hover
  color #03b349
.topLine
  background-color #f7f7f7
  height 34px
  font-size 12px
  display flex
  flex-direction row
  align-items center
  justify-content flex-end
  padding-right 40px
</style>
