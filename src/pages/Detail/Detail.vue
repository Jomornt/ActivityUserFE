<template>
  <div class="box">
    <div class="wrapper">
      <div class="brief">
        <div class="act-img">
          <img :src="listInfo.pic" alt="">
        </div>
        <div class="act-intro">
          <h4 class="title">{{listInfo.title}}</h4>
          <div class="small-font">
            <i class="el-icon-alarm-clock"></i>
            时间
            <span>{{listInfo.starttime}} ~ {{listInfo.endtime}}</span>
          </div>
          <div class="small-font">
            <i class="el-icon-location-outline"></i>
            地点
            <span>{{listInfo.locale}}</span>
          </div>
          <div class="small-font">
            <i class="el-icon-user"></i>
            发起人
            <span>admin</span>
          </div>
          <div class="join-btn">
            <el-button type="success" @click="joinAct">报名参加</el-button>
          </div>
        </div>
      </div>
      <el-divider><div class="divide">活动内容</div></el-divider>
      <div class="content">
        <p v-html="listInfo.content">
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      listInfo: ''
    }
  },
  methods: {
    joinAct () {
      console.log(this.listInfo.actLim)
      console.log(this.listInfo.partici)
      if (this.listInfo.actLim > this.listInfo.partici) {
        alert('报名成功')
      }
    }
  },
  mounted () {
    let id = this.$route.params.id
    let _this = this
    console.log(this.$route.params.id)
    this.$fetch('/activity/' + id)
      .then((response) => {
        _this.listInfo = response.data.activityInfo[0]
        _this.listInfo.pic = 'http://172.18.20.163:9090/' + response.data.activityInfo[0].pic
      }).catch((error) => {
        console.log(error)
      })
  }
}
</script>

<style lang="stylus" scoped>
  img
    max-width 100%
    max-height 99%
  .box
    display flex
    justify-content center
    align-items center
    .wrapper
      width 1080px
      display flex
      flex-direction column
      .brief
        display flex
        flex-direction row
        margin-top 30px
        margin-bottom 10px
        width 1080px
        border 1px solid #eee
        border-radius 8px
        .act-img
          width 440px
          height 260px
        .act-intro
          padding-left 50px
          display flex
          flex-direction column
          .small-font
            font-size 14px
          .join-btn
            margin-left 450px
            margin-top 60px
      .divide
        font-size 18px
      .content
        border 1px solid #eee
        border-radius 8px
        padding 30px
</style>
