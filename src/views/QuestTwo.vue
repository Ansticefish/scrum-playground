<template lang="pug">
div Quest-2
</template>

<script>
export default {
  name: 'QuestTwo',
  beforeCreate() {
    this.$store.commit('updateProgress', '33.3vw')
  }
}
</script>

<style lang="scss" scoped>

</style>