<template lang='pug'>
Layout
  h1.title ขอแสดงความยินดีด้วย 😆
  RegisterMessage
  br
  FormConfirm

</template>

<script>
import Layout from "@/components/Layout.vue";
import RegisterMessage from "@/components/RegisterMessage.vue";
import FormConfirm from "@/components/FormConfirm.vue";

export default {
  name: "confirm",
  components: {
    Layout,
    FormConfirm,
    RegisterMessage
  }
};
</script>

<style lang='scss'>
#register {
  height: 100vh;
  background-image: url("~@/assets/wallpaper.jpg");
  background-color: #090B0D;
  background-position: center;
  background-size: cover;
  z-index: -1;
  overflow: scroll;
  padding-top: 3rem;
  padding-bottom: 3rem;
  .section {
    background-color: white;
  }
  .label {
    margin-top: 1rem;
    line-height: 2rem;
    margin-bottom: 1rem;
  }
}
</style>

