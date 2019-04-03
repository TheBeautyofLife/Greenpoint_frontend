<template>
<div class="Main--content">
<headerComponent/>


<!-- Main Section -->

<!-- Main  section one -->
<div id="main--container">

 <div id="how-to-section">
    <div class="top">
      <h1 class="how-to-main">HOW IT WORKS</h1>
    </div>

<div class="card-section">
    <div class="card-info card1"> <span class="circle-box"></span> </div>
    
    <div class="card-info card1">  </div>
    
    <div class="card-info card1">  </div>
</div>

 </div>

<div id="buttons--selection">
<button type="button" class="buttons-x btn-postItem">START POSTING</button>
<button type="button" class="buttons-x btn-support">SUPPORT</button>
<button type="button" class="buttons-x btn-help">FAQ</button>

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
        name: '/how_it',

        components: {
        headerComponent,
        footerComponent
        }
    }
</script>


<style lang="scss">
@import "../assets/css/_master.scss"
</style>