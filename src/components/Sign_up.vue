<template>
   <div class="Main--content">

<div class="logo--top logo-size"> <img src="../assets/imgs/_logo.png" alt="Greenpoint" class="logo"> </div>
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
    <form action="" id="register">
       <div id="reg-card">
        <label class="descrption" v-model="fullname" for="name"> Full name</label>
        <br/>
        <input type="text" name="text" class="usr--name" />
      </div>
       <div id="reg-card">
        <label class="descrption" v-model="email" for="email"> Email</label>
        <br/>
        <input type="email" name="email" class="usr--email" />
      </div>
      <div id="reg-card">
        <label class="descrption" v-model="phone" for="phone"> Phone</label>
        <br/>
        <input type="text" name="phone" class="usr--phone" />
      </div>

      <div id="reg-card">
        <label class="descrption" v-model="password" for="create-password"> Create a Password</label>
        <br/>
        <input type="password" name="create-password" class="usr--password toggle-pass" />
      </div>

      <div id="reg-card">
        <label class="descrption" v-model="repeatpass" for="repeat-password"> Repeat Password</label>
        <br/>
        <input type="password" name="repeat-password" class="usr--password toggle-pass" />
      </div>
    
        <div id="submit--bttn">
          <button type="submit" @click="registerSub" class="submit" form="register" value="Submit">Sign Up</button>
        </div>
      </form>
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
      <button @click="SocialMedia" id="social-butts google_g"> <fa-icon class="social-icons" :icon="['fab','google']" />  Sign up with Google </button> 
    </div>
</div>


  </div>
</div>
<!---- Main Section ---->
</template>

<script>
import '../firebaseApp.js'

    export default {
        name: 'Signin',
         data() {
          return {
            fullname: '',
            email: '',
            password:''
          }
         },
          methods: {
            /** Login in with email and password **/
            login() {
              firebase.auth().createInWithEmailAndPassword(this.email, this.password).then(
              (user) => { 
                this.$router.replace('/'); 
                }).catch((err) => {
                /** Replace the alert message with the Greenponint alert component and firebase message **/
                alert('Oh no! ' + err.message)
              });
            },

             /** Login in with social media **/
          SocialMedia(){
            const GoogleProvider = new firebase.auth.GoogleAuthProvider();

            firebase.auth().signInWithPopup(GoogleProvider).then((results) => {
              this.$router.replace('/');
            }).catch((err)=> {
              alert('Gosh! there is a serious problem here' + err.message)
            });
          }   

          }
        }
</script>



<style lang="scss">
@import "../assets/css/_signup-login-home.scss"
</style>


