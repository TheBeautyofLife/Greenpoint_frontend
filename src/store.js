import Vue from 'vue'
import Vuex from 'vuex'
const vueonfire = require('./firebaseApp.js')

Vue.use(Vuex)

vueonfire.auth.onAuthStateChanged (user => {
    if(user){
        store.commit('setCurrUser', user)
        store.dispatch('fetchUserProfile')

        vueonfire.userCol.doc(user.uid).onSnapshot(doc => {
            store.commit('setUserProfile', doc.data())
        })

    }
})

export const store = new Vuex.Store({
    state: {
        currUser: null,

    },
    actions: {
    
    },
    mutations: {

    }
})