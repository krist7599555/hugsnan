<template lang='pug'>
Layout
  h1.title ลงทะเบียน
  RegisterMessage
  br
  template
    b-field
      b สวัสดีคุณ {{user.nameTH}} {{user.surnameTH}} ({{faculty[user.faculty].nameABBR}}# {{63 - user.year}})
    b-field
      b-button(@click='logout' type='is-primary' icon-left='sign-out-alt' key='login_auth_logout') ออกจากระบบ
    hr

    FirebaseReserve

    //- form(@submit.prevent)
      b-field(label='เพศ')
        b-field
          b-radio(v-model='info.gender' name='gender' native-value='male' required) ชาย
          b-radio(v-model='info.gender' name='gender' native-value='female' required) หญิง
      br
      b-field(label='ชื่อเล่น')
        b-input(v-model='info.nickname' key='input_info_nickname' placeholder='ฮักน่าน' type='text')
      br
      b-field(label='เบอร์โทร')
        b-input(v-model='info.phone' key='input_info_phone' placeholder='0xx-xxx-xxxx' type='text')
      b-field(label='วันเกิด')
        b-input(v-model='info.birth' key='input_info_birth' placeholder='วว-ดด-ปปปป' type='text')
      br
      b-field(label='ภาค/สาขา')
        b-input(v-model='info.major' key='input_info_major' placeholder='เอก ... โท ...' type='text')
      br
      b-field(label='Facebook')
        b-input(v-model='info.facebook' key='input_info_facebook' placeholder='Chula HugsNan' type='text')
      b-field(label='Line ID')
        b-input(v-model='info.line' key='input_info_line' placeholder='chulahugsnan' type='text')

      hr
      template(v-for='q in quizQ')
        br
        b-field(:label='q.label' :key='q.key')
          b-input(v-model='quizA[q.key]' type='textarea' placeholder='...' :rows='q.rows || 6')
      br
      b-button(@click='updateUser' native-type='submit' type='is-success' :loading='loading' icon-left='check') ส่งคำตอบ
      .help(v-show='lastUpdate') แก้ไขล่าสุด {{lastUpdate}}
</template>

<script>
import Layout from "@/components/Layout.vue";
import RegisterMessage from "@/components/RegisterMessage.vue";
import FirebaseReserve from "@/components/FirebaseReserve.vue";

// @ts-ignore
const faculty = require('../info/faculty.json')
import Vue from "vue";
import axios from "axios";
import _ from "lodash";
import dayjs from 'dayjs'
import {login, patchUser, profile, quiz, logout} from '../store/actions'


export default {
  name: "register",
  components: {
    Layout,
    RegisterMessage,
    FirebaseReserve
  },
  data() {
    return {
      faculty: require('../info/faculty.json'),
      loading: false,
      auth: {
        username: "",
        password: ""
      },
      info: {
        gender: null,
        facebook: null,
        line: null,
        nickname: null,
        phone: null,
        birth: null,
      },
      quizQ: [],
      quizA: {},
      lastUpdate: ""
    };
  },
  async created() {
    this.quizQ = await quiz()
    this.quizA = _.pick(await profile(), _.map(this.quizQ, "key"))
    this.info = _.pick(await profile(), _.keys(this.info))

  },
  mounted() {
    setInterval(() => {
      if (this.user && this.user.lastUpdate) {
        const rrt = dayjs(this.user.lastUpdate).fromNow()
        const abs = dayjs(this.user.lastUpdate).format('HH:mm')
        this.lastUpdate = `${abs} (${rrt})`
      }
    }, 3000)
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
  },
  methods: {
    logout() {
      this.loading = true;
      logout().finally(() => {
        this.loading = false;
      });
    },
    autoUpdateUser() {
      return patchUser({...this.info, ...this.quizA })
    },
    async updateUser() {
      this.loading = true;
      await this.autoUpdateUser()
        .then(() => {
          this.$buefy.toast.open({
            message: 'บันทึกการแก้ไข สำเร็จ',
            type: 'is-success'
          });
          this.$router.push("/profile")
        }).finally(() => {
          this.loading = false;
        })
    },
  },
  watch: {
    info: {
      deep: true,
      handler: _.debounce(patchUser, 500)
    },
    quizA: {
      deep: true,
      handler: _.debounce(patchUser, 500)
    }
  }
};
</script>

<style lang='scss'>
#register {
  height: 100vh;
  background-image: url("~@/assets/wallpaper.jpg");
  background-color: #090B0D;
  background-position: center;
  background-size: cover;
  z-index: -1;
  overflow: scroll;
  padding-top: 3rem;
  padding-bottom: 3rem;
  .section {
    background-color: white;
  }
  .label {
    margin-top: 1rem;
    line-height: 2rem;
    margin-bottom: 1rem;
  }
}
</style>

