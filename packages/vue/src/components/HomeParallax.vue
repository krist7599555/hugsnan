<template>
  <header class="is-flex">
    <div class="rellax bg is-overlay" data-rellax-speed="-5">
      <div class='swipeup'>
        <b-icon icon='hand-point-up'></b-icon>
      </div>
    </div>
    <!-- :style="{'backgroundImage': 'url(' + require('@/assets/wallpaper.webp') + ')'}"> -->

    <div style="margin: auto">
      <img
        v-if='true'
        class="logo"
        alt="logo"
        name="logo"
        loading="eager"
        src="../assets/alphabet-white.png"
      />
      <div class="btns is-flex" style="justify-content: center; margin-bottom: 5rem;">
          <!-- v-if='isAllAnswer' -->
        <!-- <router-link
          to="/profile"
          class="button is-danger is-outlined is-inverted is-rounded is-medium"
          style="margin-right: 10px"
        >เลือกวันสัมภาษณ์</router-link> -->
        <router-link

          to="/confirm"
          class="button is-danger is-outlined is-inverted is-rounded is-medium"
          style="margin-right: 10px"
        >ยืนยันสิทธิไปค่าย</router-link>
        <router-link
          to="/schedule"
          class="button is-danger is-outlined is-inverted is-rounded is-medium"
        >ตารางเวลา</router-link>
      </div>
    </div>
  </header>

</template>

<script>
import Rellax from "rellax";
import dayjs from 'dayjs'


export default {
  data() {
    return {
    }
  },
  mounted() {
    // this.$root.rellax.refresh()
  },
  computed: {
    isAllAnswer() {
      const u = this.$store.getters.user
      return u && u.q1 && u.q2 && u.q3 && u.q4;
    }
  }
};
</script>

<style lang='scss' scoped>
@import "../style/variables.scss";
header {
  position: relative;
  height: 100vh;
  .bg {
    height: 100vh;
    // background-image: url(~@/assets/wallpaper.webp);
    // background-image: url(~@/assets/motion-nature-seafoam.jpg);
    background-image: url("~@/assets/wallpaper.jpg");
    background-color: #090B0D;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    z-index: -1;
  }
  .logo {
    width: 500px;
    margin-bottom: 0rem;
    margin-left: -1rem;
    @include mobile {
      width: 80vw;
      margin-left: 0rem;
    }
  }
  button.dsfgh {
    color: $primary !important;
  }
}

.logo {
  animation-duration: 1.5s;
  animation-name: slidein;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  // animation-direction: alternate;
  position: relative;
  animation-timing-function: ease;
}
.btns {
  animation-duration: 3s;
  animation-name: slidein;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  // animation-direction: alternate;
  position: relative;
  animation-timing-function: ease;
  // animation-delay: 200ms;
}


.swipeup {
  position: absolute;
  text-align: center;
  width: 100%;
  bottom: 4rem;
  animation: swipeup_bounce 2s ease 300ms infinite;
  color: #e0e0e0;
  margin-left: 3px;
}
</style>

<style lang="scss">
// .slidein {
//   animation-duration: 3s;
//   animation-name: slidein;
//   animation-iteration-count: 1;
//   // animation-direction: ;
// }

@keyframes slidein {
  0% {
    top: -30px;
    opacity: 0;
  }
  50% {
    top: -30px;
    opacity: 0;
  }
  100% {
    top: 0px;
  }
}

@keyframes swipeup_bounce {
  0% {
    bottom: 4rem;
    transform: rotate(-120deg);
  }
  30% {
    bottom: 7rem;
    transform: rotate(-30deg);
  }
  100% {
    bottom: 4rem;
    transform: rotate(-120deg);
  }
}


.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

</style>
