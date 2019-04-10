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
        <h1 class="main--title">Hi welcome back!</h1>
        <h2 class="sub--title">Login with</h2>
      </div>
    </div>

    <!-- Main Section -->
    <!-- Section One-->
    <div id="form--container">
      <div id="Section" class="sec-1">
        <!--The form starts here -->
        <form v-if="showLoginForm" id="register" @submit.prevent="signin">
          <div id="reg-card">
            <label class="descrption" for="email">Email</label>
            <br>
            <input type="text" v-model="email" class="usr--email" placeholder=" You@email.com" />
          </div>

          <div id="reg-card">
            <label class="descrption" for="password">Password</label>
            <br>
            <input type="password" v-model="password" class="usr--password toggle-pass" placeholder="********" />
          </div>

          <div id="submit--bttn">
            <button type="submit" class="submit" @click="login" form="register" value="Submit">Login</button>
          </div>
        
        
        <div class="extra-tools">
          <a class="link2" @click="togglePasswordReset">Forgot password</a>
          <router-link to="/signup" class="link2">Create an Account</router-link>
        </div>

        </form>

        
      </div>

      <!--Reset password form this will redirect to the popup page when the  -->
      <form v-if="showForgotPassword" class="password-reset">
        <div v-if="!passwordResetSuccess">
          <h1 class="sub--title">Reset Password</h1>
          <p class="info">Hey we will send you an email to reset your password</p>

          <lable class="decription" for="email2">Email</lable>
          <input type="text" placeholder="you@email.com" v-model="passwordForm.email" />

          <div id="submit--bttn">
            <button class="submit" @click="resetPassword" form="reset" value="Submit">Reset</button>
          </div>

          <div class="extar-tools">
            <a @click="togglePasswordReset">Back to login</a>
          </div>
        </div>
        <div v-else>
          <h1 class="notification">Email Sent</h1>
          <p class="info">Please check your email for a link to reset your password</p>
          <button @click="togglePasswordReset" class="submit">Back to login</button>
        </div>
      </form>

<!-- error message -->
      <transition name="fade">
        <div v-if="errorMsg !== ''" class="error-msg">
          <p>{{ errorMsg }}</p>
        </div>
      </transition>
<!--------------------->

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
            <fa-icon class="social-icons" :icon="['fab','google']"/>Sign in with Google
          </button>
        </div>
      </div>
    </div>
  </div>
  <!---- Main Section ---->
</template>


<script>
import firebase from 'firebase/app'
const vueonfire = require("../firebaseApp.js")

export default {
  name: 'login',
  data() {
    return {
      email: '',
      password: '',
      passwordForm: {
      email: ''
      },

      showLoginForm: true,
      showForgotPassword: false,
      passwordResetSuccess: false,
      performingRequest: false,
      errorMsg: ""
    }
  },
  methods: {
    toggleForm() {
      this.errorMsg = "";
      this.showLoginForm = !this.showLoginForm;
    },
    togglePasswordReset() {
      if (this.showForgotPassword) {
        this.showLoginForm = true
        this.showForgotPassword = false
        this.passwordResetSuccess = false
      } else {
        this.showLoginForm = false
        this.showForgotPassword = true
      }
    },

    /** Login in with email and password **/
    login() {
      let email = this.email
      let password = this.password
      vueonfire.auth.signInWithEmailAndPassword(
          this.email,
          this.password
        ).then((user) => {
          this.performingRequest = false;
          this.$router.replace("/");
        })
        .catch((err) => {
          /** Replace the alert message with the Greenponint alert component and firebase message **/
          console.log(err);
          this.performingRequest = false;
          this.errorMsg = err.message;
        });
    },

    /** Replace password **/
    resetPassword() {
      this.performingRequest = true;

      vueonfire.auth.sendPasswordResentEmail(this.passwordForm.email).this(() => {
          this.performingRequest = false;
          (this.passwordResetSuccess = true), 
          (this.passwordForm.email = "");
        }).catch((err) => { 
          console.log(err);
          this.performingRequest = false;
          this.errorMsg = err.message;
        });
    },

    /** Login in with social media **/
    SocialMedia() {
    const GoogleProvider = new firebase.auth.GoogleAuthProvider();

   firebase.auth().signInWithPopup(GoogleProvider).then((results) => {
          this.performingRequest = false;
          this.$router.replace("/");
        }).catch((err) => {
          console.log(err)
          this.performingRequest = false
          this.errorMsg = err.message
         })

        }
  }
};
</script>


<style lang="scss">
@import "../assets/css/_signup-login-home.scss";
</style>
