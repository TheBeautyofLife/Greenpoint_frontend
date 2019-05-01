// Import Vue and BootstrapVue
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import App from './App';
import axios from 'axios'
import * as firebase from 'firebase/app';


import router from './router';
import { store } from './store';



Vue.use(BootstrapVue);
Vue.config.productionTip = false

// Font awesome library
import {library, config } from '@fortawesome/fontawesome-svg-core';
import { faChevronDown, faChevronLeft, faChevronRight, faSearch, faExclamationTriangle, faUser,
  faMapMarkerAlt, faBell, faShoppingCart, faUpload, faHeart,
  faSmile, faQuestionCircle, faKeyboard,faCheckCircle,faArrowRight,faPen
} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faGoogle, faInstagram
} from '@fortawesome/free-brands-svg-icons';
import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome';

// others supporting modules

library.add(faFacebookF, faTwitter, faGoogle, faInstagram, 
  faChevronDown, faChevronLeft, faChevronRight, faSearch, faExclamationTriangle, faUser,
  faMapMarkerAlt, faBell, faShoppingCart, faUpload, faHeart,
  faSmile, faQuestionCircle, faKeyboard, faCheckCircle, faArrowRight,faPen);

config.autoAddCss = true;
Vue.component('fa-icon', FontAwesomeIcon);

 
/* eslint-disable no-new*/
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),

  created () {
   firebase.initializeApp({
      apiKey: process.env.FIREBASE_API_KEY,
      projectId: process.env.FIREBASE_PROJECT_ID,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      databaseURL: process.env.FIREBASE_DATABASE_URL,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
      });
   }
});




axios.defaults.baseURL = process.env.FIREBASE_DATABASE_URL;
// axios.defaults.headers.common['Authorization'] = 'fasfdsa'
axios.defaults.headers.get['Accepts'] = 'application/json';


