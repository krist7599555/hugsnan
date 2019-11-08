<template lang="pug">
form(@submit.prevent='submit')
  b-field(v-for='f in field' :label='f.label' :key='f.label')
    b-input(v-model='form[f.field]' :type='f.type || "text"' :placeholder="f.placeholder" required)
  br
  //- b-upload(v-model="slipImg")
  //-   a.button.is-primary
  //-     b-icon(icon='upload')
  //-     span อััพโหลด slip
  //- br
  br
  br
  b-field
    b-button(native-type='submit' type='is-info' :loading='loading') ยืนยันไปค่าย
</template>

<script>

import {patchUser} from '../store/actions'

export default {
  name: "form-confirm",
  data() {
    return {
      loading: false,
      slipimg: null,
      form: {
        allergy: "",
        emerPhone: "",
        emerRelate: "",
        house: "",
        slip: "",
      },
      field: [
        {field: "allergy", label: "ยา, อาหาร, สิ่งของ ที่แพ้", placeholder: "หากไม่มีใส่ -"},
        {field: "drug", label: "ยาที่ใช้อยู่", placeholder: "หากไม่มีใส่ -"},
        {field: "emerPhone", label: "เบอร์ติดต่อผู้ปกครอง", "placeholder": "xxx-xxx-xxxx"},
        {field: "emerRelate", label: "ความสัมพันธ์กับเจ้าของเบอร์", placeholder: "แม่"},
        {field: "house", label: "ที่อยู่ปัจจุบัน", type: "textarea", placeholder: "xxx/xxx"},
        {field: "slipDate", label: "วันที่โอน", placeholder: "8 Nov"},
        {field: "slipTime", label: "เวลาโอน", placeholder: "20:00:00"},
        {field: "slipName", label: "ชื่อบัญชีที่ใช้ในการโอน", placeholder: "กฤษฏิ์ พรไพรินทร์"},
        {field: "slipName", label: "ธนาคาร", placeholder: "K-Bank"},
        {field: "slipNum", label: "รหัสอ้างอิง", placeholder: "xxxxxxxxxxxxxxx"},
        {field: "bank", label: "ธนาคารในการโอนคืน", placeholder: "K-BANK"},
        {field: "bank", label: "ชื่อบัญชีในการโอนคืน", placeholder: "กฤษฏิ์ พรไพรินทร์"},
        {field: "bank", label: "เลขบัญชีในการโอนคืน", placeholder: "xxx-xxx-xx-xxxxxx-x"},

      ]
    }
  },
  methods: {
    submit() {
      this.loading = true;
      // const ouid = this.$store.getters.user._id
      // storageRef.child(`slips/${ouid}.png`).put(file);
      patchUser(this.form).finally(() => {
        this.loading = false;
        this.$router.push({
          path: "/success",
          query: {
            message: "ยืนยันเสร็จสิ้น"
          }
        });
      })
    }
  }
}
</script>
