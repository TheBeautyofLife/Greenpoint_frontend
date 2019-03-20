<template>
 
<div class="Main--content">
<headerComponent></headerComponent> 


<!-- Main Section -->

<errorComponent></errorComponent>

<!---- Main Section ---->
<footerComponent></footerComponent> 
</div>
</template>

<script>
import errorComponent from '../Navigation/error'
import headerComponent from '../Navigation/header'
import footerComponent from '../Navigation/footer'

    export default {
        name: 'Home',
    
    components: {
    errorComponent,
    headerComponent,
    footerComponent
  }

    }
</script>


<style lang="scss">
@import "../assets/css/_master.scss"

</style>

