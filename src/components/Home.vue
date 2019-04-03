<template>
 
<div class="Main--content">
<headerComponent/>


<!-- Main Section -->

<!-- Main  section one -->
<div id="main-container">

  <div id="left-nav-menu">
   <router-link to="/post_item" class="link2"><div class="upload-ico icon1"> <fa-icon class="upload-icon" icon="upload" /> <p class="tradein-upload">Trade-in your device</p> </div></router-link> 
   <router-link to="/post_item" class="link2"><div class="upload-ico icon2"> <fa-icon class="upload-icon" icon="upload" /> <p class="tradein-upload">Need Help?</p> </div></router-link> 
  </div>

  <div id="carousel--info_ads">
    <b-carousel id='adverts-more-info' 
    v-model="slide" 
    :interval="4500" 
    controls 
    indicators  
    @sliding-start="onSlideStart"
    @sliding-end="onSlideEnd" >

    <b-carousel-slide class="c-box-1" caption=" " img-src="https://res.cloudinary.com/drsayrtmp/image/upload/v1554208169/greenpoint/Advert_1.png" />
    <b-carousel-slide class="c-box-2" caption=" " img-src="https://res.cloudinary.com/drsayrtmp/image/upload/v1554207818/greenpoint/Advert_2.png" />
    <b-carousel-slide class="c-box-3" caption=" " img-src="https://res.cloudinary.com/drsayrtmp/image/upload/v1554207824/greenpoint/Group.png" />
    
    </b-carousel>
    </div>

    <div id="left-newsletter"> 
    <div class="news--title news--input"> 
    <h3> New to GreenPoint? </h3>
    <p class="sub-title"> Sign up now to our newsletter!</p>
    <input type="email" class="news--inemail" />
    </div>
    <div id="fun-info-icons">
     <div class="nw"><span class="elips-orng smile--icon"></span><p>Updates & e-waste news</p></div>
    <div class="nw"><span class="elips-orng heart--icon"></span><p>Amazing discounts! </p></div>
    </div>
    <button class="send-email-to">Send</button>


    </div>

</div>
<!-------------------------------------------------------->

<!-- Main  section two - Browsing different categories -->
<div id="main-container-others">

  <div id="category--title">
    <h2 class="category-title">Browse our categories</h2>
    <span class="horizontal-line"></span>
  </div>

  <div id="category-card-grp">
   <b-card-group> 

     <b-card class="site-categories" title="Electronic parts" img-src="https://res.cloudinary.com/drsayrtmp/image/upload/c_scale,h_300,w_400/v1554186893/Spare-parts-fridge-3__281_29.jpg" img-alt="Image" img-top></b-card>
     <b-card class="site-categories" title="IT devices" img-src="https://res.cloudinary.com/drsayrtmp/image/upload/c_scale,h_300/v1554116282/Lenovo_G500s_laptop-2905.jpg" img-alt="Image" img-top></b-card>
     <b-card class="site-categories" title="Large household appliances" img-src="https://res.cloudinary.com/drsayrtmp/image/upload/c_scale,h_300/v1554194210/greenpoint/9274803316_aa60eda69e_b.jpg" img-alt="Image" img-top></b-card>
     <b-card class="site-categories" title="Cameras and other devices" img-src="https://res.cloudinary.com/drsayrtmp/image/upload/c_scale,h_300/v1554187665/greenpoint/6370165813_88263c2611_b.jpg" img-alt="Image" img-top></b-card>
     <b-card class="site-categories" title="Mobile phones | tablets "  img-src="https://res.cloudinary.com/drsayrtmp/image/upload/c_thumb,h_300,w_400/v1554186746/LG_G4-2.jpg" img-alt="Image" img-top></b-card>
    <b-card class="site-categories" title="TVs | Entertainment devices" img-src="https://res.cloudinary.com/drsayrtmp/image/upload/c_scale,h_300,w_400/v1554187811/SONIQ_-_TV_1.jpg" img-alt="Image" img-top></b-card>
  </b-card-group>
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
        name: 'Home',
    
    components: {
    footerComponent,
    headerComponent
  }

    }
</script>


<style lang="scss">
@import "../assets/css/_master.scss";

</style>

