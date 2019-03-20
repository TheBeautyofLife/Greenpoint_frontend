<template>
<!-- Header content -->

    <footer class="foot--container">
    <div class="footer-main">
        <div class="copyright--section">
           <p class="info"> &copy; Greenpoint Recyclers 2019  All Rights Reserved </p>
        </div>

        <div id="links">
            <p class="link-title">Resources</p>
            <ul class="links-to-other">
                <li class="legal">Legal </li>
                <li class="guides-and-help"><router-link class="link" to="/faq">Help</router-link></li>
                <li class="contact-us"><router-link class="link" to="/contactus"> Contact Us</router-link></li>
            </ul>
        </div>

        <div class="connect-with-us">
            <div class="social-icons">
                <p class="info info-2">Connect with us</p>
                <ul>
                    <li class="facekookf"><b-link class="link" href="https://facebook.com/"> <fa-icon :icon="['fab', 'facebook-f']"></fa-icon></b-link></li>
                    <li class="twitter"><b-link class="link" href="https://twitter.com/"><fa-icon :icon="['fab', 'twitter']"></fa-icon></b-link></li>
                    <li class="instagram"><b-link class="link" href="https://instagram.com/"><fa-icon :icon="['fab', 'instagram']"></fa-icon></b-link></li>
                </ul>
            </div>
        </div>
    </div>
    </footer>
    
<!---- Header content ---->

</template>

<style lang="scss">
@import "../assets/css/_master.scss"

</style>


