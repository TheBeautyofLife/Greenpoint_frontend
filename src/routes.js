import Home from '@/components/Home';
const Sign_up = () => import('@/components/Sign_up');
const Sign_in = () => import('@/components/Sign_in');
const Logout = () => import('@/components/Logout');
const Contact_us = () => import('@/components/Contact_us');
const FAQ = () => import('@/components/FAQ');
const Cart = () => import('@/components/Cart');
const Checkout = () => import('@/components/Checkout');

const routes = [{
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
    path: '/logout',
    name: 'Logout',
    component: Logout
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

  /* view items by category */


  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },

  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout
  }
];

export default routes;