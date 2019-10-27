<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";

export default Vue.extend({
  name: "app",
  components: {},
});
</script>

<style lang="scss">
// @import "./style/main.scss";
</style>
