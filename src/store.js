import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { resolve } from 'dns';
const vueonfire = require('./firebaseApp.js')

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
  status: '',
  token: localStorage.getItem('token') || '',
  user: {}
    },
    actions: {
       /*  SocialMedia({commit}, user){
            return new Promise ((resolve, reject) => {
                commit('auth_request')
                axios({
                    url: 'http://5324e094.ngrok.io/', data: user, method: 'POST'
                })
            })
        } */
       
    },
    mutations: {
 //Set the mutations
    },

    getters: {
        isLoggedIn: state => !!state.token,
    }

})