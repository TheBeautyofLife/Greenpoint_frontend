/* Main */
import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase/app'
import store from './store'

import Home from '@/components/Home'
import Sign_up from '@/components/Sign_up'
import Sign_in from '@/components/Sign_in'
import Contact_us from '@/components/Contact_us'
import FAQ from '@/components/FAQ'
import Cart from '@/components/Cart'
import Checkout from '@/components/Checkout'
import Post_item from '@/components/Post_item'
import How_it from '@/components/How_it'


/** These are the router for viewing the item by category **/

import Electronic_parts from './components/View_items_category/Electronic_parts'
/*----------IT DEVICES---------*/
import Main_computer from '@/components/View_items_category/IT/Main_computer'
//Categories
import Laptops from '@/components/View_items_category/IT/Laptops'
import Computer_Acc from '@/components/View_items_category/IT/Computer_Acc'

//Subcategories for Laptop
import MacBooks from '@/components/View_items_category/IT/Laptops/MacBooks'
import Netbooks from '@/components/View_items_category/IT/Laptops/Netbooks'


//Subcategories for Computer_Acc
import Keyboard_mouse from '@/components/View_items_category/IT/Comp_acc/Keyboard_mouse'
import Monitor from '@/components/View_items_category/IT/Comp_acc/Monitors'

/*----------TV & SOUND devices---------*/


/*----------MOBILE DEVICES---------*/



//Mobile and tablet devices


Vue.use(Router)

const router = new Router({
/* linkActiveClass: 'active', */
mode: 'history',
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
    path: '/faq',
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
    path: '/post_item',
    name: 'Post_item',
    component: Post_item
  },

  {
    path: '/how_it',
    name: 'How_it',
    component: How_it
  },


  /* view items by category */
  {
    path: '/home/other',
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

  ]
})

router.beforeEach((to, from, next) => {
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
})

export default router