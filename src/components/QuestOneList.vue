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
        div.block(
        v-for="item in list"
        :class="[{'fill': item.content}, {'dragged': item.isDragged}]" 
        @dragenter="allowDrag($event)"
        @dragover="allowDrag($event)"
        @drop="addData($event, item)"
        draggable="true"
        @dragstart="startDrag($event, item)"
        @dragend="endDrag(item)"
        )
          p {{ item.content }}
</template>

<script>
import { drag, allowDrag } from '../utils/mixins'

export default {
  name: 'QuestOneList',
  props: {
    deletedId: {
      type: Object
    }
  },
  mixins: [drag, allowDrag],
  data() {
    return {
      list: [
        {
          id: 1,
          content: '',
          isDragged: false,
          originalId: -1
        },
        {
          id: 2,
          content: '',
          isDragged: false,
          originalId: -1
        },
        {
          id: 3,
          content: '',
          isDragged: false,
          originalId: -1
        },
        {
          id: 4,
          content: '',
          isDragged: false,
          originalId: -1
        },
      ],
    }
  },
  methods: {
    addData($event, item) {
      const newItem = JSON.parse($event.dataTransfer.getData('application/json'))
      const { id, content, originalId} = newItem
      if (!item.content.length && originalId === undefined) {
        // the block is empty && drag from outside
        this.resetList(item.id - 1, item.id, content, id)
        this.$emit('hide-item', id)
      } else if (!item.content.length) {
        // the block is empty && drag from inside
        this.resetList(id -1, id, '', -1)
        this.resetList(item.id -1, item.id, content, originalId)
      } else if (item.content.length && originalId === undefined) {
         // the block is occupied && drag from outside
         this.$emit('show-item', item.originalId)
         this.$emit('hide-item', id)
         this.resetList(item.id -1, item.id, content, id)
      } else {
        // the block is occupied && drag from inside
        if(item.id === id) return
        this.$emit('show-item', item.originalId)
        this.resetList(id - 1, id, '', -1)
        this.resetList(item.id - 1, item.id, content, originalId)
      }
    },
    resetList(index, id, content, originalId) {
      this.$set(this.list, index, {
        id,
        content,
        isDragged: false,
        originalId,
      })
    },
    deleteItem () {
      const index = this.deletedId.id - 1
      this.resetList(index, index + 1, '', -1)
    }
  },
  watch: {
    'deletedId':{ 
      handler: 'deleteItem',
      deep: true
    }
  }
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
    $primary-default,
    rgba(0, 255, 224, 0.7));
}
.dragged {
  opacity: 0.3;
}
</style>