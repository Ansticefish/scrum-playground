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
        div.block(v-for="n in 2")
          p
</template>

<script>
import { drag, allowDrag } from '../utils/mixins'

export default {
  name: 'QuestOneList',
  mixins: [drag, allowDrag],
  data() {
    return {
      todoList: [
        {
          id: '1',
          point: 8,
          content: '後台職缺管理功能（資訊上架、下架、顯示應徵者資料)',
          isDragged: false,
        },
        {
          id: '2',
          point: 5,
          content: '應徵者的線上履歷編輯器',
          isDragged: false,
        },
        {
          id: '3',
          point: 13,
          content: '會員系統（登入、註冊、權限管理）',
          isDragged: false,
        },
        {
          id: '4',
          point: 8,
          content: '前台職缺列表、應徵',
          isDragged: false,
        },
      ],
      deletedItems: []
    }
  },
}
</script>

<style lang="scss" scoped>
.todo {
  width: 30%;
  height: 95%;
  position: relative;
  margin: 0 auto;
  @include listStyle (radial-gradient(50% 50% at 50% 50%, #00FFE0 0%, rgba(0, 255, 224, 0)100%),
    rgba(0, 255, 224, 0.1),
    rgba(0, 255, 224, 0.2),
    rgba(0, 255, 224, 0.3),
    $primary-default,
    $primary-dark,
    $primary-default,
    rgba(0, 255, 224, 0.7));
}

.dragged {
  opacity: 0.3;
}
</style>