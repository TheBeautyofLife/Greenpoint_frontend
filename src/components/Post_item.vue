<template>
 
<div class="Main--content">
<headerComponent></headerComponent> 
<navComponent></navComponent>

<!-- Main Section -->

<div id="container-center">

    <form action="" id="post-item">
        <div class="product-type"></div>
        


    </form>


</div>

<!---- Main Section ---->


</div>
</template>

<script>
    import navComponent from '../Navigation/Nav.vue'
    import headerComponent from '../Navigation/header'
    import footerComponent from '../Navigation/footer'

        export default {
            name: 'Home',
    
            components: {
                navComponent,
                headerComponent,
                footerComponent
            }

        }
</script>