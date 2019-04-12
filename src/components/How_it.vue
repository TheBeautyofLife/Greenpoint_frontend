<template>
  <div class="Main--content">
    <headerComponent/>

    <!-- Main Section -->

    <!-- Main  section one -->
    <div id="main--container">
      <div id="top">
        <h1 class="how-to-main">HOW IT WORKS</h1>
      </div>

      <div id="how-to-section">
        <br>

        <div id="card-section">
          <div id="card-info">
            <span class="circle-box card1">
              <fa-icon class="icon-center" icon="keyboard"/>
            </span>
            <h3 class="more-info-title">Product Info.</h3>
            <p
              class="more-info more1"
            >Click on the 'Start Posting' buttion to be redirected to a different page</p>
          </div>

          <div id="card-info">
            <span class="circle-box card2">
              <fa-icon class="icon-center" icon="check-circle"/>
            </span>
            <h3 class="more-info-title">Confirm Info.</h3>
            <p class="more-info more2">
              When you are on the post item page,
              fill in all te required details
            </p>
          </div>

          <div id="card-info">
            <span class="circle-box card3">
              <fa-icon class="icon-center" icon="keyboard"/>
            </span>
            <h3 class="more-info-title">Get Rewards</h3>
            <p class="more-info more3">Submit your form, then wait for a response.</p>
          </div>
        </div>
      </div>

      <div id="buttons--selection">
        <router-link to="/post_item">
          <button type="button" class="buttons-x btn-postItem">START POSTING</button>
        </router-link>
        <router-link to="/contactus">
          <button type="button" class="buttons-x btn-support">GET SUPPORT</button>
        </router-link>
        <router-link to="/faq">
          <button type="button" class="buttons-x btn-help">FAQ</button>
        </router-link>
      </div>

      <div id="carousel--info_ads" class="arr--left">
        <b-carousel
          id="adverts-more-info"
          v-model="slide"
          :interval="4500"
          fade
          indicators
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
        >
          <b-carousel-slide
            caption="I posted my old electronices for free, and got points - Ann Njeri"
            img-alt
          />
          <b-carousel-slide
            caption="I can buy new tv not worrying where to dispose the old ones - Mike Ooro"
            img-alt
          />
        </b-carousel>
      </div>
    </div>

    <!-------------------------------------------------------->

    <!---- Main Section ---->
    <footerComponent/>
  </div>
</template>



<script>
import headerComponent from "../Navigation/header";
import footerComponent from "../Navigation/footer";

export default {
  name: "/how_it",

  components: {
    headerComponent,
    footerComponent
  }
};
</script>


<style lang="scss">
@import "../assets/css/_master.scss";
</style>