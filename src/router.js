/* Main */
import Vue from 'vue';
import Router from 'vue-router';
import { store } from './store'

import Home from '@/views/Home.vue';

//User components
import Sign_up from '@/views/User/Sign_up';
import Sign_in from '@/views/User/Sign_in';
import Account from '@/views/User/Account';

//information
import Contact_us from '@/views/Information/Contact_us';
import FAQ from '@/views/Information/FAQ';
import How_it from '@/views/Information/How_it';


//producers portal
import Post_item from '@/views/portals/Producers/Post_item.vue';
import items_collected from '@/views/portals/Producers/items_collected';
import Track_order from '@/views/portals/Producers/Track_order';

//buyers portal
import Cart from '@/views/portals/Buyers/Cart.vue';
import Checkout from '@/views/portals/Buyers//Checkout';






/** These are the router for viewing the item by category **/

import Electronic_parts from '@/views/View_items_category/Electronic_parts';
/*----------IT DEVICES---------*/
const Main_computer = () => import ('@/views/View_items_category/IT/Main_computer.vue');
//Categories
const Laptops = () => import('@/views/View_items_category/IT/Laptops');
import Computer_Acc from '@/views/View_items_category/IT/Computer_Acc';

//Subcategories for Laptop
import MacBooks from '@/views/View_items_category/IT/Laptops/MacBooks';
import Netbooks from '@/views/View_items_category/IT/Laptops/Netbooks';


//Subcategories for Computer_Acc
import Keyboard_mouse from '@/views/View_items_category/IT/Comp_acc/Keyboard_mouse';
import Monitor from '@/views/View_items_category/IT/Comp_acc/Monitors';

/*----------TV & SOUND devices---------*/



/*----------MOBILE DEVICES---------*/



//Mobile and tablet devices


Vue.use(Router);

export default new Router({
routes: [{
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/signup',
    name: 'Signup',
    component: Sign_up
  },

  {
    path: '/signin',
    name: 'Signin',
    component: Sign_in
  },

  {
    path: '/contactus',
    name: 'Contact_us',
    component: Contact_us
  },

  {
    path: '/info/faq',
    name: 'Faq',
    component: FAQ
  },

  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },

  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout
  },

  {
    path: '/producer/post_item',
    name: 'Post_item',
    component: Post_item,

     beforeEnter(to, from, next) {
       if (store.state.idToken) {
         next()
       } else {
         next('/signin')
       }
     }
  },

  {
    path: '/info/how_it',
    name: 'How_it',
    component: How_it
  },


  /* view items by category */
  {
    path: '/home/producers/other',
    name: 'Electronic_parts',
    component: Electronic_parts
  },

  {
    path: '/home/computer',
    name: 'Main_computer',
    component: Main_computer
  },

  {
    path: '/home/computer/laptops', //Category laptop
    name: 'Laptops',
    component: Laptops
  },

  /* SubCategory (TYPES) for laptops MacBooks, Netbooks */
  {
    path: '/home/computer/laptops/macbooks',
    name: 'MacBooks',
    component: MacBooks
  },

  {
    path: '/home/computer/laptops/netbooks',
    name: 'Netbooks',
    component: Netbooks
  },

  {
    path: '/home/computer/computerAccessories', //Category it accessories
    name: 'Computer_Acc',
    component: Computer_Acc
  },

  /* SubCategory (TYPES) for Keyboards& Mouse, Monitors */
  {
    path: '/home/computer/computerAccessories/keyboardMouse', //Category it accessories
    name: 'Keyboard_mouse',
    component: Keyboard_mouse
  },

  {
    path: '/home/computer/computerAccessories/monitor', //Category it accessories
    name: 'Monitor',
    component: Monitor
  },

  ],

  mode: 'history',
})

/* router.beforeEach((to, from, next) => {
  //check to see if route requires auth
  if (to.matched.some(rec => rec.meta.requiresAuth)) {
    
    //check auth state of user
    let user = firebase.auth().currentUser
    if (user) {
      //user signed in, proceed to route
      next()
    } else {
      //no user signed in, redirect to login
      next({ name: 'Signin'})
    }

  } else {
    next()
  }
}) */

