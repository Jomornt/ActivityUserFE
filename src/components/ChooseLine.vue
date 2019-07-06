<template>
  <div class="wrapper">
    <div class="box">
       <div>
         时段
        <el-radio-group v-model="time">
          <el-radio-button label="全部"></el-radio-button>
          <el-radio-button label="今天"></el-radio-button>
          <el-radio-button label="明天"></el-radio-button>
          <el-radio-button label="本周"></el-radio-button>
          <el-radio-button label="本周末"></el-radio-button>
          <el-radio-button label="本月"></el-radio-button>
        </el-radio-group>
      </div>
      <hr>
      <div>
         区域
        <el-radio-group v-model="area" @change="handleAreaChange">
          <el-radio-button label="全部"></el-radio-button>
          <el-radio-button label="A区"></el-radio-button>
          <el-radio-button label="B区"></el-radio-button>
          <el-radio-button label="C区"></el-radio-button>
          <el-radio-button label="D区"></el-radio-button>
        </el-radio-group>
      </div>
      <hr>
      <div>
         状态
        <el-radio-group v-model="status">
          <el-radio-button label="全部"></el-radio-button>
          <el-radio-button label="报名中"></el-radio-button>
          <el-radio-button label="进行中"></el-radio-button>
          <el-radio-button label="已结束"></el-radio-button>
        </el-radio-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChooseLine',
  data () {
    return {
      time: '全部',
      area: '全部',
      status: '全部'
    }
  },
  methods: {
    handleAreaChange () {
      console.log(this.area)
      this.$emit('areaChange', this.area)
    }
  }
}
</script>

<style lang="stylus" scoped>
.el-radio-button >>> .el-radio-button__inner
  border none !important
.el-radio-button >>> .el-radio-button__orig-radio:checked+.el-radio-button__inner
  background-color #4aca53
  color #fff
  box-shadow none
  border-radius 0
.wrapper
  margin-top 30px
  display flex
  justify-content center
  align-items center
  .box
    width 1040px
    padding 0px 20px
    font-size 14px
    border 1px solid #eee
    hr
      margin 0px
      width 1040px
      border-top none
      border-bottom 1px solid #eee
    .iconWrapper
      display flex
      flex-direction row
      .title
      .icon
        padding 0px 10px
        margin-left 0px
        margin-top 15px
        margin-bottom 15px
        margin-right 6px
        height 24px
        line-height 24px
        border-radius 2px
        transition all 0.3s
      .icon:hover
        background-color #4aca53
        color #fff
        cursor pointer
      .icon:active
        background-color #4aca53
        color #fff
</style>
