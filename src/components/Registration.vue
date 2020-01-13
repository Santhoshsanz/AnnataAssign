/* eslint-disable */
<template>
<div>
  <h1>{{title}}</h1>
  <form @submit.prevent="registration">
    <md-field :class="{'md-invalid':$v.user.name.$invalid && $v.user.name.$dirty}">
      <label>Name</label>
      <md-input type="text " v-model="user.name"    @input="setName($event)"></md-input>
      <span class="md-error">There is an error</span>
    </md-field>
    <md-field :class="{'md-invalid':$v.user.email.$invalid && $v.user.email.$dirty}">
      <label>Email</label>
      <md-input type="email " required v-model="user.email" id="user"  @input="setEmail($event)"></md-input>
      <span class="md-error">There is an error</span>
    </md-field>
    <md-field :class="{'md-invalid':$v.user.password.$invalid && $v.user.password.$dirty}">
      <label>Password</label>
      <md-input type="password" required v-model="user.password" id="password" @input="setPassword($event)"></md-input>
      <span class="md-error">There is an error</span>
    </md-field>
    <md-field :class="{'md-invalid':$v.user.company.$invalid && $v.user.company.$dirty}">
      <label>Company</label>
      <md-input required v-model='user.company' @input="setCompany($event)"></md-input>
      <span class="md-error">There is an error</span>
    </md-field>
    <md-field :class="{'md-invalid':$v.user.jobTitle.$invalid && $v.user.jobTitle.$dirty}">
      <label>Job Title</label>
      <md-input type="text " required v-model='user.jobTitle' @input="setJobTitle($event)"></md-input>
      <span class="md-error">There is an error</span>
    </md-field>
    <md-field :class="{'md-invalid':$v.user.address.city.$invalid && $v.user.address.city.$dirty}">
      <label>City</label>
      <md-input type="text " required v-model='user.address.city' @input="setCity($event)"></md-input>
      <span class="md-error">There is an error</span>
    </md-field>
    <md-field :class="{'md-invalid':$v.user.address.state.$invalid && $v.user.address.state.$dirty}">
      <label>State</label>
      <md-input type="text " required v-model='user.address.state' @input="setState($event)"></md-input>
      <span class="md-error">There is an error</span>
    </md-field>
    <md-field :class="{'md-invalid':$v.user.address.country.$invalid && $v.user.address.country.$dirty}">
      <label>Counrty</label>
      <md-input type="text " required v-model='user.address.country' @input="setCountry($event)"></md-input>
      <span class="md-error">There is an error</span>
    </md-field>
    <div class="c-flex">
      <md-button v-if="editting" type="submit" class="md-raised" :disabled="$v.$invalid">Save</md-button>
      <md-button v-if="!editting" type="submit" class="md-raised" :disabled="$v.$invalid">Register</md-button>
      <md-button v-if="editting" type="button" class="md-raised" @click.native="cancelClick()">Cancel</md-button>
    </div>
    <!-- <a v-on:click="login">Submit</a> -->
    <!-- {{$v}} -->
  </form>
</div>
</template>
<script>
import {
  store
} from '@/store';
import {
  required,
  email
} from 'vuelidate/lib/validators'
export default {
  props: {
    title: '',
    userDetails: {},
    userIndex: ''
  },
  name: 'Login',
  data: function() {
    return {
      user:  {
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
      },
      editting: false,
      btnName: ""
    }
  },
  validations: {
  user:{

   name: {
      required
    },
    email: {
      required,
      email
    },
    password: {
      required
    },
    company: {
      required
    },
    jobTitle: {
      required
    },
    address: {
      city: {
        required
      },
      state: {
        required
      },
      country: {
        required
      },
    }
    }
  },
  mounted() {
    if (this.userDetails && Object.keys(this.userDetails).length > 0) {
      this.editting = true;
      this.btnName = 'Save';
      this.user = {
        name: this.userDetails.name,
        email: this.userDetails.email,
        password: this.userDetails.password,
        company: this.userDetails.company,
        jobTitle: this.userDetails.jobTitle,
        address: {
          city: this.userDetails.address.city,
          state: this.userDetails.address.state,
          country: this.userDetails.address.country
        }
      }
    } else {
      this.editting = false;
      this.btnName = 'Register';
      this.user = {
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
          this.user = {
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
      console.log("userIndex", this.userIndex)
      console.log("user", this.user)
      if (!this.editting) {
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
      } else {
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
        }, this.userIndex)
      }
      this.$emit('submitted', true)
    },
    cancelClick: function() {
      this.$emit('cancelled')
    },
    setName(value) {
        this.user.name = value
        this.$v.user.name.$touch()
      },
      setEmail(value) {
          this.user.email = value
          this.$v.user.email.$touch()
        },
        setPassword(value) {
            this.user.password = value
            this.$v.user.password.$touch()
          },
        setCountry(value){
          this.user.address.country = value
          this.$v.user.address.country.$touch()
        },
        setCompany(value){
          this.user.company = value
          this.$v.user.company.$touch()
        },
        setState(value){
          this.user.address.state = value
          this.$v.user.address.state.$touch()
        },
        setCity(value){
          this.user.address.city = value
          this.$v.user.address.city.$touch()
        },
        setJobTitle(value){
          this.user.jobTitle = value
          this.$v.user.jobTitle.$touch()
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
