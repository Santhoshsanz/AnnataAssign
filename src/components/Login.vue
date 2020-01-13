/* eslint-disable */
<template>
<div>
<h1>Login</h1>
<form @submit.prevent="login">
  <md-field :class="{'md-invalid':$v.email.$invalid && $v.email.$dirty}">
     <label>Email</label>
     <md-input type="email " required v-model="$v.email.$model"></md-input>
      <span class="md-error">There is an error</span>
      <!-- /* <span :class="{'md-error':$v.email.$email}">There is an error</span>  */ -->
   </md-field>
   <md-field :class="{'md-invalid':$v.password.$invalid && $v.password.$dirty}">
     <label>Password</label>
     <md-input type="password" required v-model="$v.password.$model"></md-input>
      <span class="md-error">There is an error</span>
   </md-field>
<!-- <input type="text" v-model='email' /> -->
<!-- <input type="password" v-model='password'/> -->
<!-- <input type="submit" /> -->
<md-button type="submit" class="md-raised" :disabled="$v.$invalid">Login</md-button>
<!-- <a v-on:click="login">Submit</a> -->
</form>
<!-- {{$v}} -->
</div>

</template>
<script>
import { required , email} from 'vuelidate/lib/validators'

export default {
  name: 'Login',
  data: function(){
    return {
      email:'',
      password:''
    }
  },
  validations: {
    email: {
      email,
      required
    },
    password: {
      required,
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
        alert('Wrong Credentials')
      }
    }
  }
}
</script>
