<template>
  <div class="Main--content">
    <headerComponent></headerComponent>
    <navComponent></navComponent>
    <!-- Main Section -->


    <div id="section--level">
    
      <div class="postingItem-1">
        <span class="blob-active"></span>
        <p>Product Information</p>
      </div>
      <div class="reviewItem-2">
        <span class="blob_inactive"></span>
        <p>Final Step</p>
      </div>
    </div>

    <div id="container-center">
      <b-form class="post-item" @submit.prevent="onSubmit" @reset="onReset" v-if="show">
        <b-form-group id="product-title" label="Product Title *" label-for="productInput1">
          <b-form-input
            id="productInput1"
            type="text"
            v-model="form.title"
            required
          />
        </b-form-group>


      <div class="product-type-manu">
          <b-form-group class="box-type2" id="product-type" label="Product Type*" label-for="productInput2">
            <b-form-select
              class="item--selector"
              id="productInput2"
              type="text"
              :options="type"
              required
              v-model="form.type"
            />
          </b-form-group>

          <b-form-group class="box-type2 " id="product-manu" label="Product Manufacture*" label-for="productInput3">
            <b-form-input
              id="productInput3"
              type="text"
              v-model="form.manu"
              required
            />
          </b-form-group>
      </div>

          <b-form-group class="box-type2" id="product-year" label="Year*" label-for="productInput4">
            <b-form-select
              class="item--selector"
              id="productInput4"
              type="text"
              :options="year"
              required
              v-model="form.year"/>
          </b-form-group>
       
       <div class="horizontal-line"></div>

       <b-form-group class="box-type2 " id="product-functional" label="List key functional features*" label-for="productInput5">
            <b-form-textarea
              id="productInput5"
              type="text"
              v-model="form.functional"
              rows="3"
              max-rows="6"/>
      </b-form-group>

          <button type="submit" class="buttons-x btn-help">submit</button>
          <button type="text" class="buttons-x btn-help">reset</button>
      </b-form>
    </div>

    <!---- Main Section ---->
  </div>
</template>

<script>
import axios from 'axios';
//import {APIService} from '../APIservice';

//const API_URL = 'http://3622174d.ngrok.io';
//const apiService = new APIService();



import navComponent from "../../../components/Navigation/Nav";
import headerComponent from "../../../components/Navigation/header";
import footerComponent from "../../../components/Navigation/footer";

export default {
  name: "Post_item",

  data() {
    return {
      form: {
        title: "",
        manu: "",
        type: null,
        year: null,
        functional: ""
      },
      /* the options for the  */
      type: [
        { text: "Select One", value: null },
        "Refrigerators",
        "networking equipment",
        "mobile phones",
        "Vacuum cleaners",
        "water dispensers",
        "toasters",
        "fryers",
        "Electric trains or car racing sets",
        "hand-held video game",
        "video games",
        "Fluorescent tubes",
        "compact fluorescent lamps",
        "high intensity discharge lamps",
        "Scanners",
        "personal computers (CPU, mouse, screen and keyboard etc)",
        "laptop computers",
        "printers"
      ],

      year: [
        { text: "Select the year", value: null },
        "2000",
        "2001",
        "2003",
        "2004",
        "2005",
        "2006",
        "2007",
        "2008",
        "2009",
        "2010",
        "2011",
        "2012",
        "2013",
        "2014",
      ],
      show: true
    };
  },

methods: {
  onSubmit(){
  apiService.postProduct().then((data) => {
    this.form,
    console.log(data)
  });
  
  }
},
  components: {
    navComponent,
    headerComponent,
    footerComponent
  }
};
</script>


<style lang="scss">
@import "../../../assets/css/post_view.scss";
</style>