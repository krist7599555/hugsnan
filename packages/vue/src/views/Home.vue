<template>
  <div class="home">
    <HomeParallax />
    <div class='overlay' />
    <HomeContent style='background-color: #010101;'/>
    <HomeParallax />

  </div>
</template>

<script>
// @ is an alias to /src
import HomeParallax from "@/components/HomeParallax.vue";
import HomeContent from "@/components/HomeContent.vue";
import dayjs from 'dayjs'
import Rellax from 'rellax';

export default {
  name: "home",
  components: {
    HomeParallax,
    HomeContent,
  },
  mounted() {
    this.$root.rellax  = new Rellax('.rellax', { center: true });
    setTimeout(() => {
      window.scroll(0, 0)
    }, 100);
  }
};
</script>

<style lang="scss" scoped>
.overlay {
  background-color: #010101;
  position: absolute;
  z-index: -1000;
  width: 100%;
  height: 100vh;
}
</style>
