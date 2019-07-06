<template>
  <div class="topLine">
    <router-link to="/login">
      <div class="hoverChange">
        登陆
      </div>
    </router-link>
    <span class="hoverChange">/</span>
    <router-link to="/register">
      <div class="hoverChange">
        注册
      </div>
    </router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
a
  text-decoration none
.hoverChange
  color #969696
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
