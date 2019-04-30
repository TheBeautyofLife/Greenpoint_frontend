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
            <span class="faicon"> <!-- {{ user.photoURL }} --></span>
            <p v-if="user"> Hello <!--{{ user.email }} --></p>
          </div>

          <div id="dropdwn-size">
            <b-dropdown variant="link" size="sm" no-caret class="hovered-dpn">
              <b-dropdown-item>
                <router-link to="/signin" class="link2">Login</router-link>
              </b-dropdown-item>

              <b-dropdown-item >
                <router-link to="/signup" class="link2">Register</router-link>
              </b-dropdown-item>

              <b-dropdown-item>
                <router-link to="/post_item" class="link2">Post items</router-link>
              </b-dropdown-item>

              <b-dropdown-divider/> 

              <b-dropdown-item>
                <router-link to="/post_item" class="link2">My account </router-link>
                </b-dropdown-item>
              <b-dropdown-item>Settings</b-dropdown-item>
              <b-dropdown-item >Logout</b-dropdown-item>
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
import firebase from 'firebase/app';

export default {
  
  
  data () {
    return {
      user: null
    }
  },
  methods: {
  
   /*  logout() {
      firebase.auth().signOut().then(() => {
        this.$router.replace("/");
      });
    } */
  },

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


