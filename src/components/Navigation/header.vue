<template>
  <!-- Header content -->

  <header class="head--container">
    <div class="greenpoint-logo">
      <router-link to="/">
        <img src="../../assets/imgs/_logo.png" class="logo logo--size">
      </router-link>
    </div>

    <div class="search-bar user-icon menu-dropdwn" id="top-menu">
      <div id="search--container search--icon" class="search--container box">
        <!--This is the drop down menu for the search option-->
        <b-dropdown class="drpdwn--list box-1" variant="link" size="sm" no-caret>
          <template slot="button-content">
            <fa-icon id="dropdwn-s" icon="chevron-down"/>
          </template>
          <b-dropdown-item> TELEVISIONS </b-dropdown-item>
          <b-dropdown-item> TELEVISION ACCESSORIES </b-dropdown-item>
          <b-dropdown-item> MUSICAL INSTRUMENT & SONO </b-dropdown-item>
          <b-dropdown-item> CAMERAS </b-dropdown-item>
          <b-dropdown-item> MOBILE PHONES AND TABLETS </b-dropdown-item>
          <b-dropdown-item> TOWERS AND LAPTOPS </b-dropdown-item>
          <b-dropdown-item>COMPUTER ACCESSORIES AND STORAGE</b-dropdown-item>
          <b-dropdown-item> LARGE APPLIANCES </b-dropdown-item>
          <b-dropdown-item> SMALL APPLIANCES AND COOKING APPLIANCES</b-dropdown-item>
        </b-dropdown>

        <input type="search" class="search--bar-box" placeholder="Search for a product or parts... " >
        <div class="search--icon box-2"> Search <fa-icon id="search--icon" icon="search"/>
        </div>
      </div>

      <div class="user--container">
        <!-- This is the section where the users icon will appear-->
        <div id="active--user-icon">
          <div class="Usr--icon">
            <span class="faicon"> <!-- {{ users.photoURL }} --></span> 
          </div>
          <p class="Usr--name" v-if="!auth"> {{ email }} </p>
          <div id="dropdwn-size">
            <b-dropdown variant="link" size="sm" no-caret class="hovered-dpn">
              <template slot="button-content"><fa-icon icon="chevron-down" class="drop-icon"/></template>
              <b-dropdown-item v-if="!auth">
                <router-link to="/signin" class="link2">Login</router-link>
              </b-dropdown-item>

              <b-dropdown-item v-if="!auth">
                <router-link to="/signup" class="link2">Register</router-link>
              </b-dropdown-item>

              <b-dropdown-item v-if="!auth">
                <router-link to="/post_item" class="link2">Post items</router-link>
              </b-dropdown-item>

              <b-dropdown-divider/> 

              <b-dropdown-item v-if="!auth">
                <router-link to="/post_item" class="link2">My account </router-link>
                </b-dropdown-item>
              <b-dropdown-item v-if="!auth">Settings</b-dropdown-item>
              <b-dropdown-item @click="onLogout"> Logout</b-dropdown-item>
            </b-dropdown>
          </div>
        </div>
        <!---------------------------------------------------------->

        <!-- Drop down menu-->
      </div>
    </div>
  </header>

  <!---- Header content ---->
</template>

<script>
import axios from '../../auth.js'


export default {

   data () {
    return {
      email: '',
    }
  },
  //created () {
    
    //this.$store.fetchUser.
   /* axios.get('http://localhost:3030/users')
    .then(res => {
      console.log(res)
      const data = res.data
      const users = []
      for(let key in data){
        const user = data[key]
        user.id = key
        users.push(user)
      }
      console.log(users)
      this.email = users[1].email
      })
    .catch( error => console.log(error))*/
  //}, 

  computed: {

      auth () {
        return this.$store.getters.isAuthenticated
      }
  },
 
  methods: {
   onLogout() {
        this.$store.dispatch('logout')
      }
    }

  };


</script>



<style lang="scss">
@import "../../assets/css/_master.scss";

.user--container{
    margin-top: -96px;
}

.hovered-dpn {
  width: 30px;
  border-style: none;
  background:none;
  box-shadow: none;
}

.hovered-dpn:hover button, .hovered-dpn:active button, .hovered-dpn:focus button{
  width: 30px;
  border-style: none;
  background:none;
  box-shadow: none;
}

.search--bar-box,.search--bar-box:hover,  .search--bar-box:focus{
  border:none;
  border-radius: 0;
}
</style>


