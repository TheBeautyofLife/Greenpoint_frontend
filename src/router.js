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
/*----------IT DEVICES---------*/
const Main_computer = () => import('@/components/View_items_category/IT/Main_comp');
//Categories 
const Laptops = () => import('@/components/View_items_category/IT/Laptops');
const Computer_Acc = () => import('@/components/View_items_category/IT/Computer_Acc');

//Subcategories for Laptop
const Laptops = () => import('./components/View_items_category/IT/Laptops');

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
    path: '/home/computer/',
    name: 'Main_computer',
    component: Main_computer
  },
  {
    path: '/home/computer/laptops',
    name: 'Laptops',
    component: Laptops
  },

  /* SubCategory (TYPES) for laptops MacBooks, Netbooks, Ultrabooks */




  {
    path: '/home/computer/computer_accessories',
    name: 'Computer_Acc',
    component: Computer_Acc
  },

  /** SubCategories  Keyboards& Mouse, Monitors **/





]



export default routes;