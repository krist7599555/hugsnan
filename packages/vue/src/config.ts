import Vue from 'vue';
import axios from 'axios';
import _ from 'lodash';
import router from './router';

/* FONT-AWESOME */

import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, far, fab);
dom.watch();

/* BUEFY */

import Buefy from 'buefy';
Vue.use(Buefy, { defaultIconPack: 'fa', css: false });
import './style/main.scss';

/* AXIOS */

import { ToastProgrammatic as Toast } from 'buefy';
axios.interceptors.response.use(
  response => response,
  err => {
    for (const path of ['response.data.message', 'response.data']) {
      if (_.get(err, path)) {
        err.message = _.get(err, path);
        break;
      }
    }

    const silent = err.config.headers.silent;
    if (silent) {
      return Promise.reject(err);
    }
    Toast.open({
      type: 'is-danger',
      message: err.message
    });
    const redirect = router.app.$route.fullPath;
    switch (err.response.status) {
      case 401:
        router.push({
          path: '/login',
          query: { redirect }
        });
      case 405:
        router.push('/');
    }
    return Promise.reject(err);
  }
);

/* FUNCTION API */
import VueFunctionApi from 'vue-function-api';
Vue.use(VueFunctionApi);

/* DAYJS */
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);
import 'dayjs/locale/th';
dayjs.locale('th');

import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';
const firebaseConfig = {
  apiKey: 'AIzaSyAmOvNktT22Tphkgl7A1u4bzbj_nNv0NKo',
  authDomain: 'hugsnan-221417.firebaseapp.com',
  databaseURL: 'https://hugsnan-221417.firebaseio.com',
  projectId: 'hugsnan-221417',
  storageBucket: 'hugsnan-221417.appspot.com',
  messagingSenderId: '497781033468',
  appId: '1:497781033468:web:26410f6099c0d998a10a79'
};

firebase.initializeApp(firebaseConfig);
export const database = firebase.database();
export const storage = firebase.storage();
