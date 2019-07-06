<template>
  <div>
    <unlogin-header v-show="!isLogin"></unlogin-header>
    <login-header v-show="isLogin" :nickname="nickname" @logout="handleLogout"></login-header>
    <div class="searchWrapper">
      <div class="brand">
        <div style="font-size:30px;color:#03b349">西瓜活动</div>
      </div>
      <div class="search">
        <div>
          <el-input placeholder="请输入内容" v-model="search">
            <el-button
              slot="append"
              icon="el-icon-search"
              @click="handleSearch"
            ></el-button>
          </el-input>
        </div>
      </div>
      <div class="btnWrapper">
        <router-link class="tempBtn" to="/create">
          <el-button type="success">发布活动</el-button>
        </router-link>
      </div>
    </div>
    <div class="selectWrapper">
      <router-link class="selectItem" to="/home">
        首页
      </router-link>
      <router-link class="selectItem" to="/school">
        学校
      </router-link>
      <router-link class="selectItem" to="/club">
        社团
      </router-link>
      <router-link class="selectItem" to="/person">
        个人
      </router-link>
    </div>
  </div>
</template>

<script>
import LoginHeader from '@/components/LoginHeader'
import UnloginHeader from '@/components/UnloginHeader'
export default {
  name: 'MyHeader',
  components: {
    LoginHeader,
    UnloginHeader
  },
  data () {
    return {
      isLogin: false,
      nickname: '',
      actInfo: Object,
      search: ''
    }
  },
  mounted () {
    let _this = this
    if (sessionStorage.account) {
      this.isLogin = true
      this.$fetch('/user/' + sessionStorage.account)
        .then((response) => {
          _this.nickname = response.data.userInfo[0].nickname
        }).catch((error) => {
          console.log(error)
        })
      let data = {
        pn: 1,
        num: 100000
      }
      this.$fetch('/activity', data)
        .then((response) => {
          console.log(response)
        }).catch((error) => {
          console.log(error)
        })
    } else {
      this.isLogin = false
    }
  },
  methods: {
    handleLogout () {
      this.isLogin = false
    },
    handleSearch () {
      this.$router.push({ path: `/search`, query: { keyword: this.search } })
      this.search = ''
    }
  }
}
</script>

<style lang="stylus" scoped>
a
  text-decoration none
.searchWrapper
  height 90px
  display flex
  flex-direction row
  justify-content center
  align-items center
  .branch
    div
      font-size 30px
  .search
    margin-left 100px
    margin-right 50px
    width 420px
  .btnWrapper
    display flex
    flex-direction row
    justify-content center
    align-items center
    .tempBtn
      margin-left 40px
.selectWrapper
  height 46px
  background-color #03b349
  display flex
  flex-direction row
  justify-content center
  align-items center
  .selectItem
    height 46px
    line-height 46px
    padding 0 20px
    font-size 18px
    font-weight bold
    margin-left 20px
    color white
    font-weight bold
  .selectItem:hover
    background-color #00A542
    cursor pointer
  .router-link-active
    background-color #00A542
</style>
