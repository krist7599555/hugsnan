<template lang="pug">
.container(style='margin: auto')
    label.label เลือก วัน/เวลาสัมภาษณ์
    label.label เวลาของคุณคือ {{dateToStr(curr)}}

    br
    table
      thead
        tr
          td
          td(align='center'): b 16:30
          td(align='center'): b 17:30
      tbody
        tr
          td.has-text-right: b จันทร์. 4 พ.ย.
          td: b-radio(:value='curr' @input='select' :native-value="41" :disabled='count[41] >= limit[41]') {{count[41] || 0}} / {{limit[41]}}
          td: b-radio(:value='curr' @input='select' :native-value="42" :disabled='count[42] >= limit[42]') {{count[42] || 0}} / {{limit[42]}}
        tr
          td.has-text-right: b อังคาร. 5 พ.ย.
          td: b-radio(:value='curr' @input='select' :native-value="51" :disabled='count[51] >= limit[51]') {{count[51] || 0}} / {{limit[51]}}
          td: b-radio(:value='curr' @input='select' :native-value="52" :disabled='count[52] >= limit[52]') {{count[52] || 0}} / {{limit[52]}}
        tr
          td.has-text-right: b พุธ. 6 พ.ย.
          td: b-radio(:value='curr' @input='select' :native-value="61" :disabled='count[61] >= limit[61]') {{count[61] || 0}} / {{limit[61]}}
          td: b-radio(:value='curr' @input='select' :native-value="62" :disabled='count[62] >= limit[62]') {{count[62] || 0}} / {{limit[62]}}
    br
    p(style='margin: auto; text-align: center;')
      em.help(style='margin: auto') (การเลือกวันเป็นระบบ realtime)
    br

    label.label แล้วเจอกันนะครับ ณ ตึกวิศวะ 100 ปีชั้น 6
    br
    br
    button.button.is-info.is-fullwidth(@click='reload') โหลดหน้าเว็ปใหม่

</template>

<script>
import _ from 'lodash'
import {watchUsers, patchUsers, limit} from '../store/firebase'

function dateToStr(d) {
  if (d == null) {
    return "loading...";
  }
  const da = { 4: "จันทร์. 4", 5: "อังคาร. 5", 6: "พุธ. 6"}[_.floor(+d / 10)]
  const ta = { 0: "", 1: "16:30", 2: "17:30"}[+d % 10]
  return `${da} พ.ย. เวลา ${ta}`
}

export default {
  data() {
    return {
      curr: null,
      stat: null,
      limit: {},
      count: {},
      loading: false
    }
  },
  async created() {
    limit().then(l => this.limit = l)
    let old = null
    watchUsers(users => {
      this.curr = _.get(users, this.id, null)
      this.count = _.countBy(_.values(users))
      this.loading = true;
      if (old != null) {
        for (const ouid in users) {
          if (old[ouid] !== users[ouid]) {
            this.$buefy.toast.open({
              type: "is-info",
              message: `${ouid} เลือกวัน ${dateToStr(users[ouid])}`
            })
          }
        }
      }
      old = users
    })
  },
  methods: {
    async select(val) {
      if ((this.count[val] || 0) < this.limit[val]) {
        await patchUsers(this.id, val)
      }
    },
    dateToStr,
    reload() {
      window.location.reload(1)
    }
  },
  computed: {
    id() {
      return this.$store.getters.user._id
    }
  }
}
</script>


<style lang="scss" scoped>
td {
  padding: 1rem 1rem;
}
table, label {
  margin: auto;
  text-align: center;
}
</style>
