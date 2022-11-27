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
      div.list__indicator(v-if="showSideBar")
        p 高
        img(src="~@/assets/image/todo-arrow.png")
        p 低
      div.list__blocks(v-if="!isQuest3")
        div.block(v-for="n in 2")
          p
      //- layout for quest 3
      div.list__blocks( 
        v-if="isQuest3"
        @dragenter="allowDrag($event)"
        @dragover="allowDrag($event)"
        @drop="addData($event)")
        div.block-quest3(
          v-for="item in todoList" 
          :key="item.id"
          draggable="true"
          :class="{'dragged': item.isDragged}"
          @dragstart="startDrag($event, item)"
          @dragend="endDrag(item)"
          )
          div.point {{ item.point}}
          p {{ item.content}}
</template>

<script>
import { drag, allowDrag } from '../utils/mixins'
import { v4 as uuidv4} from 'uuid'

export default {
  name: 'TodoList',
  props: {
    showSideBar: {
      type: Boolean,
      default: true
    },
    isQuest3: {
      type: Boolean,
      default: false
    },
    deletedId: {
      type: String
    },
    restoredId: {
      type: String
    }
  },
  mixins: [drag, allowDrag],
  data () {
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
  methods: {
    addData ($event) {
      const {originalId} = JSON.parse($event.dataTransfer.getData('application/json'))
      // prevent drag and drop inside todoList
      if(originalId === undefined) return
      const { content, point} = this.deletedItems.find(item => item.id === originalId)
      this.$set(this.todoList, this.todoList.length, {
        id: uuidv4(),
        point,
        content,
        isDragged: false
      })
      this.deletedItems = this.deletedItems.filter(item => item.id !== originalId)
      // use originalId instead of id to delete item so that watch can always be triggered
      this.$emit('delete-sprint', originalId)
    }
  },
  watch: {
    'deletedId': function () {
        const deletedItem = this.todoList.find(item => item.id === this.deletedId)
        this.deletedItems.push(deletedItem)
        this.todoList = this.todoList.filter(item => item.id !== this.deletedId)
    },
    'restoredId': function () {
      const restoredItem = this.deletedItems.find(item=> item.id === this.restoredId)
      this.deletedItems = this.deletedItems.filter(item=> item.id !== this.restoredId)
      this.todoList.push({
        ...restoredItem,
        id: uuidv4(),
        isDragged: false
      })
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
  rgba(0, 255, 224, 0.7)
  );
}

.dragged {
  opacity: 0.3;
}
</style>