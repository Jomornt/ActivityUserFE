import Vue from 'vue'
import Router from 'vue-router'
import Content from './pages/Content'
import Login from './pages/Begin/Login.vue'
import Register from './pages/Begin/Register.vue'
import Create from './pages/Create/Create.vue'
import Home from './pages/Home/Home'
import Person from './pages/Person/Person'
import School from './pages/School/School'
import Club from './pages/Club/Club'
import Search from './pages/Search/Search'
import Detail from './pages/Detail/Detail'
import UserInfo from './pages/UserInfo/UserInfo'
import MyCreate from './pages/UserInfo/MyCreate'
import MyJoin from './pages/UserInfo/MyJoin'
import ChangePwd from './pages/UserInfo/ChangePwd'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Content,
      children: [
        {
          path: '/home',
          name: 'home',
          component: Home
        }, {
          path: '/school',
          name: 'school',
          component: School
        }, {
          path: '/club',
          name: 'club',
          component: Club
        }, {
          path: '/person',
          name: 'person',
          component: Person
        }, {
          path: '/search',
          name: 'search',
          component: Search
        }, {
          path: '/create',
          name: 'create',
          meta: {
            requireAuth: true
          },
          component: Create
        }, {
          path: '/detail/:id',
          name: 'detail',
          component: Detail
        }, {
          path: '/userinfo',
          name: 'userinfo',
          meta: {
            requireAuth: true
          },
          component: UserInfo
        }, {
          path: '/myjoin',
          name: 'myjoin',
          meta: {
            requireAuth: true
          },
          component: MyJoin
        }, {
          path: '/mycreate',
          name: 'mycreate',
          meta: {
            requireAuth: true
          },
          component: MyCreate
        }, {
          path: '/changepwd',
          name: 'changepwd',
          meta: {
            requireAuth: true
          },
          component: ChangePwd
        }
      ]
    }, {
      path: '/login',
      name: 'login',
      component: Login
    }, {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})
