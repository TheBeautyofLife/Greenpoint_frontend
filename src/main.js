// Import Vue and BootstrapVue
import Vue from 'vue';
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue';

// Import Vue App, routes, store
import App from './App';
import routes from './router';
/* import store from '@/config/store'; */



// Font awesome library
import {
  library,
  config
} from '@fortawesome/fontawesome-svg-core';
import { faChevronDown, faSearch, faExclamationTriangle, faUser,
  faMapMarkerAlt, faBell, faShoppingCart, faUpload, faHeart,
  faSmile, faQuestionCircle, faKeyboard,faCheckCircle
} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faGoogle, faInstagram
} from '@fortawesome/free-brands-svg-icons';
import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome';

// others supporting modules

library.add(faFacebookF, faTwitter, faGoogle, faInstagram, 
  faChevronDown,faSearch, faExclamationTriangle, faUser, 
  faMapMarkerAlt, faBell, faShoppingCart, faUpload, faHeart,
  faSmile, faQuestionCircle, faKeyboard, faCheckCircle);

config.autoAddCss = true;

Vue.component('fa-icon', FontAwesomeIcon);

Vue.config.productionTip = false;


Vue.use(BootstrapVue);

// Configure router

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  linkActiveClass: 'active',
  mode: 'history'
});



new Vue({
  el: '#app',
  render: h => h(App),
  router,
});

