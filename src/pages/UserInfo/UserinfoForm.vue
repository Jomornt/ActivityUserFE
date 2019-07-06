<template>
  <el-form label-position="left" label-width="120px">
    <el-form-item label="账号">
      <el-upload
        class="avatar-uploader"
        action="https://jsonplaceholder.typicode.com/posts/"
        :show-file-list="false">
        <img v-if="imageUrl" :src="imageUrl" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data () {
    return {
      imageUrl: ''
    }
  }
}
</script>

<style lang="stylus" scoped>
  .avatar-uploader .el-upload 
    border: 1px dashed #d9d9d9
    border-radius: 6px
    cursor: pointer
    position: relative
    overflow: hidden
  .avatar-uploader .el-upload:hover 
    border-color: #409EFF
  .avatar-uploader-icon 
    font-size: 28px
    color: #8c939d
    width: 178px
    height: 178px
    line-height: 178px
    text-align: center
  .avatar 
    width: 178px
    height: 178px
    display: block
</style>
