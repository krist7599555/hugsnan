<template lang='pug'>
Layout(:transparent='true')
  h1.title ตารางเวลา
  table: tbody
    tr(v-for='[a, b, c, d] in schedule')
      td: span(v-show='a') ▶
      td(width='96')
        span.is-pulled-left.is-size-7 {{b}}
        span.is-pulled-right {{c}}
      td {{d}}
  br
  br
  router-link.button.is-danger.is-outlined.is-inverted.is-rounded(to='/') กลับ
</template>

<script lang="js">
import Layout from '../components/Layout'
export default {
  name: "schedule",
  components: {Layout},
  data() {
    return {
      schedule: [
        [0, "อ.", "22 ต.ค.", "เปิดรับสมัครรอบข้อเขียน"],
        [0, "อา.", "27 ต.ค.", "หมดเขตสมัครรอบข้อเขียน"],
        [1, "ส.", "2 พ.ย.", "ประกาศรายชื่อผู้มีสิทธิสัมภาษณ์\nเลือกวันสัมภาษณ์"],
        // [0, "จ.", "4 พ.ย.", "หมดเขตเลือกวันสัมภาษณ์"],
        [0, "จ.", "4-6 พ.ย.", "สัมภาษณ์"],
        [0, "ศ.", "8 พ.ย.", "ประกาศรายชื่อผู้มีสิทธิไปค่าย"],
        [0, "อา.", "10 พ.ย.", "หมดเขตยืนยันสิทธิไปค่าย"],
      ]
    }
  }

}
</script>

<style lang='scss' scoped>
#schedule {
  height: 100vh;
  background-image: url("~@/assets/wallpaper.jpg");
  background-color: #090B0D;
  background-position: center;
  background-size: cover;
  z-index: -1;
  overflow: scroll;
  padding-top: 2rem;
  .section {
    background-color: #0000;
  }
  .label {
    margin-top: 1rem;
    line-height: 2rem;
    margin-bottom: 1rem;
  }
}
#schedule, .title {
  color: whitesmoke !important;
}
td {
  padding: 0.5rem 0.6rem;
  white-space: pre-line;
  line-height: 1.8rem;
  &:first-child {
    padding-left: 0rem;
    padding-right: 0.3rem;
  }
}
</style>

