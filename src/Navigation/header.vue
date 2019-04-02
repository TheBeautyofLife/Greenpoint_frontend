<template>
  <!-- Header content -->

  <header class="head--container">
    <div class="greenpoint-logo">
      <router-link to="/">
        <img src="../assets/imgs/_logo.png" class="logo logo--size">
      </router-link>
    </div>

    <div class="search-bar user-icon menu-dropdwn" id="top-menu">
      <div id="search--container search--icon" class="search--container box">
        <!--This is the drop down menu for the search option-->
        <b-dropdown class="drpdwn--list box-1" variant="link" size="sm" no-caret>
          <template slot="button-content">
            <fa-icon id="dropdwn-s" icon="chevron-down"/>
          </template>
          <b-dropdown-item>Large household...</b-dropdown-item>
          <b-dropdown-item>Small household...</b-dropdown-item>
          <b-dropdown-item>Information tech...</b-dropdown-item>
          <b-dropdown-item>Consumer equipment</b-dropdown-item>
          <b-dropdown-item>Lighting equipment</b-dropdown-item>
          <b-dropdown-item>Electrical and...</b-dropdown-item>
          <b-dropdown-item>Monitoring and...</b-dropdown-item>
        </b-dropdown>

        <input
          type="search"
          class="search--bar-box"
          placeholder="Search for a product or parts... "
        >
        <div class="search--icon box-2">
          Search
          <fa-icon id="search--icon" icon="search"/>
        </div>
      </div>

      <div class="user--container">
        <!-- This is the section where the users icon will appear-->
        <div id="active--user-icon">
          <div class="Usr--icon">
            <fa-icon class="faicon" icon="user"/>
          </div>
          <div class="Usr--name">Username</div>

          <div>
            <b-dropdown variant="link" size="lg" no-caret>
              <template class="drpdwn-usermenu" slot="button-content">
                <fa-icon class="drp-dwn-icon" icon="chevron-down"></fa-icon>
              </template>

              <b-dropdown-item>
                <router-link to="/signin" class="link2">Login</router-link>
              </b-dropdown-item>
              <b-dropdown-item>
                <router-link to="/signup" class="link2">Register</router-link>
              </b-dropdown-item>
              <b-dropdown-item>
                <router-link to="/post_item" class="link2">Post items</router-link>
              </b-dropdown-item>
              <b-dropdown-divider/>
              <b-dropdown-item>My account</b-dropdown-item>
              <b-dropdown-item>Settings</b-dropdown-item>
              <b-dropdown-item @click="logout">Logout</b-dropdown-item>
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
const vueonfire = require("../firebaseApp.js");

export default {
  methods: {
    logout: function() {
      vueonfire.auth.signOut().then(() => {
        this.$router.replace("/signin");
      });
    }
  }
};
</script>



<style lang="scss">
@import "../assets/css/_master.scss";
</style>


