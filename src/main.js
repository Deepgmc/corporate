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
const firebaseConfig = {
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
const firebaseConfig2 = {
  apiKey           : "AIzaSyDIt6uciyeVWyQE5EPsoOQ4X6WJZD-S2rI",
  authDomain       : "corporate2-a843b.firebaseapp.com",
  projectId        : "corporate2-a843b",
  storageBucket    : "corporate2-a843b.appspot.com",
  messagingSenderId: "285667125328",
  appId            : "1:285667125328:web:2ac12d132e7afee5cc8955"
}

firebase.initializeApp(firebaseConfig2)

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

