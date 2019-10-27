<template lang='pug'>
Layout
  br
  .title
    span คำตอบของคุณ
    router-link.edit.help.is-inline(to='/register')
      span แก้ไข
      //- b-icon.fa-sm.is-size-7(icon='edit')
  b-button(@click='logout' type='is-primary' icon-left='sign-out-alt') ออกจากระบบ
  br
  br
  User(:user='$store.getters.user' :quiz='quiz')
</template>

<script>
import axios from "axios";
import User from "@/components/User"
import Layout from "@/components/Layout"
import {quiz, logout, fetchUser} from '../store/actions'

export default {
  name: "profile",
  components: { User, Layout },
  data: () => ({ quiz: [] }),
  async created() {
    this.quiz = await quiz();
    await fetchUser();
  },
  methods: {
    logout
  }
};
</script>

<style lang='scss' scoped>
.edit {
  margin-left: 10px;
  text-decoration: underline;
  font-size: 0.9rem;
}
</style>

