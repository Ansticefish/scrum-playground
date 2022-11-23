<template lang="pug">
div Quest-3
</template>

<script>
export default {
  name: 'QuestThree',
  beforeCreate() {
    this.$store.commit('updateProgress', '50vw')
  }
}
</script>

<style lang="scss" scoped>

</style>