<template>
  <div class="Main--content">
    <headerComponent></headerComponent>
    <navComponent></navComponent>
    <!-- Main Section -->

    <div id="section--level">
      <div class="postingItem-1">
        <span class="blob_inactive"></span>
        <p>Product Information</p>
      </div>
      <div class="reviewItem-2">
        <span class="blob-active"></span>
        <p>Final Step</p>
      </div>
    </div>

    <div id="container-center">
      <b-form class="post-item" @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group id="product-title" label="Product Title *" label-for="productInput1">
          <b-form-input
            id="productInput1"
            type="text"
            v-model="form.title"
            required
            placeholder="What is the name of the product?"
          />
        </b-form-group>

        <div id="product-type-manu">
          <b-form-group
            class="box-type1"
            id="product-type"
            label="Product Type*"
            label-for="productInput2"
          >
            <b-form-select
              class="item--selector"
              id="productInput2"
              :options="types"
              required
              v-model="form.type"
            />
          </b-form-group>

          <b-form-group
            class="box-type2"
            id="product-manu"
            label="Product Manufacture*"
            label-for="productInput3"
          >
            <b-form-input
              id="productInput3"
              type="text"
              v-model="form.manu"
              required
              placeholder="Who is the manufacturer of the product?"
            />
          </b-form-group>

          <b-form-group class="box-type2" id="product-year" label="Year*" label-for="productInput4">
            <b-form-select
              class="item--selector"
              id="productInput4"
              type="text"
              :options="year"
              required
              v-model="form.year"
            />
          </b-form-group>
        </div>
      </b-form>
    </div>

    <!---- Main Section ---->
  </div>
</template>

<script>
import navComponent from "../Navigation/Nav.vue";
import headerComponent from "../Navigation/header";
import footerComponent from "../Navigation/footer";

export default {
  data() {
    return {
      form: {
        title: "",
        type: null,
        year: null
      },

      show: true
    };
  },

  name: "Home",

  components: {
    navComponent,
    headerComponent,
    footerComponent
  }
};
</script>


<style lang="scss">
@import "../assets/css/post_view.scss";
</style>