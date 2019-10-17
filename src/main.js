import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';


const routes = [
  {
    path: '',
    component: Quotes
  },
  {
    path: '/new-quote',
    component: NewQuote
  }
];

import Quotes from "./components/Quotes";
import NewQuote from "./components/NewQuote";


Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes
})


new Vue({
  el: '#app',
  render: h => h(App),
  router
})
