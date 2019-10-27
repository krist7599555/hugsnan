import 'core-js';

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

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
    axios
      .get('/api/profile', { headers: { silent: true } })
      .then(res => {
        store.commit('setUser', res.data);
      })
      .catch(_.noop);
  },
  mounted() {
    this.rellax = new Rellax('.rellax', { center: true });
  }
}).$mount('#app');
