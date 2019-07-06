<template>
  <div>
    <list-page :category="category"></list-page>
  </div>
</template>

<script>
import ListPage from '@/components/ListPage'
export default {
  components: {
    ListPage
  },
  data () {
    return {
      category: '学校'
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
