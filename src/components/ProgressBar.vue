<template lang="pug">
div.bar
  div.progress(ref="progress" :style="{width: progress}")
</template>

<script>
export default {
  name: 'ProgressBar',
  computed:{
    progress () {
      return this.$store.state.progress
    }
  }
}
</script>

<style lang="scss" scoped>
.bar {
  @include position (fixed, $top: 0, $left: 0);
  @include containerStyle(100vw, 0.8vh, $primary-dark);
  z-index: 1000;
  .progress {
    @include containerStyle(0.5vw, 0.8vh, linear-gradient(270deg, #00FFE0 0%, rgba(0, 255, 224, 0) 100%));
    transition: width 1s ease-in-out;
  }
}
</style>