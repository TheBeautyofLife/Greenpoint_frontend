import Vue from 'vue';
import Vuex from 'vuex';
import * as firebase from 'firebase';
import axios from './auth'
import globalAxios from 'axios'


Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        idToken: null,
        userId: null
    },

    mutations: {
        authUser(state, authData) {
            state.idToken = userData.token
            state.userId = userData.userId
        },
        storeUser(state, user) {
            state.user = user
        },
    },

actions: {
    signup({commit, dispatch}, authData) {
    axios.post('/signupNewUser?key=' + process.env.FIREBASE_API_KEY, {
     email: authData.email,
     password: authData.password,
     returnSecureToken: true
    })
    .then(res => {
      console.log(res)
      commit('authUser', {
        token: res.data.idToken,
        userId: res.data.localId
     })
     const now = new Date()
     const expirationDate = new Date(now.getTime() + res.data.expiresIn * 2500)
     localStorage.setItem('token', res.data.idToken)
     localStorage.setItem('userId', res.data.localId)
     localStorage.setItem('expirationDate', expirationDate)
     dispatch('storeUser', authData)
     dispatch('setLogoutTimer', res.data.expiresIn)
    })
        .catch(error => console.log(error))
    },

    login({commit, dispatch}, authData) {
      axios.post('/verifyPassword?key=' + process.env.FIREBASE_API_KEY, {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
      .then(res => {
       console.log(res)
       const now = new Date()
       const expirationDate = new Date(now.getTime() + res.data.expiresIn * 1000)
        
       localStorage.setItem('token', res.data.idToken)
       localStorage.setItem('userId', res.data.localId)
       localStorage.setItem('expirationDate', expirationDate)
       commit('authUser', {
          token: res.data.idToken,
          userId: res.data.localId
       })
       dispatch('setLogoutTimer', res.data.expiresIn)
       })
       .catch(error => console.log(error))
      },
    
      //
    storeUser({commit, state }, userData) {
     if (!state.idToken) {
        return
    }

      globalAxios.post('/users.json' + '?auth=' + state.idToken, userData)
      .then(res => console.log(res))
      .catch(error => console.log(error))
    },

    //Fetching user data
    fetchUser({commit, state}) {
      if (!state.idToken) {
        return
    }
    globalAxios.get('/users.json' + '?auth=' + state.idToken)
    .then(res => {
    console.log(res)
     const data = res.data
     const users = []
     for (let key in data) {
       const user = data[key]
       user.id = key
       users.push(user)
    }
     console.log(users)
     commit('storeUser', users[0])
    })
    .catch(error => console.log(error))
   }
    },
    getters: {
        user(state) {
            return state.user
        }
    }
})