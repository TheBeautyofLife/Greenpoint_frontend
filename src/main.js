// Import Vue and BootstrapVue
import Vue from 'vue';
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue'

// Import Vue App, routes, store
import App from './App';
import routes from './routes';

// Font awesome library
import {
  library,
  config
} from '@fortawesome/fontawesome-svg-core';
import {
  faChevronDown,
  faSearch,
  faExclamationTriangle,
  faUser,
  faMapMarkerAlt,
  faBell,
  faShoppingCart
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faTwitter,
  faGoogle,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';
import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome';

// others supporting modules

library.add(faFacebookF, faTwitter, faGoogle, faInstagram, faChevronDown, faSearch, faExclamationTriangle, faUser, faMapMarkerAlt, faBell, faShoppingCart);

config.autoAddCss = true;

Vue.component('fa-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(BootstrapVue);

// Configure router
const router = new VueRouter({
  routes,
  linkActiveClass: 'active',
  mode: 'history'
});

new Vue({
  el: '#app',
  render: h => h(App),
  router
});


new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>'
})