<template lang='pug'>
Layout
  .title ข้อมูลผู้สมัคร
  User(:user='user' :quiz='quiz')
</template>

<script>
import axios from "axios";
import User from "@/components/User"
import Layout from "@/components/Layout"
import {quiz, users} from '../store/actions'

export default {
  name: "profile",
  components: { User, Layout },
  data: () => ({ quiz: [], user: null }),
  async created() {
    const id = this.$route.params.id
    this.quiz = await quiz();
    this.user = await users(id)
  }
};
</script>

