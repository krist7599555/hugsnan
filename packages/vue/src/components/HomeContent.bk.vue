<template lang='pug'>
    section.section.is-clipped(style='margin-top: 300px;')
      .content(style='max-width: 1000px; margin: auto; margin-top: calc(10vh + 50px)')
        .imgs
          figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="0"): img(loading="lazy" src='../assets/album/1.jpg' @load='loadedImg')
          figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="0"): img(loading="lazy" src='../assets/album/2.jpg' @load='loadedImg')
          figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="2"): img(loading="lazy" src='../assets/album/3.jpg' @load='loadedImg')
          figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="2"): img(loading="lazy" src='../assets/album/4.jpg' @load='loadedImg')
          figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="6"): img(loading="lazy" src='../assets/album/5.jpg' @load='loadedImg')
          figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="6"): img(loading="lazy" src='../assets/album/6.jpg' @load='loadedImg')
          .kjktptn
            .label เข้าใจ
            .overlay.rellax(data-rellax-percentage="0.5" data-rellax-speed="-6")
              span เข้า
              br.is-hidden-tablet
              span ใจ
          figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="0"): img(loading="lazy" src='../assets/album/7.jpg' @load='loadedImg')
          figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="6"): img(loading="lazy" src='../assets/album/8.jpg' @load='loadedImg')
          figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="0"): img(loading="lazy" src='../assets/album/9.jpg' @load='loadedImg')
          figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="2"): img(loading="lazy" src='../assets/album/10.jpg' @load='loadedImg')
          figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="0"): img(loading="lazy" src='../assets/album/11.jpg' @load='loadedImg')
          figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="6"): img(loading="lazy" src='../assets/album/12.jpg' @load='loadedImg')
          .kjktptn
            .label เข้าถึง
            .overlay.rellax(data-rellax-percentage="0.5" data-rellax-speed="-6")
              span เข้า
              br.is-hidden-tablet
              span ถึง
          figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="0"): img(loading="lazy" src='../assets/album/13.jpg' @load='loadedImg')
          figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="4"): img(loading="lazy" src='../assets/album/14.jpg' @load='loadedImg')
          figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="6"): img(loading="lazy" src='../assets/album/25.jpg' @load='loadedImg')
          figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="4"): img(loading="lazy" src='../assets/album/16.jpg' @load='loadedImg')
          figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="0"): img(loading="lazy" src='../assets/album/26.jpg' @load='loadedImg')
          figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="0"): img(loading="lazy" src='../assets/album/18.jpg' @load='loadedImg')
          .kjktptn
            .label พัฒนา
            .overlay.rellax(data-rellax-percentage="0.5" data-rellax-speed="-6")
              span พัฒ
              br.is-hidden-tablet
              span นา
          figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="0"): img(loading="lazy" src='../assets/album/19.jpg' @load='loadedImg')
          figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="6"): img(loading="lazy" src='../assets/album/20.jpg' @load='loadedImg')
          figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="0"): img(loading="lazy" src='../assets/album/21.jpg' @load='loadedImg')
          figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="6"): img(loading="lazy" src='../assets/album/22.jpg' @load='loadedImg')
          figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="6"): img(loading="lazy" src='../assets/album/29.jpg' @load='loadedImg')
          figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="4"): img(loading="lazy" src='../assets/album/30.jpg' @load='loadedImg')
          figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="2"): img(loading="lazy" src='../assets/album/31.jpg' @load='loadedImg')
          figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="2"): img(loading="lazy" src='../assets/album/32.jpg' @load='loadedImg')
          figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="4"): img(loading="lazy" src='../assets/album/33.jpg' @load='loadedImg')
          figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="6"): img(loading="lazy" src='../assets/album/34.jpg' @load='loadedImg')
          figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="6"): img(loading="lazy" src='../assets/album/36.jpg' @load='loadedImg')
          figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="0"): img(loading="lazy" src='../assets/album/37.jpg' @load='loadedImg')
          figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="2"): img(loading="lazy" src='../assets/album/38.jpg' @load='loadedImg')
          figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="6"): img(loading="lazy" src='../assets/album/39.jpg' @load='loadedImg')
          figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="2"): img(loading="lazy" src='../assets/album/40.jpg' @load='loadedImg')
          figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="0"): img(loading="lazy" src='../assets/album/41.jpg' @load='loadedImg')
          figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="6"): img(loading="lazy" src='../assets/album/42.jpg' @load='loadedImg')
          figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="4"): img(loading="lazy" src='../assets/album/43.jpg' @load='loadedImg')
          figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="0"): img(loading="lazy" src='../assets/album/44.jpg' @load='loadedImg')
          figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="6"): img(loading="lazy" src='../assets/album/47.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="4"): img(loading="lazy" src='../assets/album/48.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="0"): img(loading="lazy" src='../assets/album/50.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="2"): img(loading="lazy" src='../assets/album/51.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="2"): img(loading="lazy" src='../assets/album/52.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="4"): img(loading="lazy" src='../assets/album/53.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="6"): img(loading="lazy" src='../assets/album/54.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="2"): img(loading="lazy" src='../assets/album/55.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="6"): img(loading="lazy" src='../assets/album/56.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="0"): img(loading="lazy" src='../assets/album/57.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="4"): img(loading="lazy" src='../assets/album/58.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="2"): img(loading="lazy" src='../assets/album/60.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="2"): img(loading="lazy" src='../assets/album/61.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="6"): img(loading="lazy" src='../assets/album/62.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="2"): img(loading="lazy" src='../assets/album/63.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="4"): img(loading="lazy" src='../assets/album/64.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="6"): img(loading="lazy" src='../assets/album/65.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="6"): img(loading="lazy" src='../assets/album/66.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="6"): img(loading="lazy" src='../assets/album/67.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="4"): img(loading="lazy" src='../assets/album/68.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="6"): img(loading="lazy" src='../assets/album/69.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="0"): img(loading="lazy" src='../assets/album/70.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="0"): img(loading="lazy" src='../assets/album/71.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="4"): img(loading="lazy" src='../assets/album/72.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="6"): img(loading="lazy" src='../assets/album/73.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="6"): img(loading="lazy" src='../assets/album/74.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="4"): img(loading="lazy" src='../assets/album/75.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="6"): img(loading="lazy" src='../assets/album/76.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="4"): img(loading="lazy" src='../assets/album/77.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="0"): img(loading="lazy" src='../assets/album/78.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="6"): img(loading="lazy" src='../assets/album/79.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="4"): img(loading="lazy" src='../assets/album/80.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="2"): img(loading="lazy" src='../assets/album/81.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="6"): img(loading="lazy" src='../assets/album/82.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="6"): img(loading="lazy" src='../assets/album/83.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="4"): img(loading="lazy" src='../assets/album/84.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="6"): img(loading="lazy" src='../assets/album/85.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="0"): img(loading="lazy" src='../assets/album/86.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="4"): img(loading="lazy" src='../assets/album/87.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="6"): img(loading="lazy" src='../assets/album/88.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="4"): img(loading="lazy" src='../assets/album/89.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="4"): img(loading="lazy" src='../assets/album/90.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="4"): img(loading="lazy" src='../assets/album/91.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="2"): img(loading="lazy" src='../assets/album/92.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="4"): img(loading="lazy" src='../assets/album/93.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="6"): img(loading="lazy" src='../assets/album/94.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="2"): img(loading="lazy" src='../assets/album/95.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="4"): img(loading="lazy" src='../assets/album/96.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="6"): img(loading="lazy" src='../assets/album/97.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="4"): img(loading="lazy" src='../assets/album/99.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="0"): img(loading="lazy" src='../assets/album/100.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="4"): img(loading="lazy" src='../assets/album/101.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="4"): img(loading="lazy" src='../assets/album/102.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="4"): img(loading="lazy" src='../assets/album/103.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="6"): img(loading="lazy" src='../assets/album/104.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="2"): img(loading="lazy" src='../assets/album/105.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="2"): img(loading="lazy" src='../assets/album/106.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="6"): img(loading="lazy" src='../assets/album/107.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="2"): img(loading="lazy" src='../assets/album/109.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="2"): img(loading="lazy" src='../assets/album/110.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="6"): img(loading="lazy" src='../assets/album/111.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="6"): img(loading="lazy" src='../assets/album/112.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="0"): img(loading="lazy" src='../assets/album/113.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="2"): img(loading="lazy" src='../assets/album/114.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="6"): img(loading="lazy" src='../assets/album/115.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="4"): img(loading="lazy" src='../assets/album/116.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="2"): img(loading="lazy" src='../assets/album/118.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="2"): img(loading="lazy" src='../assets/album/120.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="6"): img(loading="lazy" src='../assets/album/121.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="6"): img(loading="lazy" src='../assets/album/122.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="6"): img(loading="lazy" src='../assets/album/123.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="0"): img(loading="lazy" src='../assets/album/125.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="4"): img(loading="lazy" src='../assets/album/126.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="2"): img(loading="lazy" src='../assets/album/127.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="4"): img(loading="lazy" src='../assets/album/128.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="2"): img(loading="lazy" src='../assets/album/131.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="2"): img(loading="lazy" src='../assets/album/132.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="6"): img(loading="lazy" src='../assets/album/133.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="6"): img(loading="lazy" src='../assets/album/134.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="0"): img(loading="lazy" src='../assets/album/135.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="0"): img(loading="lazy" src='../assets/album/136.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="0"): img(loading="lazy" src='../assets/album/137.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="0"): img(loading="lazy" src='../assets/album/138.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="6"): img(loading="lazy" src='../assets/album/139.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="4"): img(loading="lazy" src='../assets/album/140.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="6"): img(loading="lazy" src='../assets/album/141.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="2"): img(loading="lazy" src='../assets/album/142.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="4"): img(loading="lazy" src='../assets/album/143.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="6"): img(loading="lazy" src='../assets/album/144.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="6"): img(loading="lazy" src='../assets/album/145.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="6"): img(loading="lazy" src='../assets/album/147.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="6"): img(loading="lazy" src='../assets/album/148.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="4"): img(loading="lazy" src='../assets/album/149.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="4"): img(loading="lazy" src='../assets/album/150.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="0"): img(loading="lazy" src='../assets/album/155.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="4"): img(loading="lazy" src='../assets/album/156.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="4"): img(loading="lazy" src='../assets/album/158.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="2"): img(loading="lazy" src='../assets/album/159.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="6"): img(loading="lazy" src='../assets/album/160.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="2"): img(loading="lazy" src='../assets/album/161.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="6"): img(loading="lazy" src='../assets/album/162.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="2"): img(loading="lazy" src='../assets/album/163.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="6"): img(loading="lazy" src='../assets/album/164.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="6"): img(loading="lazy" src='../assets/album/165.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="2"): img(loading="lazy" src='../assets/album/166.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="2"): img(loading="lazy" src='../assets/album/167.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="6"): img(loading="lazy" src='../assets/album/172.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="0"): img(loading="lazy" src='../assets/album/173.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="2"): img(loading="lazy" src='../assets/album/174.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="2"): img(loading="lazy" src='../assets/album/175.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="0"): img(loading="lazy" src='../assets/album/176.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="4"): img(loading="lazy" src='../assets/album/177.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="6"): img(loading="lazy" src='../assets/album/178.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="4"): img(loading="lazy" src='../assets/album/179.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="4"): img(loading="lazy" src='../assets/album/180.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="4"): img(loading="lazy" src='../assets/album/181.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="6"): img(loading="lazy" src='../assets/album/182.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="6"): img(loading="lazy" src='../assets/album/183.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="2"): img(loading="lazy" src='../assets/album/184.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="4"): img(loading="lazy" src='../assets/album/186.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="0"): img(loading="lazy" src='../assets/album/187.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="6"): img(loading="lazy" src='../assets/album/188.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="4"): img(loading="lazy" src='../assets/album/189.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="4"): img(loading="lazy" src='../assets/album/190.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="0"): img(loading="lazy" src='../assets/album/191.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="2"): img(loading="lazy" src='../assets/album/193.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="2"): img(loading="lazy" src='../assets/album/194.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="0"): img(loading="lazy" src='../assets/album/195.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="0"): img(loading="lazy" src='../assets/album/196.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="0"): img(loading="lazy" src='../assets/album/197.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="4"): img(loading="lazy" src='../assets/album/198.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="0"): img(loading="lazy" src='../assets/album/200.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="4"): img(loading="lazy" src='../assets/album/201.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="2"): img(loading="lazy" src='../assets/album/202.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="6"): img(loading="lazy" src='../assets/album/203.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="4"): img(loading="lazy" src='../assets/album/204.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="4"): img(loading="lazy" src='../assets/album/205.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="4"): img(loading="lazy" src='../assets/album/206.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="6"): img(loading="lazy" src='../assets/album/207.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="2"): img(loading="lazy" src='../assets/album/208.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="6"): img(loading="lazy" src='../assets/album/209.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="6"): img(loading="lazy" src='../assets/album/210.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="6"): img(loading="lazy" src='../assets/album/211.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="2"): img(loading="lazy" src='../assets/album/212.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="2"): img(loading="lazy" src='../assets/album/213.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="6"): img(loading="lazy" src='../assets/album/214.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="4"): img(loading="lazy" src='../assets/album/215.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="4"): img(loading="lazy" src='../assets/album/216.jpg' @load='loadedImg')
          //- figure.rellax(data-rellax-percentage="0.5" data-rellax-speed="6"): img(loading="lazy" src='../assets/album/217.jpg' @load='loadedImg')
</template>

<script>
import Rellax from "rellax";
import dayjs from 'dayjs'

function getCountDown() {
  return dayjs("2019 Oct 27").fromNow()
}

export default {
  methods: {
    loadedImg(e) {
      this.$root.$options.rellax.refresh()
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
}

figure {
  position: relative;
  margin: 0;
}

figure > img {
  height: auto;
  margin-top: 30px;
  margin-bottom: 30px;
  position: relative;
  padding: 0.5rem 0.5rem 3rem 0.5rem;
  background-color: whitesmoke;
  box-shadow: -4px 5px 20px 0px #584b3ed4;
}

figure {

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


.kjktptn {
  position: relative;
  margin-top: 180px;
  margin-bottom: 230px;
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
  .overlay {
    position: absolute;
    left: 0;
    top: 0;
    color: #fff3;
    font-size: 20rem;
    font-weight: bold;
    @include mobile {
      font-size: 19rem;
      margin-left: 1rem;
      line-height: 19rem;
    }
  }
}
</style>
