<template>
  <div class="Main--content">
    <headerComponent/>

    <!-- Main Section -->

    <!-- Main  section one -->
    <div id="main-container">
      <div id="carousel--info_ads">
        <b-carousel
          id="adverts-more-info"
          controls
          indicators
        
        >
          <b-carousel-slide
            class="c-box-1"
            caption=" "
            img-src="https://res.cloudinary.com/drsayrtmp/image/upload/v1554208169/greenpoint/Advert_1.png"
          />
          <b-carousel-slide
            class="c-box-2"
            caption=" "
            img-src="https://res.cloudinary.com/drsayrtmp/image/upload/v1554207818/greenpoint/Advert_2.png"
          />
          <b-carousel-slide
            class="c-box-3"
            caption=" "
            img-src="https://res.cloudinary.com/drsayrtmp/image/upload/v1554207824/greenpoint/Group.png"
          />
        </b-carousel>
      </div>

      <div id="left-newsletter">
        <div class="news--title news--input">
          <h3>New to GreenPoint?</h3>
          <p class="sub-title">Sign up now to our newsletter!</p>
          <input type="email" class="news--inemail">
        </div>
        <div id="fun-info-icons">
          <div class="nw">
            <span class="elips-orng smile--icon">
              <fa-icon class="funicon" icon="heart"/>
            </span>
            <p>Updates & e-waste news</p>
          </div>
          <div class="nw">
            <span class="elips-orng heart--icon">
              <fa-icon class="funicon" icon="smile"/>
            </span>
            <p>Amazing discounts!</p>
          </div>
        </div>
        <button class="send-email-to">Send</button>
      </div>
    </div>
    <!-------------------------------------------------------->

  <div id="need-help">
          <div class="upload-ico">
            <fa-icon class="upload-icon" icon="question-circle"/>
             <router-link to="/info/faq" class="link2">
             <p class="tradein-upload">Need Help?</p>
             </router-link>
          </div>
       
  </div>

    <!-- Main  section two - Browsing different categories -->
    <div id="main-container-others">
      <div id="category--title">
        <h2 class="category-title">Browse Items You Have Posted</h2>
        <span class="horizontal-line"></span>
      </div>

      <!-- card category group -->
      <div id="category-card-grp">
        <b-card-group>
          <!-- card one -->
          <b-card
            class="site-categories"
            title="Electronic parts"
            img-src="/src/assets/imgs/parts.png"
            img-alt="Image"
            img-top>
            <router-link to="/home/other" class="link2">
              <b-button class="btn--colour">
                More
                <fa-icon class="btn--arrow-right" icon="arrow-right"/>
              </b-button>
            </router-link>
          </b-card>

          <!-- card two -->
          <b-card
            class="site-categories"
            title="Computer devices"
            img-src="/src/assets/imgs/It-devices.png"
            img-alt="Image"
            img-top>
            <router-link to="/home/computer" class="link2">
              <b-button class="btn--colour">
                More
                <fa-icon class="btn--arrow-right" icon="arrow-right"/>
              </b-button>
            </router-link>
          </b-card>

          <!-- card three -->
          <b-card
            class="site-categories"
            title="All Appliances"
            img-src="/src/assets/imgs/appliances.png"
            img-alt="Image"
            img-top>
           <router-link to="#" class="link2">
              <b-button class="btn--colour">
                More
                <fa-icon class="btn--arrow-right" icon="arrow-right"/>
              </b-button>
            </router-link>
          </b-card>

          <!-- card four -->
          <b-card
            class="site-categories"
            title="Phones & Tablets "
            img-src="/src/assets/imgs/mobile.png"
            img-alt="Image"
            img-top>
            <router-link to="#" class="link2">
              <b-button class="btn--colour">
                More
                <fa-icon class="btn--arrow-right" icon="arrow-right"/>
              </b-button>
            </router-link>
          </b-card>

        </b-card-group>
      </div>
    </div>
    <div id="get-started">
      <h1 class="titleGT">Get Started</h1>
      <router-link to="/info/how_it" class="link2">
          <div class="upload-ico icon1">
            <p class="tradein-upload">Get Started</p>
          </div>
        </router-link>
      </div>
    <!-------------------------------------------------------->

    <!---- Main Section ---->
    <footerComponent/>
  </div>
</template>

<script>
import headerComponent from "../components/Navigation/header";
import footerComponent from "../components/Navigation/footer";


export default {
  name: "Home",

  components: {
    footerComponent,
    headerComponent
  },

  methods: {

    }
  };
</script>


<style lang="scss">
@import "../assets/css/_master.scss";
</style>

