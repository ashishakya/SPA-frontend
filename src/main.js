import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';
import router from  './routes'

const base = axios.create({
  baseURL: 'http://spa-backend.test/api/'
});

Vue.prototype.$http = base

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
