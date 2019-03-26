<template>
<div class="Main--content">

<div class="logo--top logo-size"> <img src="../assets/imgs/_logo.png" alt="Greenpoint" class="logo"> </div>
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
    <form id="register">
      <div id="reg-card">
        <label class="descrption" for="email"> Email</label>
        <br/>
        <input type="email" name="email" class="usr--email" />
      </div>

      <div id="reg-card">
        <label class="descrption" for="create-password"> Password</label>
        <br/>
        <input type="password" name="create-password" class="usr--password toggle-pass" />
      </div>
    
        <div id="submit--bttn">
          <button type="submit" class="submit" @click="login" form="register" value="Submit">Login</button>
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
      <button id="social-butts google_g"> <fa-icon class="social-icons" :icon="['fab','google']" />  Sign up with Google </button> 
    </div>
</div>


  </div>
</div>
<!---- Main Section ---->
</template>


<script>
    export default {
        name: 'Signin',
         data() {
          return {}
         },
          methods: {
            login: function() {
              this.$router.replace('/home');
            } 
          }
        }
</script>


<style lang="scss">
@import "../assets/css/_signup-login-home.scss"
</style>
