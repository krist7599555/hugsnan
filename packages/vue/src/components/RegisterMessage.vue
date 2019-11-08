<template lang="pug">
  b-message(type='is-danger')
    div(style='line-height: 2rem')
      //- p เหลือเวลาลงทะเบียน #[b {{cntDown}}] #[br]
      //- p
        span มีค่ามัดจำการยืนยันสิทธิเข้าค่าย
        span.is-size-7  (คืนหลังลงค่าย)
      //- p กรุณาเลือกวันสัมภาษณ์ ภายในวันที่ 4 ตุลาคม
      //- p กรุณากรอกข้อมูลให้ครบ
      p โอนค่ามัดจำ 500 บาทมาที่
      p
        b  054-1-53042-8
        .help (บัญชี K-BANK, สรัญญา วัฒนานุกิจ)
      p ภายในวันที่ 10 เวลา 23.59
      //- p แล้วเจอกันที่ #[b ตึกวิศวะ 100 ปี ชั้น 6]
</template>

<script>
import dayjs from 'dayjs'
export default {
  data() {
    // const end = dayjs(new Date('Oct 27 2019 23:59:59 GMT+0700'))
    // const hour = end.diff(dayjs(), 'hour')
    return {
      // cntDown: `อีีก ${hour} ชม`
    }
  }
}
</script>
