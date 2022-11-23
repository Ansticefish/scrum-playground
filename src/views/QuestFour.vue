<template lang="pug">
div Quest-4
</template>

<script>
export default {
  name: 'QuestFour',
  beforeCreate() {
    this.$store.commit('updateProgress', '66.6vw')
  }
}
</script>

<style lang="scss" scoped>

</style>