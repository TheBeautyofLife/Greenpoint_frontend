<template>
  <div class="Main--content">
    <!-- loading sign up for the user -->
    <transition name="fade">
      <div v-if=" performingRequest" class="loading">
        <b-spinner type="grow" label="Loading..."></b-spinner>
      </div>
    </transition>

    <div class="logo--top logo-size">
      <img src="../assets/imgs/_logo.png" alt="Greenpoint" class="logo">
    </div>
    <div class="headers-main">
      <div class="page--title">
        <h1 class="main--title">Hi Welcome!</h1>
        <h2 class="sub--title">Sign up with</h2>
      </div>
    </div>
    <!-- Main Section -->

    <!-- Section One-->
    <div id="form--container">
      <div id="Section" class="sec-1">
        <!--The form starts here -->
        <form v-if="showSignupForm" id="register">
          <div id="reg-card">
            <label class="descrption" for="name">Full name</label>
            <br>
            <input type="text" v-model="fullname" name="text" class="usr--name">
          </div>
          <div id="reg-card">
            <label class="descrption" for="email">Email</label>
            <br>
            <input type="email" v-model="email" name="email" class="usr--email">
          </div>
          <div id="reg-card">
            <label class="descrption" for="phone">Phone</label>
            <br>
            <input type="text" v-model="phone" name="phone" class="usr--phone">
          </div>

          <div id="reg-card">
            <label class="descrption" for="create-password">Create a Password</label>
            <br>
            <input
              type="password"
              v-model="password"
              placeholder="Minimum 6 characters"
              name="create-password"
              class="usr--password toggle-pass"
            >
          </div>

          <div id="submit--bttn">
            <button
              type="submit"
              @click="register"
              class="submit"
              form="register"
              value="Submit"
            >Sign Up</button>
          </div>

        
        </form>
  
<!-- error message -->
      <transition name="fade">
                    <div v-if="errorMsg !== ''" class="error-msg">
                        <p>{{ errorMsg }}</p>
                    </div>
      </transition>
<!--------------------->

      </div>

      <!-- Section Two-->
      <div id="Section" class="sec-2">
        <div class="vertical-line"></div>
        <p class="center--txt">Or</p>
        <div class="vertical-line"></div>
      </div>

      <!-- Section Two-->
      <div id="Section" class="sec-3">
        <div class="social-signup-buttons">
          <h2 class="sub--title">With</h2>
          <button @click="SocialMedia" id="social-butts google_g">
            <fa-icon class="social-icons" :icon="['fab','google']"/>Sign up with Google
          </button>
        </div>
      </div>
    </div>
  </div>
  <!---- Main Section ---->
</template>

<script>
import firebase from 'firebase/app'
const vueonfire = require('../firebaseApp.js')

export default {
  name: 'Signup',
data() {
  return {
    fullname: '',
    email: '',
    phone:'',
    password:'',
    showSignupForm: true,
    performRequest: false
    }
},
  methods: {
  /** Login in with email and password **/
  login() {
    firebase.auth().createInWithEmailAndPassword(this.email, this.password).then((user) => { 
      this.$router.replace('/'); 
    }).catch((err) => {
      console.log(err)
      this.performingRequest = false
      this.errorMsg = err.message
    })
  },
         
    /** Login in with social media **/
    SocialMedia() {
    const GoogleProvider = new firebase.auth.GoogleAuthProvider();

   firebase.auth().signInWithPopup(GoogleProvider).then((results) => {
          console.log(results)
          this.performingRequest = false;
          this.$router.replace("/");
        }).catch((err) => {
          console.log(err)
          this.performingRequest = false
          this.errorMsg = err.message
         })

        }
}
}
</script>



<style lang="scss">
@import "../assets/css/_signup-login-home.scss";
</style>


