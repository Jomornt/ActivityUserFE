<template>
  <div class="wrapper">
    <div class="formWrapper">
      <el-form label-width="80px" label-position="left">
        <el-form-item label="活动标题">
          <el-input
            v-model="form.title">
          </el-input>
        </el-form-item>
        <el-form-item label="活动时间">
          <el-col :span="11">
            <el-form-item>
              <el-date-picker
                type="datetime"
                placeholder="选择时间"
                style="width: 100%;"
                format="yyyy-MM-dd HH:mm:ss"
                value-format="yyyy-MM-dd HH:mm:ss"
                v-model="form.starttime"
                >
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-form-item>
              <el-date-picker
                type="datetime"
                placeholder="选择时间"
                style="width: 100%;"
                format="yyyy-MM-dd HH:mm:ss"
                value-format="yyyy-MM-dd HH:mm:ss"
                v-model="form.endtime"
                >
              </el-date-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="活动地点">
          <el-col :span="6">
            <el-select v-model="form.locale" placeholder="请选择">
              <el-option label="A区" value="A区"></el-option>
              <el-option label="B区" value="B区"></el-option>
              <el-option label="C区" value="C区"></el-option>
              <el-option label="D区" value="D区"></el-option>
            </el-select>
          </el-col>
          <el-col :span="18">
            <el-input v-model="form.locdetail">
            </el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="活动类型">
          <el-select v-model="form.category" placeholder="请选择">
              <el-option label="学校" value="学校"></el-option>
              <el-option label="社团" value="社团"></el-option>
              <el-option label="个人" value="个人"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="活动海报">
          <el-upload
            class="upload-demo"
            drag
            :on-success="handleSuccess"
            name="image"
            action="http://localhost:8080/Woola_admin_war_exploded/activity/create"
            multiple>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em>
            </div>
          </el-upload>
        </el-form-item>
        <el-form-item label="活动人数">
          <el-input v-model="form.actLim"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <div class="quillWrapper">
      <quill-editor
        v-model="form.content"
        ref="myQuillEditor"
        :options="editorOption"
      >
      </quill-editor>
    </div>
    <div class="btnWrapper">
      <div class="btn" @click="saveActivity">发布</div>
    </div>
  </div>
</template>

<script>
import { ShowMessage } from '@/common/js/util'
import { quillEditor, Quill } from 'vue-quill-editor'
import { container, ImageExtend, QuillWatch } from 'quill-image-extend-module'
Quill.register('modules/ImageExtend', ImageExtend)
export default {
  components: { quillEditor },
  data () {
    return {
      value: '',
      active: 1,
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      form: {
        sponsor: sessionStorage.account,
        title: '',
        starttime: '',
        endtime: '',
        locale: '',
        category: '',
        pic: '',
        actLim: 0,
        content: '',
        locdetail: ''
      },
      editorOption: {
        modules: {
          ImageExtend: {
            loading: true,
            name: 'image',
            action: 'http://localhost:8080/Woola_admin_war_exploded/activity/create',
            response: (res) => {
              return 'http://172.18.20.163:9090/' + res.data.filename
            }
          },
          toolbar: {
            container: container,
            handlers: {
              'image': function () {
                QuillWatch.emit(this.quill.id)
              }
            }
          }
        }
      }
    }
  },
  methods: {
    next () {
      if (this.active++ > 2) this.active = 0
    },
    saveActivity () {
      this.$post('/activity', this.form)
        .then((response) => {
          this.$router.push({ path: `/detail/${response.data.actid}` })
          ShowMessage(response.code, response.msg)
        }).catch((error) => {
          console.log(error)
        })
    },
    handleSuccess (response, file, fileList) {
      this.form.pic = response.data.filename
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper
    display flex
    justify-content center
    align-items center
    flex-direction column
    background-color #f6f6f6
    .formWrapper
      margin-top 50px
      background-color #fff
      border 1px solid #eee
      width 1000px
      padding 40px
      border-radius 10px
      margin-bottom 50px
      .line
        text-align center
    .quillWrapper
      height 400px
      width 1000px
      padding 40px
      padding-bottom 0px
      border-radius 10px
      background-color #fff
      margin-bottom 30px
      .quill-editor
        height 300px
    .btnWrapper
      display flex
      flex-direction row
      align-items center
      justify-content center
      .btn
        width 185px
        height 36px
        background-color #03b349
        margin-right 100px
        font-size 14px
        line-height 36px
        text-align center
        margin-bottom 30px
        color #fff
</style>
