<template>
  <el-menu
    :default-active="$route.path"
    class="el-menu-vertical-demo"
    router>
    <el-menu-item
      index="/userinfo">
      <i class="el-icon-user"></i>
      <span slot="title">个人信息</span>
    </el-menu-item>
    <el-menu-item
      index="/changepwd">
      <i class="el-icon-unlock"></i>
      <span slot="title">修改密码</span>
    </el-menu-item>
    <el-menu-item
      index="/myjoin">
      <i class="el-icon-wind-power"></i>
      <span slot="title">我参与的</span>
    </el-menu-item>
    <el-menu-item
      index="/mycreate">
      <i class="el-icon-position"></i>
      <span slot="title">我发布的</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  props: {
    index: String
  }
}
</script>

<style lang="stylus" scoped>
  .el-menu-vertical-demo
    border-radius 8px
    border none
</style>
