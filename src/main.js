import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'

import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.use(Vuelidate)

Vue.config.productionTip = false

// инициализируем firebase
//https://corporate-bfde8-default-rtdb.europe-west1.firebasedatabase.app/
const firebaseConfigOld = {
  apiKey           : "AIzaSyALYv_OzkyuDPyu_aJF-AsbBwa1pALo5DY",
  // authDomain       : "corporate-bfde8.firebaseapp.com",
  // projectId        : "corporate-bfde8",
  // storageBucket    : "corporate-bfde8.appspot.com",
  authDomain       : "corporate-bfde8-default-rtdb.europe-west1.firebaseapp.com",
  projectId        : "corporate-bfde8-default-rtdb.europe-west1",
  storageBucket    : "corporate-bfde8-default-rtdb.europe-west1.appspot.com",
  messagingSenderId: "146256970670",
  appId            : "1:146256970670:web:3ad4fd1bf3e800a2e0fe3f",
  measurementId    : "G-LB78Y3JLL5"
}

const firebaseConfig = {
  apiKey: "AIzaSyD4gd3ukukLS3056_yvvtFVTtNVIyERgZ0",
  authDomain: "corp-9b478.firebaseapp.com",
  projectId: "corp-9b478",
  storageBucket: "corp-9b478.appspot.com",
  messagingSenderId: "835916864512",
  appId: "1:835916864512:web:d502a25d114c326ba74ce5"
}

firebase.initializeApp(firebaseConfig)

let corporateApp = null

firebase.auth().onAuthStateChanged(() => {
  if(corporateApp) return
  corporateApp = new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
  }).$mount('#app')
})

