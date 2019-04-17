// Import Vue and BootstrapVue
import Vue from 'vue'
//import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue'
import firebase from 'firebase/app'


// Import Vue App, routes, store
import App from './App'
import router from './router'

Vue.config.productionTip = false;
//Vue.use(VueRouter);

// Font awesome library
import {
  library,
  config
} from '@fortawesome/fontawesome-svg-core';
import { faChevronDown, faSearch, faExclamationTriangle, faUser,
  faMapMarkerAlt, faBell, faShoppingCart, faUpload, faHeart,
  faSmile, faQuestionCircle, faKeyboard,faCheckCircle,faArrowRight,faPen
} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faGoogle, faInstagram
} from '@fortawesome/free-brands-svg-icons';
import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome';
import { callbackify } from 'util';

// others supporting modules

library.add(faFacebookF, faTwitter, faGoogle, faInstagram, 
  faChevronDown,faSearch, faExclamationTriangle, faUser, 
  faMapMarkerAlt, faBell, faShoppingCart, faUpload, faHeart,
  faSmile, faQuestionCircle, faKeyboard, faCheckCircle, faArrowRight,faPen);

config.autoAddCss = true;

Vue.component('fa-icon', FontAwesomeIcon);

Vue.use(BootstrapVue);

 

/*const router = new VueRouter({
  routes,
  linkActiveClass: 'active',
  mode: 'history'
}); 


new Vue({
  el: '#app',
  render: h => h(App),
 ,
});*/

let app = null;


firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      el: '#app',
      router,
      render: h => h(App)
    })
  }
})