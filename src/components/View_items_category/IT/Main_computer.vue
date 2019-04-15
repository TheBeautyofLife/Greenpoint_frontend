<template>
<div class="Main--content">
<headerComponent/>


<!-- Main Section -->

<!-- Main top breadcrums -->
<div id="top-breadcrums">
    <div class="homeLink txt"><p>Home</p></div>
    <div class="categoryLink txt active-link"><p>IT</p></div>
   <!--  <div class="subCategoryLink"></div>
    <div class="choosenItemLink"></div> -->
</div>



<div id="nav-left">
 <h1>Nav</h1>
</div>

<!-- Main bottom nav -->

<!-- Main  section one -->
<div id="main-container-items" class="align--row">
<!-- card category group 1 -->

  <div id="item-card-grp" >
   <b-card-group> 
    <!-- card one -->
     <b-card class="item-cards"
       title="Electronic parts" 
       img-src="https://res.cloudinary.com/drsayrtmp/image/upload/c_scale,w_300/v1555073762/greenpoint/placeholder.png" 
       img-alt="Image" img-top>
       <b-card-text>
        Lorem ipsum dolor sit amet, consectetur... 
       </b-card-text>

       <b-button class="btn--colour"> More <fa-icon class="btn--arrow-right" icon="arrow-right"/> </b-button>
       </b-card>
    <!-- card one -->
     <b-card class="item-cards" 
     title="IT devices" 
     img-src="https://res.cloudinary.com/drsayrtmp/image/upload/c_scale,w_300/v1555073762/greenpoint/placeholder.png" 
     img-alt="Image" img-top>
       <b-card-text>
        View all laptops, destops and IT accessories you have posted... 
       </b-card-text>
       <router-link to="#" class="link2"><b-button class="btn--colour"> More <fa-icon class="btn--arrow-right" icon="arrow-right"/> </b-button></router-link>
     </b-card>

     <!-- card one -->
     <b-card class="item-cards" 
     title="All Appliances" 
     img-src="https://res.cloudinary.com/drsayrtmp/image/upload/c_scale,w_300/v1555073762/greenpoint/placeholder.png" 
     img-alt="Image" 
     img-top>
     <b-card-text class="card-text">
        View all the parts you have Home appliance you posted... 
       </b-card-text>
       <b-button class="btn--colour"> More <fa-icon class="btn--arrow-right" icon="arrow-right"/></b-button>
     </b-card>

     <b-card class="item-cards" 
     title="Phones & Tablets "  
     img-src="https://res.cloudinary.com/drsayrtmp/image/upload/c_scale,w_300/v1555073762/greenpoint/placeholder.png" 
     img-alt="Image" img-top>
     <b-card-text>
        View all the parts you have posted, modify posts... 
     </b-card-text>
       <b-button class="btn--colour"> More <fa-icon class="btn--arrow-right" icon="arrow-right"/> </b-button>
     </b-card>
  </b-card-group>
  </div>

<!-- card category group 1 -->
   <div id="item-card-grp" class="align--row">
   <b-card-group> 
    <!-- card one -->
     <b-card class="item-cards"
       title="Electronic parts" 
       img-src="https://res.cloudinary.com/drsayrtmp/image/upload/c_scale,w_300/v1555073762/greenpoint/placeholder.png" 
       img-alt="Image" img-top>
       <b-card-text>
        Lorem ipsum dolor sit amet, consectetur... 
       </b-card-text>

       <b-button class="btn--colour"> More <fa-icon class="btn--arrow-right" icon="arrow-right"/> </b-button>
       </b-card>
    <!-- card two -->
     <b-card class="item-cards" 
     title="IT devices" 
     img-src="https://res.cloudinary.com/drsayrtmp/image/upload/c_scale,w_300/v1555073762/greenpoint/placeholder.png" 
     img-alt="Image" img-top>
       <b-card-text>
        View all laptops, destops and IT accessories you have posted... 
       </b-card-text>
       <router-link to="#" class="link2"><b-button class="btn--colour"> More <fa-icon class="btn--arrow-right" icon="arrow-right"/> </b-button></router-link>
     </b-card>

     <!-- card three -->
     <b-card class="item-cards" 
     title="All Appliances" 
     img-src="https://res.cloudinary.com/drsayrtmp/image/upload/c_scale,w_300/v1555073762/greenpoint/placeholder.png" 
     img-alt="Image" 
     img-top>
     <b-card-text class="card-text">
        View all the parts you have Home appliance you posted... 
       </b-card-text>
       <b-button class="btn--colour"> More <fa-icon class="btn--arrow-right" icon="arrow-right"/></b-button>
     </b-card>

    <!-- card four -->
     <b-card class="item-cards" 
     title="Phones & Tablets "  
     img-src="https://res.cloudinary.com/drsayrtmp/image/upload/c_scale,w_300/v1555073762/greenpoint/placeholder.png" 
     img-alt="Image" img-top>
     <b-card-text>
        View all the parts you have posted, modify posts... 
     </b-card-text>
       <b-button class="btn--colour"> More <fa-icon class="btn--arrow-right" icon="arrow-right"/> </b-button>
     </b-card>
  </b-card-group>
  </div>
</div>
<!-------------------------------------------------------->

<!---- Main Section ---->
<footerComponent/>
</div>
</template>

<script>

import headerComponent from '../../../Navigation/header'
import footerComponent from '../../../Navigation/footer'



    export default {
        name: 'Main_computer',
    
    components: {
    footerComponent,
    headerComponent
  },


    }
</script>


<style lang="scss">
@import "../../../assets/css/_master.scss";

</style>

