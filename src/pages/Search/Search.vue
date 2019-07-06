<template>
  <div class="wrapper">
    <choose-line @areaChange="handleAreaChange"></choose-line>
    <div class="content">
      <act-card
        v-for="item in myFilter"
        :key="item.id"
        :item="item"
      ></act-card>
    </div>
  </div>
</template>

<script>
import ChooseLine from '@/components/ChooseLine'
import ActCard from '@/components/ActCard'
export default {
  props: {
    category: String
  },
  data () {
    return {
      currentPage: 1,
      pageInfo: Array,
      cardInfo: Object,
      area: '全部',
      keyword: this.$route.params.keyword
    }
  },
  components: {
    ChooseLine,
    ActCard
  },
  computed: {
    myFilter () {
      if (this.area === '全部') {
        return this.pageInfo
      } else {
        let newlist = []
        let list = this.pageInfo
        for (let val in list) {
          if (list[val].locale === this.area) newlist.push(list[val])
        }
        return newlist
      }
    }
  },
  methods: {
    handleAreaChange (val) {
      this.area = val
    }
  },
  mounted () {
    this.$fetch('/activity/search', { keyword: this.$route.query.keyword })
      .then((response) => {
        this.pageInfo = response.data.activityInfo
        console.log(this.pageInfo)
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
    flex-direction column
    align-items center
    .content
      margin-top 25px
      width 1080px
      display flex
      flex-direction row
      flex-wrap wrap
      justify-content space-between
    .content:after
      content ''
      width 255px
</style>
