import Vue from 'vue'
import Vuetify from 'vuetify'

import App from './App.vue'
import firebase from 'firebase'

import VueRouter from 'vue-router'
import welcome from './Welcome.vue'
import gal from './gal.vue'
import network from './Network.vue'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import score from './Score.vue'

var firebaseConfig = {
  apiKey: "AIzaSyCANQv1icQBbU7yaJqwRc66aMtvl0JFrZ0",
  authDomain: "networking-2fd30.firebaseapp.com",
  databaseURL: "https://networking-2fd30.firebaseio.com",
  projectId: "networking-2fd30",
  storageBucket: "networking-2fd30.appspot.com",
  messagingSenderId: "441347933534",
  appId: "1:441347933534:web:d2295041891d83fa"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
Vue.use(Vuetify)


// // Start exporting your data
// firestoreService
//   .backup('users')
//   .then(data => console.log(JSON.stringify(data)))





Vue.use(VueRouter)
const routes = [
  { path: '/', component: welcome },
  { path: '/gal', name:'gal',component: gal},
    {path:'/network', component:network }
  ,{path:'/score',component:score}
]

Vue.config.productionTip = true

const router = new VueRouter({
  routes })

const app = new Vue({
  render: h => h(App),
  router
}).$mount('#app')

