<template>
  <div>
    <div class="title">官方活动</div>
    <div class="content">
      <act-card
        v-for="item in schoolInfo"
        :key="item.id"
        :item="item">
      </act-card>
    </div>
    <div class="title">社团活动</div>
    <div class="content">
      <act-card
        v-for="item in clubInfo"
        :key="item.id"
        :item="item">
      </act-card>
    </div>
    <div class="title">个人活动</div>
    <div class="content">
      <act-card
        v-for="item in personInfo"
        :key="item.id"
        :item="item">
      </act-card>
    </div>
  </div>
</template>

<script>
import ActCard from '@/components/ActCard'
export default {
  components: {
    ActCard
  },
  data () {
    return {
      schoolInfo: Object,
      clubInfo: Object,
      personInfo: Object
    }
  },
  mounted () {
    let schoolData = {
      pn: 1,
      num: 4,
      category: '学校'
    }
    let clubData = {
      pn: 1,
      num: 4,
      category: '社团'
    }
    let personData = {
      pn: 1,
      num: 4,
      category: '个人'
    }
    this.$fetch('/activity', clubData)
      .then((response) => {
        this.clubInfo = response.data.pageInfo.list
      }).catch((error) => {
        console.log(error)
      })
    this.$fetch('/activity', schoolData)
      .then((response) => {
        this.schoolInfo = response.data.pageInfo.list
      }).catch((error) => {
        console.log(error)
      })
    this.$fetch('/activity', personData)
      .then((response) => {
        this.personInfo = response.data.pageInfo.list
      }).catch((error) => {
        console.log(error)
      })
  }
}
</script>

<style lang="stylus" scoped>
  .title
    font-size 1.5rem
    margin-top 35px
    margin-bottom 35px
    font-weight bold
  .content
    display flex
    flex-direction row
    flex-wrap wrap
    justify-content space-between
</style>
