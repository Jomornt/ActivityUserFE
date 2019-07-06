<template>
  <div class="wrapper">
    <div class="box">
      <div class="aside">
        <user-aside></user-aside>
      </div>
      <div class="content">
        <div class="empty">
          <div><img src="./empty.png"></div>
          <div class="notice">你还木有创建任何活动哦!</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserAside from '@/components/UserAside'
export default {
  components: {
    UserAside
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
        .empty
          display flex
          flex-direction column
          justify-content center
          align-items center
          img
            width 100px
            max-width 100%
          .notice
            height 100px
            line-height 100px
            font-size 28px
</style>
