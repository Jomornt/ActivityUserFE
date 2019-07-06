<template>
  <div class="wrapper">
    <div class="swiperWrapper">
      <my-swiper></my-swiper>
    </div>
    <div class="contentWrapper">
      <recommend></recommend>
    </div>
  </div>
</template>

<script>
import MySwiper from '@/components/MySwiper'
import Recommend from '@/pages/Home/Recommend'
export default {
  components: {
    MySwiper,
    Recommend
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper
    display flex
    flex-direction column
    justify-content center
    align-items center
    .swiperWrapper
      width 100%
    .contentWrapper
      width 1080px
</style>
