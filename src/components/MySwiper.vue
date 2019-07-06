<template>
  <div class="mySwiper">
    <template>
      <el-carousel :interval="4000" type="card" height="350px">
        <el-carousel-item v-for="item in swiper" :key="item.id">
          <img :src="item.url">
        </el-carousel-item>
      </el-carousel>
    </template>
  </div>
</template>

<script>
export default {
  data () {
    return {
      swiper: [{
        id: '1',
        url: 'http://172.18.20.163:9090/233435615730166.jpg'
      }, {
        id: '2',
        url: 'http://172.18.20.163:9090/633430453309741.jpg'
      }, {
        id: '3',
        url: 'http://172.18.20.163:9090/873429424191470.jpg'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .mySwiper
    width 100%
    margin-top 20px
    .el-carousel__item
      // width 1080px
    .el-carousel__item:nth-child(2n)
      background-color: #99a9bf
    .el-carousel__item:nth-child(2n+1)
      background-color: #d3dce6
</style>
