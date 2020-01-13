import Vue from 'vue'
import Vuex from 'vuex'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(VueMaterial)
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userList: [  {
        "name":"Admin",
        "email": "admin@annatadesign.com",
        "password": "admin",
        "company": "Annata",
        "jobTitle": "Admin",
        "address": {
          "city": "Bangalore",
          "state": "Karnataka",
          "country": "India",
        },
          isAdmin: true,
      },
      {
        "name":"User",
        "email": "user@annatadesign.com",
        "password": "user",
        "company": "Annata",
        "jobTitle": "UI Developer",
        "address": {
          "city": "Bangalore",
          "state": "Karnataka",
          "country": "India",
        },
          isAdmin: false,
      }
    ],
    status: '',
    isLoggedIn: '',
    user: {}
  },
  mutations: {
    auth_success(state, user) {
      state.status = true
      state.user = user
    },
    auth_logOut(state) {
      state.status = false
    },
    auth_error(state) {
      state.status = false
    },
    addUser(state, user) {
      state.userList.push(user);
      // console.log(JSON.stringify(state.userList))
    },
    editUser(state, user, i) {
      state.userList[i] = user;
    },
    deleteUser(state,index){
      delete this.state.userList.splice(index,1)
    }
  },
  actions: {
    login({
      commit
    }, user) {
      // localStorage.setItem('token', token)
      // axios.defaults.headers.common['Authorization'] = token
      let cUser={};
      const valid = this.state.userList.some((u) => {
        return u.email === user.email && u.password === user.password && (cUser=u)
      })
      if (valid) {
        commit('auth_success', cUser)
      } else {
        commit('auth_error')
      }
    },
    logout({
      commit
    }) {
      commit('auth_logOut')
    },
    addUser({
      commit
    }, user) {
      console.log(JSON.stringify(user))
      commit('addUser', user)
    },
    editUser({
      commit
    }, user) {
      this.state.userList.some((u, i) => {
        if (u.email === user.email) {
          commit('editUser', user, i)
        }
      })
    },
    deleteUser({commit},index){
      commit('deleteUser',index)
    }
  },
  modules: {},
  getters: {
    isLoggedIn: state => state.status,
    getUsers: state => {
      return state.userList;
    },
    getUser: (state) => {
      return state.user
    }
  }
})
