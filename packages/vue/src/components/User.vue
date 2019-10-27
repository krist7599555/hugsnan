<template lang="pug" functional>
.content(style='line-height: 1.7rem; max-width: 500px; margin: auto')
  .tag แก้ไขเมื่อ {{$options.lastUpdate(props.user)}}
  br
  //- p {{$options.faculty}}
  template(v-show='name')
    br
    label ชื่อ
    p(style='margin-top: 1rem')
      b.is-size-4 {{props.user.nickname}} ({{$options.faculty[props.user.faculty].nameABBR}}# {{63 - props.user.year}}) #[br]
      p {{{"female": "นางสาว", "male": "นาย"}[props.user.gender]}} {{props.user.nameTH}} {{props.user.surnameTH}}
        router-link(:to='`/users/${props.user._id}`' target='_blank')  | {{props.user._id}}
  br


  .columns.is-mobile
    .column
      label เบอร์โทร
      p: a(:href="$options.phoneLink(props.user.phone)" title="tel" target='_blank') {{props.user.phone}}
      label วันเกิด
      p {{props.user.birth}}
      label สาขา
      p {{props.user.major}}
    .column
      label facebook
      p: a(:href="`https://web.facebook.com/search/people/?q=${props.user.facebook}`" title="fb" target='_blank') {{props.user.facebook}}
      label line
      p: a(:href="`http://line.me/ti/p/~${props.user.line}`" title="line" target='_blank') {{props.user.line}}
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
  faculty: require("../info/faculty.json"),
  phoneLink(tel) {
    return "tel:" + (tel || "").replace(/\D/g, '')
  }
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
