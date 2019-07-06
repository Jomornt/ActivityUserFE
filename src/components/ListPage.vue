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
    <div class="block">
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="12"
        layout="total, prev, pager, next, jumper"
        :total="pageInfo.total">
      </el-pagination>
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
      pageInfo: Object,
      cardInfo: Object,
      show: '',
      area: '全部'
    }
  },
  components: {
    ChooseLine,
    ActCard
  },
  computed: {
    myFilter () {
      if (this.area === '全部') {
        return this.pageInfo.list
      } else {
        let newlist = []
        let list = this.pageInfo.list
        for (let val in list) {
          if (list[val].locale === this.area) newlist.push(list[val])
        }
        return newlist
      }
    }
  },
  methods: {
    handleCurrentChange (val) {
      this.currentPage = val
      let data = {
        pn: this.currentPage,
        num: 12,
        category: this.category
      }
      this.$fetch('/activity', data)
        .then((response) => {
          this.pageInfo = response.data.pageInfo
        }).catch((error) => {
          console.log(error)
        })
    },
    handleAreaChange (val) {
      this.area = val
    }
  },
  mounted () {
    let data = {
      pn: 1,
      num: 12,
      category: this.category
    }
    this.$fetch('/activity', data)
      .then((response) => {
        this.pageInfo = response.data.pageInfo
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
