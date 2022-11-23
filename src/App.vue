<template lang="pug">
div#app
  router-view
  footer
    p © 2022 The F2E | UI Design - EG | F2E - Anstice
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
// have reset all css using npm 
// set up general style
@font-face {
  font-family: 'Gen Jyuu Gothic P 700';
  src: url('~@/assets/fonts/GenJyuuGothic-P-Bold.ttf')
}

@font-face {
  font-family: 'Gen Jyuu Gothic P 500';
  src: url('~@/assets/fonts/GenJyuuGothic-P-Medium.ttf')
}

html, body {
  font-family: 'Gen Jyuu Gothic P 500';
  font-size: 100%; 
  letter-spacing: 0.05em;
  color: $bg-dark60;
}

button {
  &:hover {
    cursor: pointer;
  }
}

footer {
  @include position (fixed, $bottom: 0, $left: 0);
  @include containerStyle (100vw, 3vh, rgba(10, 13, 20, 0.8));
  @include flex(center, center);
  font-family: 'Gen Jyuu Gothic P 700';
  font-size: 0.875rem;
  color: $primary-dark;
}
</style>
