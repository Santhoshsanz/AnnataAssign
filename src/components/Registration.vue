/* eslint-disable */
<template>
<div>
  <h1>{{title}}</h1>
  <form @submit.prevent="registration">
    <md-field>
      <label>Name</label>
      <md-input type="text " required v-model="user.name"></md-input>
    </md-field>
    <md-field>
      <label>Email</label>
      <md-input type="email " required v-model="user.email" id="user"></md-input>
    </md-field>
    <md-field>
      <label>Password</label>
      <md-input type="password" required v-model="user.password" id="password"></md-input>
    </md-field>
    <md-field>
      <label>Company</label>
      <md-input required v-model='user.company'></md-input>
    </md-field>
    <md-field>
      <label>Job Title</label>
      <md-input type="email " required v-model='user.jobTitle'></md-input>
    </md-field>
    <md-field>
      <label>City</label>
      <md-input type="email " required v-model='user.address.city'></md-input>
    </md-field>
    <md-field>
      <label>State</label>
      <md-input type="email " required v-model='user.address.state'></md-input>
    </md-field>
    <md-field>
      <label>Counrty</label>
      <md-input type="email " required v-model='user.address.country'></md-input>
    </md-field>
    <div class="c-flex">
      <md-button v-if="editting" type="submit" class="md-raised">Save</md-button>
      <md-button v-if="!editting" type="submit" class="md-raised">Register</md-button>
      <md-button v-if="editting" type="button" class="md-raised" @click.native="cancelClick()">Cancel</md-button>
    </div>
    <!-- <a v-on:click="login">Submit</a> -->
  </form>
</div>
</template>
<script>
import {
  store
} from '@/store';
export default {
  props: {
    title: '',
    userDetails: {},
    userIndex:''
  },
  name: 'Login',
  data: function() {
    return {
      user: this.userDetails,
      editting: false,
      btnName: ""
    }
  },
  mounted() {
    if (this.userDetails && Object.keys(this.userDetails).length > 0) {
      this.editting = true;
      this.btnName = 'Save'
    } else {
      this.editting = false;
      this.btnName = 'Register';
      this.user={
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
  },
  watch: {
    userDetails: function(newVal, oldVal) {
      console.log("Inside Watch")
      if (Object.keys(newVal).length > 0) {
        this.editting = true;
        this.btnName = 'Save'
        this.user = {
          name: newVal.name,
          email: newVal.email,
          password: newVal.password,
          company: newVal.company,
          jobTitle: newVal.jobTitle,
          address: {
            city: newVal.address.city,
            state: newVal.address.state,
            country: newVal.address.country
          }
        }
      } else {
        this.editting = false;
        this.btnName = 'Register',
        this.user={
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
    }
  },
methods: {
  registration: function() {
    console.log("userIndex",this.userIndex)
    console.log("user",this.user)
    if(!this.editting){
    this.$store.dispatch('addUser', {
      name: this.user.name,
      email: this.user.email,
      password: this.user.password,
      company: this.user.company,
      jobTitle: this.user.jobTitle,
      address: {
        city: this.user.address.city,
        state: this.user.address.state,
        country: this.user.address.country
      }
    })
  }else{
    this.$store.dispatch('editUser', {
      name: this.user.name,
      email: this.user.email,
      password: this.user.password,
      company: this.user.company,
      jobTitle: this.user.jobTitle,
      address: {
        city: this.user.address.city,
        state: this.user.address.state,
        country: this.user.address.country
      }
    },this.userIndex)
  }
    this.$emit('submitted', true)
  },
  cancelClick: function() {
    this.$emit('cancelled')
  }
}
}
</script>

<style lang="scss">
.c-flex {
    display: flex;
    justify-content: center;
}
</style>
