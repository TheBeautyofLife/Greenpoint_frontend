// Import Vue and BootstrapVue
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router'

Vue.use(BootstrapVue);
Vue.config.productionTip = false

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

 
new Vue({
  el: '#app',
  router,
  render: h => h(App),
})