<template lang="pug">
div.quest1
  div.head 
    div.character-wrapper
      img.hole(src="~@/assets/image/role-hole.png", alt="")
      img.light(src="~@/assets/image/role_g_light.png", alt="")
      img.character(src="~@/assets/image/role_g.png", alt="")
</template>

<script>
export default {
  name: 'QuestOne',
  beforeCreate() {
    this.$store.commit('updateProgress', '16.6vw')
  }
}
</script>

<style lang="scss" scoped>
.quest1 {
  @include containerStyle(100vw, 100vh, url('~@/assets/image/bg.png'));
}
</style>