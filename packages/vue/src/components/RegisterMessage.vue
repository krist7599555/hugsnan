<template lang="pug">
  b-message(type='is-danger')
    div(style='line-height: 2rem')
      p เหลือเวลาลงทะเบียน #[b {{cntDown}}] #[br]
      p
        span มีค่ามัดจำการยืนยันสิทธิเข้าค่าย
        span.is-size-7  (คืนหลังลงค่าย)
</template>

<script>
import dayjs from 'dayjs'
export default {
  data() {
    const end = dayjs(new Date('Oct 27 2019 23:59:59 GMT+0700'))
    const hour = end.diff(dayjs(), 'hour')
    return {
      cntDown: `อีีก ${hour} ชม`
    }
  }
}
</script>
