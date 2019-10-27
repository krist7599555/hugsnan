<template lang='pug' functional>
.layout
  section.section(style='max-width: 500px; margin: auto' :class='{"is-transparent": props.transparent}')
    slot
</template>

<script>
export default {
  props: {
    transparent: {

    }
  }
}
</script>

<style lang='scss'>
.layout {
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
    background-color: whitesmoke;
    &.is-transparent {
      background-color: transparent;
      color: whitesmoke;
    }
  }
}
</style>

