<template lang="pug">
  Layout
    .title เข้าสู่ระบบ
    br
    form(@submit.prevent='login')
      b-field(label='เลขนิสิต 10 หลัก')
        b-input(v-model='auth.username' key='login_auth_username' name='username' type='number' required)
      b-field(label='รหัส CU-NET')
        b-input(v-model='auth.password' key='login_auth_password' name='password' type='password' required password-reveal)
      b-field
        b-button(type='is-primary' native-type='submit' :loading='loading' key='login_auth_login') เข้าสู่ระบบ
</template>

<script>
import Layout from "@/components/Layout.vue";
import axios from 'axios';
import { login } from '../store/actions'
export default {
  name: "login",
  components: {
    Layout
  },
  data() {
    return {
      auth: {
        username: "",
        password: ""
      },
      loading: false
    }
  },
  methods: {
    login() {
      this.loading = true;
      login(this.auth).finally(() =>
        this.loading = false
      );
    },
  }
}
</script>
