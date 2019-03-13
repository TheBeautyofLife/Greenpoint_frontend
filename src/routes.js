import Home from '@/components/Home';
const Sign_up = ()    =>    import('@/components/Sign_up');
const Sign_in = ()    =>    import('@/components/Sign_in');
const Logout = ()     =>    import('@/components/Logout');
const Contact_us = () =>    import('@/components/Contact_us');
const FAQ = ()        =>    import('@/components/FAQ');
const View_list = ()  =>    import('@/components/View_list');
const View_item = ()  =>    import('@/components/View_item');
const Cart_empty = () =>    import('@/components/Cart_empty');
const Cart_full = ()  =>    import('@/components/Cart_full') ; 

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

  {
    path: '/view_list',
    name: 'View_list',
    component: View_list
  },

 {
    path: '/view_item',
    name: 'View_item',
    component: View_item
  },

 {
    path: '/cart_empty',
    name: 'Cart_empty',
    component: Cart_empty
  },

  {
     path: '/cart_full',
     name: 'Cart_full',
     component: Cart_full
   } 
];
 
export default routes;
