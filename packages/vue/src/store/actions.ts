import store from './index';
import router from '../router';
import axios from 'axios';
import _ from 'lodash';
import Vue from 'vue';
import { ToastProgrammatic as Toast } from 'buefy';

function _setUser(u) {
  store.commit('setUser', u);
}
function _getUser() {
  return store.getters.user;
}

export async function fetchUser() {
  const user = await axios.get('/api/profile', { headers: { silent: true } }).then(res => res.data);
  _setUser(user);
  return user;
}
export async function isLogin() {
  if (store.getters.user) {
    return true;
  }
  return !!(await fetchUser());
}
export function profile() {
  return store.getters.user;
}
export function quiz() {
  if (store.getters.quiz) {
    return store.getters.quiz;
  }
  const quiz2 = axios.get('/api/quiz').then(res => res.data);
  store.commit('setQuiz', quiz2);
  return quiz2;
}
export async function logout() {
  return axios.post('/api/logout').then(res => {
    router.push('/');
    _setUser(null);
    Toast.open({
      message: 'ออกจากระบบ สำเร็จ',
      type: 'is-success'
    });
  });
}
export async function login({ username, password }) {
  return axios.post('/api/login', { username, password }).then(res => {
    _setUser(res.data);
    Toast.open({
      message: 'เข้าสู่ระบบ สำเร็จ',
      type: 'is-success'
    });
    const route = router.app._route;
    const rdr = route.query.redirect;
    if (_.isString(rdr)) {
      router.push(rdr);
    } else {
      router.push('/');
    }
  });
}

export async function patchUser(val) {
  const p = _.pickBy(val);
  if (!_.isEmpty(p)) {
    const u = (await axios.patch('/api/profile', p)).data;
    _setUser({ ..._getUser(), lastUpdate: u.lastUpdate });
    return u;
  }
}

export async function users(id = null) {
  if (_.isNil(id)) {
    return axios.get('/api/users').then(res => res.data);
  }
  if (_.isString(id)) {
    return axios.get(`/api/users/${id}`).then(res => res.data);
  }
  throw 'Error Request User is not null and not string';
}
