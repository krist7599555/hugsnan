<template lang="pug">
.modal-card(style='margin: auto;')
  .modal-card-head
    p.modal-card-title setting
  .modal-card-body
    section
      .field
        .control
          .field.has-addons
            p.control
              a.button.is-static(style='width: 80px') num row
            p.control
              input.input(type="tel" v-model='state.nrow')
      .field
        .control
          .field.has-addons
            p.control
              a.button.is-static(style='width: 80px') num col
            p.control
              input.input(type="tel" v-model='state.ncol')
      .field
        .control
          textarea.textarea(
            :class="{'is-success': valid, 'is-danger': !valid}"
            v-model='text' 
            @input='setText($event.target.value)'
          )
      .field
        .control
          a.is-danger(@click='clearLocal') clear storage [ลบข้อมูล !!!]

  .modal-card-foot
</template>

<script lang="js">
/* eslint-disable */
import Vue from "vue";
import VueFlip from './Flip';
import _ from 'lodash';

import state from './Category.js'

export default Vue.extend({
  data() {
    return {
      valid: true,
      text: this.loadText(),
      state
    }
  },
  regexp: (/^q\d+$/),
  methods: {
    clearLocal() {
      localStorage.clear();
      window.location.reload(0)
    },
    testQ(txt) {
      return this.$options.regexp.test(txt)
    },
    loadText() {
      console.log("TCL: loadText -> state.questions()", state.questions())
      return _.join(_.map(state.questions(), (txt,k) => `q${k}:${txt}`), '\n')
    },
    setText(text) {
      this.valid = true;
      const ar = []
      for (const s of text.trim().split('\n')) {
        const [k, v] = _.split(s, ':', 2)
        if (this.testQ(k)) {
          ar.push([k.slice(1), v])
        } else {
          this.valid = false;
        }
      }
      if (this.valid) {
        for (const [k, v] of ar) {
          state.question(k, v)
        }
      }
    }
  }
});
</script>

<style lang="scss" scoped>
.hero-body .title {
  &.first {
    font-size: 3rem;
  }
  &.second {
    font-size: 4.4rem;
    line-height: 6rem;
  }
}
.bg {
  margin: 0 auto;
  min-height: 93vh;
  justify-content: center;
  vertical-align: middle;
  background-image: url(https://images.unsplash.com/photo-1484503753579-5a70ce11a6ff?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&dl=tim-trad-190770-unsplash.jpg);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-blend-mode: color-burn; //luminosity;
  background-color: #130c0dc2;
  
}
.is-flex {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -moz-flex;
  display: -webkit-flex;
}
.wrap {
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
}
.title {
  color: white;
  text-align: center;
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 0px;
}
.round-edge {
  border-radius: 10px 10px 10px 10px;
  overflow: hidden;
}
.flip-wrapper {
  margin: 4px;
  @media screen and (min-width: 500px) {
    margin: 3px 0px;
  }
  @media screen and (min-width: 800px) {
    margin: 3px 2px;
  }

}
.plate {
  opacity: 0.9;
  &.is-close {
    opacity: 0.3;
  }
  &.is-active {
    opacity: 1;
  }
}
.my-flex {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>
<style>
.modal-background {
    background-color: rgba(10, 10, 10, 0.95) !important;
}
</style>
