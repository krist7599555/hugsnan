<template lang="pug">
form(@submit.prevent='submit')
  b-field(v-for='f in field' :label='f.label' :key='f.label')
    b-input(v-if='f.field' v-model='form[f.field]' :type='f.type || "text"' :placeholder="f.placeholder" required)
    hr(v-else)
  br
  b-upload(v-model="slipImg")
    a.button.is-primary
      b-icon(icon='upload')
      span อััพโหลด slip
  .help {{slipImg ? slipImg.name : ""}}
  img(v-if='form.slipImg && !slipImg' :src='form.slipImg' style='max-width: 300px')
  br
  br
  br
  b-field
    b-button(native-type='submit' type='is-info' :loading='loading') ยืนยันไปค่าย
</template>

<script>

import {patchUser, fetchUser} from '../store/actions'
import {storage} from '../store/firebase'

const field = [
  {field: "allergy", label: "ยา, อาหาร, สิ่งของ ที่แพ้", placeholder: "หากไม่มีใส่ -"},
  {field: "drug", label: "ยาที่ใช้อยู่", placeholder: "หากไม่มีใส่ -"},
  {field: "emerPhone", label: "เบอร์ติดต่อผู้ปกครอง", "placeholder": "xxx-xxx-xxxx"},
  {field: "emerRelate", label: "ความสัมพันธ์กับเจ้าของเบอร์", placeholder: "แม่"},
  {field: "nationalID", label: "เลขประจำตัวประชาชน (เผื่อเข้า รพ.)", placeholder: "xxxxxxxxxxxxxx"},
  {field: "house", label: "ที่อยู่ปัจจุบัน", type: "textarea", placeholder: "xxx/xxx"},
  {field: null},
  {field: null},
  {field: "slipDate", label: "วันที่โอน", placeholder: "8 Nov"},
  {field: "slipTime", label: "เวลาโอน", placeholder: "20:00:00"},
  {field: "slipName", label: "ชื่อบัญชีที่ใช้ในการโอน", placeholder: "กฤษฏิ์ พรไพรินทร์"},
  {field: "slipName", label: "ธนาคาร", placeholder: "K-Bank"},
  {field: "slipNum", label: "รหัสอ้างอิง", placeholder: "xxxxxxxxxxxxxxx"},
  {field: null},
  {field: null},
  {field: "bank", label: "ชื่อบัญชีในการโอนคืน", placeholder: "กฤษฏิ์ พรไพรินทร์"},
  {field: "bank", label: "ธนาคารในการโอนคืน", placeholder: "K-BANK"},
  {field: "bank", label: "เลขบัญชีในการโอนคืน", placeholder: "xxx-xxx-xx-xxxxxx-x"},
]

export default {
  name: "form-confirm",
  data() {
    const user = this.$store.getters.user;
    const form = _.pick(user, _.map(field, 'field').concat("slipImg"))
    return {
      loading: false,
      slipImg: null,
      slipPromise: new Promise(() => {}),
      form,
      field
    }
  },
  methods: {
    async submit() {
      if (!this.slipImg && !this.form.slipImg) {
        this.$buefy.toast.open("no slip image")
        return;
      }
      this.loading = true;
      if (this.slipImg) {
        this.form.slipImg = await this.slipPromise;
      }
      await patchUser(this.form).finally(() => {
        this.loading = false;
        this.$router.push({
          path: "/success",
          query: {
            message: "ยืนยันเสร็จสิ้น"
          }
        });
      })
      await fetchUser();
    }
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
    ouid() {
      return this.user._id
    },
    slipLink() {
      return `https://firebasestorage.googleapis.com/v0/b/hugsnan-221417.appspot.com/o/slips%2F${this.ouid}.png?alt=media`
    }
  },
  watch: {
    slipImg() {
      const path = `slips/${this.ouid}.png`;
      this.slipPromise = storage.ref(path).put(this.slipImg).then(async (res) => {
        return storage.ref(path).getDownloadURL();
      })
    }
  }
}
</script>
