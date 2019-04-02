<template>
 
<div class="Main--content">
<headerComponent/>


<!-- Main Section -->

<!-- Main  section one -->
<div id="main-container">
  <div id="carousel--info_ads">
    <b-carousel id='adverts-more-info' 
    v-model="slide" 
    :interval="4500" 
    controls 
    indicators  
    @sliding-start="onSlideStart"
    @sliding-end="onSlideEnd" >

    <b-carousel-slide class="c-box-1" caption="laptops | electronics" img-src="" />
    <b-carousel-slide class="c-box-2" caption="phones | electronics" img-src="" />
    <b-carousel-slide class="c-box-3" caption="Fridge | home appliances" img-src="" />
    <b-carousel-slide class="c-box-4" caption="laptops | electronics" img-src="" />
    <b-carousel-slide class="c-box-5" caption="laptops | electronics" img-src="" />
    
    </b-carousel>
    </div>

    <div class="left-newsletter"> 
    <div id="news--title news--input"> 
    <h3> New to GreenPoint</h3>
    <p class="sub-title"> Sign up now to our newsletter!</p>

    </div>

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
     <b-card class="site-categories" title="Large household appliances" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top></b-card>
     <b-card class="site-categories" title="Small household appliances" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top></b-card>
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

