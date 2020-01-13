<template>
<div class="home">
  <md-content class="md-elevation-3">
  <img alt="Vue logo" src="../assets/logo.png">
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->


  <Login v-if="login" @submitted='submitted'/>

  <Registration v-if="!login" @submitted='regSubmitted' title="Registration"/>
  <a v-if="login" @click="login=!login">
    Register
  </a>
  <a v-if="!login" @click="login=!login">Login</a>
  </md-content>
</div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Login from '@/components/Login.vue'
import Registration from '@/components/Registration.vue'

export default {
  name: 'home',
  data: function () {
    return {
      'login': true
    }
  },
  components: {
    Login,
    Registration
  },
  methods: {
    submitted: function (val) {
      console.log('val', val)
      if (val) {
        this.$router.push('user')
      }
    },
    regSubmitted: function (val) {
      if (val) {
        alert('Registered')
      this.login=!this.login;
      }
    }
  }
}
</script>

<style lang="scss">
  .home{
    margin:30px;
    display: flex;
    justify-content: center;
    .md-content{
      padding: 40px;
    }

  }
</style>
