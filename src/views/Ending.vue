<template lang="pug">
div Ending
</template>

<script>
export default {
  name: 'Ending',
  beforeCreate() {
    this.$store.commit('updateProgress', '100vw')
  }
}
</script>

<style lang="scss" scoped>

</style>