import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    user: null,
    quiz: null
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setUserAttr(state, { key, val }) {
      if (state.user) {
        // @ts-ignore
        state.user[key] = val;
      }
    },
    setQuiz(state, quiz) {
      state.quiz = quiz;
    }
  },
  getters: {
    user: state => state.user,
    quiz: state => state.quiz
  },
  actions: {},
  modules: {}
});

export default store;
