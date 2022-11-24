<template lang="pug">
div.todo
  div.bg4
  div.bg3
  div.bg2 
  div.container 
    div.head 
      h2 產品待辦清單
      P Product Backlog 
    div.list 
      div.list__indicator
        p 高
        img(src="~@/assets/image/todo-arrow.png")
        p 低
      div.list__blocks
        div.block(v-for="n in 4") 
          p
</template>

<script>
export default {
  name: 'TodoList'
}
</script>

<style lang="scss" scoped>
.todo {
  width: 30%;
  height: 95%;
  position: relative;
  margin: 0 auto;
  @include listStyle ( 
  radial-gradient(50% 50% at 50% 50%, #00FFE0 0%, rgba(0, 255, 224, 0)100%),
  rgba(0, 255, 224, 0.1), 
  rgba(0, 255, 224, 0.2), 
  rgba(0, 255, 224, 0.3),
  $primary-default, 
  $primary-dark,
  $primary-default);
}
</style>