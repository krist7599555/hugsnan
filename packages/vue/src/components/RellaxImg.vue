<template lang="pug" functional>
  figure._rellax(data-rellax-percentage="0.5" :data-rellax-speed="props.speed" :data-rellax-z-index='props.speed + 2')
    img(loading="lazy" :src='props.src' v-on="listeners")
</template>
