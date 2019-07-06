import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import 'element-ui/lib/theme-chalk/index.css'
import { post, fetch, patch, put } from './common/js/http'
import axios from 'axios'
import vueAxios from 'vue-axios'
axios.defaults.withCredentials = true

Vue.prototype.$post = post
Vue.prototype.$fetch = fetch
Vue.prototype.$patch = patch
Vue.prototype.$put = put

Vue.use(vueAxios, axios)
Vue.use(ElementUI)
Vue.use(VueQuillEditor)
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
    if (sessionStorage.account) { // 获取当前的token是否存在
      console.log('token存在')
      next()
    } else {
      console.log('token不存在')
      next({
        path: '/login', // 将跳转的路由path作为参数，登录成功后跳转到该路由
        query: { redirect: to.fullPath }
      })
    }
  } else { // 如果不需要权限校验，直接进入路由界面
    next()
  }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
