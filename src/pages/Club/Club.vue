<template>
  <div>
    <list-page :category="category"></list-page>
  </div>
</template>

<script>
import ListPage from '@/components/ListPage'
export default {
  data () {
    return {
      category: '社团'
    }
  },
  components: {
    ListPage
  }
}
</script>

<style lang="stylus" scoped>

</style>
