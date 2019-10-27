import 'core-js';
import '@babel/polyfill';

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { fetchUser } from './store/actions';

import './config';
// import './registerServiceWorker';

Vue.config.productionTip = false;

import _ from 'lodash';
import axios from 'axios';
import Rellax from 'rellax';

new Vue({
  router,
  store,
  // @ts-ignore
  rellax: null,
  render: h => h(App),
  created() {
    fetchUser().catch(_.noop);
  },
  mounted() {
    this.rellax = new Rellax('.rellax', { center: true });
  }
}).$mount('#app');
