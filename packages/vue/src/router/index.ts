import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import { isLogin } from '../store/actions';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/register',
    name: 'register',
    meta: { requiresAuth: true },
    // component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue')
    redirect: '/confirm'
  },
  {
    path: '/confirm',
    name: 'confirm',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: "confirm" */ '../views/Confirm.vue')
  },
  {
    path: '/schedule',
    name: 'schedule',
    component: () => import(/* webpackChunkName: "schedule" */ '../views/Schedule.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: "admin" */ '../views/Admin.vue')
  },
  {
    path: '/users/:id',
    name: 'users',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: "users" */ '../views/Users.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: "profile" */ '../views/Profile.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/success',
    name: 'success',
    component: () => import(/* webpackChunkName: "success" */ '../views/Success.vue')
  },
  {
    path: '/category',
    name: 'category',
    component: () => import(/* webpackChunkName: "category" */ '../views/Category.vue')
  },
  {
    path: '/*',
    name: 'notfound',
    component: () => import(/* webpackChunkName: "notfound" */ '../views/NotFound.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior: (to, from, savedPosition) => {
    // if (savedPosition) {
    //   return savedPosition;
    // }
    return { x: 0, y: 0 };
  }
});

router.beforeEach(async (to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    await isLogin()
      .then(() => {
        next();
      })
      .catch(() => {
        next({
          path: '/login',
          query: { redirect: to.fullPath }
        });
      });
  } else {
    next(); // make sure to always call next()!
  }
});

export default router;
