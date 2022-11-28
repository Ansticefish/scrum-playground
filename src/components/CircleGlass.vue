<template lang="pug">
div.circle-glass(:class="{'green': color === 'green'}")
  div.bg3
  div.bg2
  div.img-bg
    slot(name="bg")
  div.bg1
    slot(name="content")
</template>

<script>
export default {
  name: 'CircleGlass',
  props: {
    color: {
      type: String,
    }
  }
}
</script>

<style lang="scss" scoped>
// two kinds of colors
// three different kinds of img
.circle-glass {
  @include containerStyle (auto, 100%, transparent, none, 50%);
  aspect-ratio: 1;
  position: relative;
  .bg3, .bg2, .img-bg, .bg1, .img-container {
    @include containerStyle (100%, 100%, transparent, none, 50%);
  }
  .bg3, .bg2, .bg1 {
    @include position(absolute, $top: 12px, $left: 12px);
    backdrop-filter: blur(5px);
  }
  .bg3 {
    background: radial-gradient(50% 50% at 50% 50%, #FF00F5 0%, rgba(255, 48, 247, 0)100%);
    opacity: 0.9;
  }
  .bg2 {
    background: rgba(255, 0, 245, 0.25);
  }
  .img-bg {
    @include position(absolute, $top: 12px, $left: 12px);
    opacity: 0.3;
  }
  .bg1 {
    @include position(absolute, $top: 0, $left: 0);
    background: rgba(255, 0, 245, 0.35);
    z-index: 0;
  }
  &.green {
    .bg3{
      background: radial-gradient(50% 50% at 50% 50%, #00FFE0 0%, rgba(0, 255, 224, 0)100%); 
    }
    .bg2 {
      background: rgba(0, 255, 244, 0.15);
    }
    .bg1 {
      background: rgba(0, 255, 224, 0.3);
    }
  }
}
</style>