<template>
<div class="Main--content">
<headerComponent/>


<!-- Main Section -->
<!-------------------------------------------------------->
<div id="main--container">
    <div id="headers-main">
      <div class="page--title">
        <h1 class="main--title">Need Help? </h1>
        <h5 class="main--information">Please complete the form below 
            and we will get back to you.</h5>
      </div>
    </div>

<div id="form--container">   

<!-- Section One-->
<div id="Section" class="sec-1">
<form id="contact-us">
  <div id="help-card" class="contacts">
      <div class="space-0">  
       <label class="descrption" for="name">Full name</label><br>
       <input type="text" v-model="fullname" name="text" class="box-contact usr--name name-contacts">
      </div>

    <div class="space-I">  
       <label class="descrption" for="phone">Phone</label><br>
        <input type="text" v-model="phone" name="phone" class="box-contact usr--phone">
    </div>
 </div>

 <div id="help-card">
    <label class="descrption" for="email">Email</label><br>
    <input type="email" v-model="email" name="email" class="box-contact usr--email email-contacts">
 </div>

  <div id="help-card">
    <label class="descrption" for="subject">Subject</label><br>
    <input type="text" v-model="subject" name="subject" class="box-contact usr--subject subject-contacts">
 </div>

 <div id="help-card">
    <label class="descrption" for="message">Message</label><br>
    <input type="text" v-model="message" name="message" class="box-contact usr--subject message-contacts">
 </div>

 <div id="submit--bttn">
    <button type="submit" @click="contact" class="submit" form="contact" value="Submit"> Submit </button>
 </div>
</form>
</div>
<!------------------>

<!-- Section Two-->
<div id="Section" class="sec-2">
<div class="vertical-line"></div>
</div>
<!------------------>

<!-- Section One-->
<div id="Section" class="sec-3">
<div class="contact--title">
    <h2 class="subtitle">Customer Service</h2>
    <p>07XXXXXXXX</p>
    <p>020XXXXXXX</p>
    <p>info@greenpointrecyclers.com</p>
</div>
</div>
<!------------------>
</div>
</div>
<!-------------------------------------------------------->

<!---- Main Section ---->
<footerComponent/>
</div>
</template>

<script>
import headerComponent from '../Navigation/header'
import footerComponent from '../Navigation/footer'

    export default {
        name: '/contactus',

        components: {
        headerComponent,
        footerComponent
        }
    }
</script>


<style lang="scss">
@import "../assets/css/_faq_support.scss"
</style>