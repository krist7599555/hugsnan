/* eslint-disable */
<template lang="pug">
.bg
  b-modal(:active.sync="settingOpen")
    CategorySetting
  b-modal(:active.sync="questionOpen" :width="640" scroll="keep" @close='qnum === null')
    .hero
      .hero-body
        .title.first Question number {{question(latestnum).number}}
        .title.second {{question(latestnum).text}}

  .title Hugsnan Category 
  .is-inline
    .button(@click='settingOpen = true' style='top: 1.5rem; position: absolute; left: 1rem; background-color: transparent')
      i.fa.fa-cog(style='color: white')

  .is-flex.wrap.bg
    div(v-for='j in state.ncol')
      div(v-for='i in state.nrow')
        .flip-wrapper
          vue-flip(
            :ref='"v" + tonum(i, j)'
            :num='tonum(i, j)'
            :active-hover="false" 
            :active-click="true" 
            :width="boxSize.width" 
            :height='boxSize.height' 
            transition='1s' 
            @click='click(i, j, $event)'
          )
            template(slot='front')
              .box.plate(:style='{height: boxSize.height}') 
                h1(style='font-size: 3rem; margin: 0 auto') {{tonum(i,j)}}
            template(slot='back')
              .box.plate.is-close.my-flex(:style='{height: boxSize.height}' :class='{"is-active": tonum(i,j) == qnum}')
                  div(style='text-align: center;') {{question(tonum(i,j)).text}}
</template>

<script>
import Vue from "vue";
import VueFlip from './Flip';
import CategorySetting from './CategorySetting';
import _ from 'lodash';

import state from './Category.js'

export default Vue.extend({
  components: {
    VueFlip,
    CategorySetting
  },
  data() {

    return {
      settingOpen: false,
      questionOpen: false,
      state,
      qnum: null,
      tmout: null,
      skip: true,
      latestnum: null
    };
  },
  mounted() {
    // this.$nextTick(() => {
      const refs = this.$refs;
      console.log("TCL: mounted -> refs", refs)
      this.skip = true;
      for (const k in refs) {
        if (state.visible(k.replace('v', ''))) {
          
          // console.log("TCL: mounted -> +_.slice(k, 1))", +_.slice(k, 1), state.visible(+_.slice(k, 1)))
          refs[k][0].handlerHover();
        }
      }
      this.skip = false;
    // })
  },
  methods: {
    click(i, j, hover) {
      clearTimeout(this.tmout);
      this.qnum = this.tonum(i, j)
      this.latestnum = this.qnum;
      if (this.skip) {
        this.qnum = null;
        return;
      }
      if (hover) {
        state.visible(this.qnum, true)
        this.tmout = setTimeout(() => {
          this.questionOpen = true;
          this.qnum = null;
        }, 1000);
      } else {
        state.visible(this.qnum, false)
        this.qnum = null;
      }
    },
    tonum(i, j) {
      return (i - 1) * state.ncol + j;
    },
    question(nm) {
      return {
        number: nm,
        text: state.question(nm)
      }
    },
  },
  computed: {
    boxSize() {
      return {
        'height': `calc(85vh / ${state.nrow})`,
        'width': `calc(90vw / ${state.ncol})`
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
  // padding-top: 80px;
  // padding-bottom: 30px;
  justify-content: center;
  vertical-align: middle;
  background-image: url(https://images.unsplash.com/photo-1484503753579-5a70ce11a6ff?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&dl=tim-trad-190770-unsplash.jpg);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-blend-mode: color-burn; //luminosity;
  background-color: #130c0dc2;
  
  // @media screen and (min-width: 1000px) {
  //   padding-left: 5vw;
  //   padding-right: 5vw;
  // }
  // @media screen and (min-width: 1100px) {
  //   padding-left: 7vw;
  //   padding-right: 7vw;
  // }
  // @media screen and (min-width: 1200px) {
  //   padding-left: 13vw;
  //   padding-right: 13vw;
  // }
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
// .flip-container {
//   margin: 0;
//   min-height: 100%;
// }
// .card {
//   max-width: 200px;
//   margin: 10px;
//   @media screen and (max-width: 680px) {
//     max-width: 29vw;
//     margin-left: 1vw;
//     margin-right: 1vw;
//   }
// }

// .detail {
//   margin-top: 3rem;
//   margin-bottom: 5rem;
//   font-size: 0.6rem;
//   @media screen and (min-width: 680px) {
//     font-size: 1rem;
//   }

// }

// .help {
//   padding-left: 10px;
//   padding-bottom: 5px;
// }
.round-edge {
  border-radius: 10px 10px 10px 10px;
  overflow: hidden;
}
.flip-wrapper {
  margin: 6px 4px;
  @media screen and (max-width: 500px) {
    margin: 4px 3px;
  }
}
.plate {
  opacity: 0.9;
  &.is-close {
    // opacity: 0.3;
    background-color: #ffffff33;
    color: #ffffffee;
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
