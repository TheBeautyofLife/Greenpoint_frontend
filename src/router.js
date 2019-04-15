/* Main */
import Home from '@/components/Home'
const Sign_up = () => import('@/components/Sign_up');
const Sign_in = () => import('@/components/Sign_in');

const Contact_us = () => import('@/components/Contact_us');
const FAQ = () => import('@/components/FAQ');
const Cart = () => import('@/components/Cart');
const Checkout = () => import('@/components/Checkout');
const Post_item = () => import('@/components/Post_item');
const How_it = () => import('@/components/How_it');


/** These are the router for viewing the item by category **/

const Electronic_parts = () => import('./components/View_items_category/Electronic_parts');
/*----------IT DEVICES---------*/
const Main_computer = () => import('@/components/View_items_category/IT/Main_computer');
//Categories
const Laptops = () => import('@/components/View_items_category/IT/Laptops');
const Computer_Acc = () => import('@/components/View_items_category/IT/Computer_Acc');

//Subcategories for Laptop
const MacBooks = () => import('@/components/View_items_category/IT/Laptops/MacBooks');
const Netbooks = () => import('@/components/View_items_category/IT/Laptops/Netbooks');


//Subcategories for Computer_Acc
const Keyboard_mouse = () => import('@/components/View_items_category/IT/Comp_acc/Keyboard_mouse');
const Monitor = () => import('@/components/View_items_category/IT/Comp_acc/Monitors');

/*----------TV & SOUND devices---------*/


/*----------MOBILE DEVICES---------*/



//Mobile and tablet devices

const routes = [

  {
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



export default routes;