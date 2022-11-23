<template lang="pug">
div#app
  router-view
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

</style>
