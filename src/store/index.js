import Vue from 'vue'
import Vuex from 'vuex'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate)
Vue.use(VueMaterial)
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    _id: '',
    userList: [{
      "name": "Admin",
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
      "name": "User",
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
    },
    {
      "name": "User2",
      "email": "user2@annatadesign.com",
      "password": "user",
      "company": "Annata",
      "jobTitle": "UI Developer",
      "address": {
        "city": "Bangalore",
        "state": "Karnataka",
        "country": "India",
      },
      isAdmin: false,
    },
    {
      "name": "User3",
      "email": "user3@annatadesign.com",
      "password": "user",
      "company": "Annata",
      "jobTitle": "UI Developer",
      "address": {
        "city": "Bangalore",
        "state": "Karnataka",
        "country": "India",
      },
      isAdmin: false,
    },
    {
      "name": "User4",
      "email": "user4@annatadesign.com",
      "password": "user",
      "company": "Annata",
      "jobTitle": "UI Developer",
      "address": {
        "city": "Bangalore",
        "state": "Karnataka",
        "country": "India",
      },
      isAdmin: false,
    },
    {
      "name": "User5",
      "email": "user5@annatadesign.com",
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
    editUser(state, user) {
      state.userList[user.index] = user.user;
    },
    deleteUser(state, index) {
      state.userList.splice(index, 1)
    },
    setId(state, _id) {
      console.log("Setting ID", _id)
      state._id = _id
    },
    setId(state, _id) {
      console.log("Setting ID", _id)
      state._id = _id
    }
  },
  actions: {
    login({
      commit
    }, user) {
      // localStorage.setItem('token', token)
      // axios.defaults.headers.common['Authorization'] = token
      let cUser = {};
      const valid = this.state.userList.some((u) => {
        return u.email === user.email && u.password === user.password && (cUser = u)
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
          commit('editUser', { user: user, index: i })
        }
      })
    },
    deleteUser({ commit }, index) {
      commit('deleteUser', index)
    },
    setId({ commit }, _id) {
      commit('setId', _id)
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
    },
    getUserById: (state)  => {
      // return state.userList.find(u => {
      //     return u.email == email
      // })
      // console.log("Index>>>", index)
      if (state._id === null ||
        state._id === "" ||
        state._id === undefined) {
        return {
          name: '',
          email: '',
          password: '',
          company: '',
          jobTitle: '',
          address: {
            city: '',
            state: '',
            country: ''
          }
        }
      }
      console.log(state.userList[state._id])
      return state.userList[state._id];
    },
    getId(state){
      return state._id 
  }
  }
})
