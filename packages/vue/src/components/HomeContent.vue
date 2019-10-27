<template lang='pug'>
  #homeContent
    section.section.is-clipped(style='margin-top: 300px;')
      .content(style='max-width: 1000px; margin: auto; margin-top: calc(10vh + 50px)')
        .imgs

          RellaxImg(v-if='grp == 1' v-for='{grp, speed, src} of gallery' :key='src' :speed='speed' :src='src' @load='loadedImg')

          .kjktptn
            .label เข้าใจ
            .overlay.rellax(data-rellax-percentage="0.5" data-rellax-speed="-4")
              span เข้า
              br.is-hidden-tablet
              span ใจ

          RellaxImg(v-if='grp == 2' v-for='{grp, speed, src} of gallery' :key='src' :speed='speed' :src='src' @load='loadedImg')

          .kjktptn
            .label เข้าถึง
            .overlay.rellax(data-rellax-percentage="0.5" data-rellax-speed="-4")
              span เข้า
              br.is-hidden-tablet
              span ถึง
          RellaxImg(v-if='grp == 3' v-for='{grp, speed, src} of gallery' :key='src' :speed='speed' :src='src' @load='loadedImg').kjktptn

          .kjktptn
            .label พัฒนา
            .overlay.rellax(data-rellax-percentage="0.5" data-rellax-speed="-4")
              span พัฒ
              br.is-hidden-tablet
              span นา

          RellaxImg(v-if='grp == 4' v-for='{grp, speed, src} of gallery' :key='src' :speed='speed' :src='src' @load='loadedImg')

          div(style='width: 100%')
            div(style='background-color: white; width: 3px; height: 500px; margin: 50rem auto 0 auto')

          .kjktptn
            .label
              .is-size-3 หลักการทรงงาน #[br]
              .is-size-5(style='font-weight: normal; line-height: 4rem;') ในพระบาทสมเด็จพระเจ้าอยู่หัว รัชกาลที่ ๙
          .kjktptn
            .title ระเบิดจากข้างใน
            .label.p พระองค์ทรงมุ่งเน้นเรื่องการพัฒนาคน ทรงตรัสว่า #[br] "ต้องระเบิดจากข้างใน" นั่น คือต้องสร้างความเข้มแข็ง#[br]ให้คนในชุมชนที่เราเข้าไปพัฒนา #[br]ให้มีสภาพพร้อมที่จะรับการพัฒนาเสียก่อน #[br]มิใช่การนำความเจริญหรือบุคคลจากสังคมภายนอก#[br]เข้าไปหาชุมชนหมู่บ้านที่ยังไม่ทันได้มีโอกาสเตรียมตัว
          .kjktptn
            .title เข้าใจ
            .label.p ทรงใช้หลัก "เข้าใจ เข้าถึง พัฒนา"#[br] นั่นคือก่อนจะทำอะไร ต้องมีความเข้าใจเสียก่อน #[br]เข้าใจภูมิประเทศ เข้าใจผู้คนในหลากหลายปัญหา #[br]ทั้งทางด้านกายภาพด้านจารีตประเพณีและวัฒนธรรม #[br]และระหว่างการดำเนินการนั้น#[br]จะต้องทำให้ผู้ที่เราจะไปทำงานกับเขา#[br]หรือทำงานให้เขานั้น "เข้าใจ" เราด้วย #[br]เพราะถ้าเราเข้าใจเขาแต่ฝ่ายเดียว โดยที่เขาไม่เข้าใจเรา #[br]ประโยชน์คงจะไม่เกิดขึ้นตามที่เรามุ่งหวังไว้
          .kjktptn
            .title
            .title เข้าถึง
            .label.p "เข้าถึง" ก็ เช่นกัน เมื่อรู้ปัญหาแล้ว #[br]เข้าใจแล้วก็ต้องเข้าถึง เพื่อให้นำไปสู่การปฏิบัติให้ได้ #[br]และเมื่อเข้าถึงแล้ว จะต้องทำอย่างไรก็ตาม#[br]ให้เขาอยากเข้าถึงเราด้วย
          .kjktptn
            .title พัฒนา
            .label.p ดังนั้น จะเห็นว่าเป็นการสื่อสารสองทางทั้งไปและกลับ #[br]ถ้าสามารถทำสองประการแรกได้สำเร็จ #[br]เรื่อง "การพัฒนา" จะลงเอยได้อย่างดี #[br]เพราะเมื่อต่างฝ่ายต่างเข้าใจกัน #[br]ต่างฝ่ายอยากจะเข้าถึงกันแล้ว #[br]การพัฒนาจะเป็นการตกลงร่วมกันทั้งสองฝ่าย #[br]ทั้งผู้ให้และผู้รับ

</template>

<script>
import Rellax from "rellax";
import dayjs from 'dayjs'
import RellaxImg from './RellaxImg'

function getCountDown() {
  return dayjs("2019 Oct 27").fromNow()
}

export default {
  components: { RellaxImg },
  data() {
    return  {
      gallery: require("./gallery").default
    }
  },
  methods: {
    loadedImg(e) {
      if (this.$root.rellax) {
        this.$root.rellax.refresh()
      }
    }
  }
};
</script>

<style lang='scss' scoped>
@import "../style/variables.scss";
.content {
  position: relative;
}
.imgs {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-bottom: 30vh;
  transition: all 1s ease;
}

#homeContent figure {
  position: relative;
  margin: 0;
}

#homeContent figure > img {
  height: auto;
  margin-top: 30px;
  margin-bottom: 30px;
  position: relative;
  padding: 0.5rem 0.5rem 3rem 0.5rem;
  background-color: whitesmoke;
  box-shadow: -4px 5px 20px 0px #584b3ed4;
}

#homeContent figure {

  @for $i from 1 through 300 {
    &[data-rellax-speed="#{$i}"] {
      z-index: $i + 1;
    }
    &:nth-child(even) {
      top: 100 + random(40) - 20 + px;
    }
    &:nth-child(#{$i}) > img {
      top: random(40) - 20 + px;
      left: (random(140) - 80) + px;
      @include tablet {
        transform: scale((random(70) + 80) / 100);
        width: (350 + random(100)) + px;
      }
    }
  }
}


#homeContent .kjktptn {
  position: relative;
  margin-top: 180px;
  margin-bottom: 280px;
  width: 100%;
  .label {
    margin-top: 180px;
    color: white;
    font-weight: bold;
    text-align: center;
    @include tablet {
      height: 300px;
      font-size: 6rem;
    }
    @include mobile {
      font-size: 5rem;
      height: 200px;
    }
  }
  .p {
    font-size: 1rem;
    font-weight: normal;
    max-width: 400px;
    margin: auto;
    line-height: 2rem;
  }
  .title {
    text-align: center;
    margin-bottom: 4rem;
    color: #f0f0f099;
  }
  .overlay {
    position: absolute;
    left: 0;
    top: 0;
    color: #fff3;
    font-size: 20rem;
    font-weight: bold;
    z-index: 0;
    @include mobile {
      font-size: 19rem;
      margin-left: 1rem;
      line-height: 19rem;
    }
  }
}
</style>
