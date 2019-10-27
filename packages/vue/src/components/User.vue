<template lang="pug" functional>
.content(style='line-height: 1.7rem; max-width: 500px; margin: auto')
  .tag แก้ไขเมื่อ {{$options.lastUpdate(props.user)}}
  br
  //- p {{$options.faculty}}
  template(v-show='name')
    br
    label ชื่อ
    p: b {{props.user.nameTH}} {{props.user.surnameTH}} ({{$options.faculty[props.user.faculty].nameABBR}}# {{63 - props.user.year}})

  .columns.is-mobile
    .column
      label เบอร์โทร
      p {{props.user.phone}}
      label วันเกิด
      p {{props.user.birth}}
      label สาขา
      p {{props.user.major}}
    .column
      label facebook
      p {{props.user.facebook}}
      label line
  hr
  template(v-for='{key, label} of props.quiz')
    br
    label {{label}}
    p {{props.user[key]}}
  br
</template>

<script>
import dayjs from 'dayjs'
export default {
  functional: true,
  props: {
    user: {
      require: true
    },
    quiz: {
      require: true,
      default: () => []
    },
    name: {
      default: true
    }
  },
  lastUpdate(u) {
    return u && u.lastUpdate && dayjs(u.lastUpdate).fromNow();
  },
  faculty: require("../info/faculty.json")
}
</script>

<style lang="scss" scoped>
p {
  margin-bottom: 0.5rem !important;
}
label {
  font-size: 0.5rem
}
</style>
