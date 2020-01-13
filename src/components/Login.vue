/* eslint-disable */
<template>
<div>
<h1>Login</h1>
<form @submit.prevent="login">
  <md-field>
     <label>Email</label>
     <md-input type="email " required v-model="email"></md-input>
   </md-field>
   <md-field>
     <label>Password</label>
     <md-input type="password" required v-model="password"></md-input>
   </md-field>
<!-- <input type="text" v-model='email' /> -->
<!-- <input type="password" v-model='password'/> -->
<!-- <input type="submit" /> -->
<md-button type="submit" class="md-raised">Login</md-button>
<!-- <a v-on:click="login">Submit</a> -->
</form>
</div>
</template>
<script>
export default {
  name: 'Login',
  data: function(){
    return {
      email:'',
      password:''
    }

  },
  methods: {
    login: function () {
      // console.log(this.$store.getters.getUser('admin'))
      this.$store.dispatch('login',{email:this.email, password:this.password})
      if(this.$store.getters.isLoggedIn){
        console.log(this.email, this.password , this.store)
        this.$emit('submitted', true)
      }else{
        console.log('Error')
      }
    }
  }
}
</script>
