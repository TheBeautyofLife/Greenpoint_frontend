<template>
  <div class="Main--content">
    <!-- loading sign up for the user -->

    <div id="logo--top">
      <img src="../../assets/imgs/_logo.png" alt="Greenpoint" class="logo">
    </div>
    <div class="headers-main">
      <div class="page--title">
        <h1 class="main--title">Hi Welcome!</h1>
        <h2 class="sub--title">Sign up with</h2>
      </div>
    </div>
    <!-- Main Section -->

    <!-- Section One-->
    <div id="form--container-2">
      <div id="Section" class="sec-01">
        <!--The form starts here -->
        <form v-if="showSignupForm" id="register" @submit.prevent="onSignup">
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
            <b-form-group label="What is your purpose?">
            <b-form-radio v-model="selected" name="Producer-radios" value="Producer"> To Post my e-waste (ie old phones, tvs etc)</b-form-radio>
            <b-form-radio v-model="selected" name="Buyer-radios" value="Buyer">To Buy e-waste</b-form-radio>
            </b-form-group>
            </div>
          

          <div id="reg-card">
            <label class="descrption" for="create-password">Create a Password</label>
            <br>
            <input type="password" v-model="password" placeholder="***********" name="create-password" class="usr--password toggle-pass"/>
          </div>

          <div id="reg-card">
            <label class="descrption" for="confirm-password">Confirm Password</label>
            <br>
            <input type="password" v-model="confirmPassword" placeholder=" " name="confirm-password" class="usr--cpassword " />
          </div>
          
          <div id="reg-card">
              <p>{{ feedback }}</p>
          </div>


          <div id="submit--bttn">
            <button type="submit" class="submit" form="register" value="Submit">Sign Up</button>
          </div>

        
        </form>


      </div>

      <!-- Section Two-->
      <div id="Section" class="sec-02">
        <div class="vertical-line-1"></div>
        <p class="center--txt">Or</p>
        <div class="vertical-line-1"></div>
      </div>

      <!-- Section Two-->
      <div id="Section" class="sec-03">
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
export default {
  name: 'Signup',
data() {
  return {
    fullname: '',
    email: '',
    phone:'',
    password:'',
    selected: '',
    feedback: '',
    confirmPassword: '',
    showSignupForm: true,
    performRequest: false
    }
},
computed: {
  
},
  methods: {
  /** Login in with email and password **/
  onSignup() {
  {
        const formData = {
          fullname: this.fullname,
          phone:this.phone,
          email: this.email,
          password: this.password,
          confirmPassword: this.confirmPassword,
        }
        console.log(formData)

        this.$store.dispatch('signup', formData)
      }
  },
         
    /** Login in with social media **/
    SocialMedia() {
    const GoogleProvider = new firebase.auth().GoogleAuthProvider();

   firebase.auth().signInWithPopup(GoogleProvider).then((results) => {
    console.log(results)
    this.$router.replace("/");
    }).catch((err) => {
      console.log(err)
      this.errorMsg = err.message
    })
  }
}
}
</script>



<style lang="scss">
@import "../../assets/css/_signup-login-home.scss";
</style>


