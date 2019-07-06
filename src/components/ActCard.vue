<template>
  <div class="card" to="/detail" @click="showDetail(item.id)">
    <div>
      <img :src="'http://172.18.20.163:9090/'+item.pic" alt="">
    </div>
    <div class="content">
      <div class="gray-word">
        {{item.starttime}}
      </div>
      <div class="actTitle">
        {{item.title}}
      </div>
      <div class="gray-word">
        <i class="el-icon-location-outline"></i>
        {{item.locale+item.locdetail}}
      </div>
    </div>
    <div class="foot">
      <i class="el-icon-view"></i>
      3469
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object
  },
  methods: {
    showDetail (id) {
      this.$router.push({ path: `/detail/${id}` })
    }
  }
}
</script>

<style lang="stylus" scoped>
img
  max-width 100%
.router-link-active
  text-decoration none
a
  text-decoration none
.card
  margin-bottom 35px
  width 255px
  border 1px solid #eee
  height 320px
  .content
    height 100px
    padding 10px
    border-bottom 1px solid #eee
    display flex
    flex-direction column
    justify-content space-between
    .gray-word
      color #999
      font-size 12px
      overflow: hidden
      white-space: nowrap
      text-overflow:ellipsis
    .actTitle
      font-size 14px
      color black
  .foot
    padding 10px
    color black
    text-align right
</style>
