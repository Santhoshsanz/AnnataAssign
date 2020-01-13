<template>
<div class="user">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
   <md-button @click.native="logOut()">Logout</md-button>
  <h1>Welcome {{user.email}} !!!</h1>
  <!-- {{editUser}} -->
  <md-card v-if="!user.isAdmin">
    <md-card-header>
      <div class="md-title">{{user.name}}</div>
      <div class="md-subhead">{{user.email}}</div>
      <div class="md-subhead">{{user.jobTitle}}</div>
    </md-card-header>
    <md-card-content>
      <div class="md-body-2">City :{{user.address.city}}</div>
      <div class="md-body-2">State: {{user.address.state}}</div>
      <div class="md-body-2">Country:{{user.address.country}}</div>
    </md-card-content>
  </md-card>


  <div>
    <md-table md-card v-if="user.isAdmin">
      <md-table-toolbar>
        <h1 class="md-title">Users</h1>
      </md-table-toolbar>

      <md-table-row>
        <md-table-head>Name</md-table-head>
        <md-table-head>Email</md-table-head>
        <md-table-head>Job Title</md-table-head>
        <md-table-head>Company</md-table-head>
        <md-table-head>City</md-table-head>
        <md-table-head>State</md-table-head>
        <md-table-head>Country</md-table-head>
        <md-table-head>Actions</md-table-head>
      </md-table-row>
      <md-table-row v-for="(user,index) in userList">
        <md-table-cell>{{user.name || 'NA'}}</md-table-cell>
        <md-table-cell>{{user.email || 'NA'}}</md-table-cell>
        <md-table-cell>{{user.company|| 'NA'}}</md-table-cell>
        <md-table-cell>{{user.jobTitle || 'NA'}}</md-table-cell>
        <md-table-cell>{{user.address.city || 'NA'}}</md-table-cell>
        <md-table-cell>{{user.address.state || 'NA'}}</md-table-cell>
        <md-table-cell>{{user.address.country || 'NA'}}</md-table-cell>
        <md-table-cell>
          <md-icon class="fa fa-edit" @click.native="editU(user,index)" key="1"></md-icon>
          <md-icon class="fa fa-trash" @click.native="deleteUser(index)" key="2"></md-icon>
        </md-table-cell>
      </md-table-row>
    </md-table>
  </div>

    <Registration
     v-if="editUser"
     v-bind:userDetails="editingUser"
     v-bind:userIndex="userIndex"
     title="Edit User"
    @cancelled="cancel()"
    @submitted="saved()"/>
  <md-dialog :md-active.sync="showDialog">
  </md-dialog>
</div>
</template>
<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Registration from '@/components/Registration.vue'

export default {
  name: 'user',
  data: function() {
    return {
      'user': null,
      editUser: false,
      userDetail: {},
      address: {},
      userList: this.$store.getters.getUsers,
      showDialog: false,
      editingUser:{},
      userIndex:0
    }
  },
  components: {
    Registration
  },
  mounted() {
    this.user = this.$store.getters.getUser
  },
  methods: {
    submitted: function(val) {
      console.log('val', val)
      if (val) {
        this.$router.push('about')
      }
    },
    regSubmitted: function(val) {
      if (val) {
        alert('Registered')
        this.login = !this.login;
      }
    },
    deleteUser(index) {
      this.$store.dispatch('deleteUser', index)
    },
    editU(user,index) {
      console.log(">>>",user)
      this.editingUser=user
      this.editUser = true
      this.userIndex=index
    },
    cancel(){
      this.editUser = false
    },
    saved(){
      alert('Saved');
      this.cancel()
    },
    logOut(){
      this.$store.dispatch('logout');
        this.$router.push('/')
    }
  },
  // watch: {
  //   user: function() {
  //     if (this.$store.getters.getUser.isAdmin) {
  //       this.userList = this.$store.getters.getUsers
  //     }
  //   }
  // }
}
</script>

<style lang="scss">
.md-table-head {
    text-align: center;
}
.user {
    max-width: 1200px;
    margin: auto;
    .md-icon {
        cursor: pointer;
    }
}
.md-dialog {
    max-width: 768px;
}
</style>
