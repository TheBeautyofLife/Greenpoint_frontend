// Import Vue
import Vue from 'vue';
import VueRouter from 'vue-router';

// Import Vue App, routes, store
import App from './App';
import routes from './routes';

// Font awesome library
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCoffee)

Vue.component('fa-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(VueRouter);

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