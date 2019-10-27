<template lang='pug'>
Layout(:transparent='false')
  div(align='left' style='max-width: 300px; margin: auto;')
    .title ไม่เจอผลลัพท์ที่ค้นหา
    .subtitle ท่านอาจจะหมายถึง
    ul
      li: router-link(to='/') ไปหน้าแรก
      li: router-link(to='/register') ลงทะเบียน
      li: router-link(to='/profile') ตรวจสอบข้อมูล
      li: router-link(to='/schedule') ตารางเวลา
</template>

<script>
import Layout from "@/components/Layout"

export default {
  name: "notfound",
  components: { Layout },
};
</script>

<style lang='scss' scoped>
ul {
  margin-left: 1rem;
}
li {
  line-height: 1.7rem;
  &::before {
    content:  '↪';
    font-size: 0.7rem;
    margin-right: 0.7rem;
  }
}
</style>

