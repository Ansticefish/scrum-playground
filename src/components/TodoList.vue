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
      div.list__blocks
        div.block(v-if="!isQuest3" v-for="n in 2") 
          p
        div.block-quest3(
          v-if="isQuest3" 
          v-for="item in todoList" 
          :key="item.id"
          draggable="true"
          :class="{'dragged': item.isDragged}"
          @dragstart="startDrag($event, item)"
          @dragend="endDrag(item)"
          @dragenter="allowDrag($event)"
          @dragover="allowDrag($event)"
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
          list: 'todo'
        },
        {
          id: '2',
          point: 5,
          content: '應徵者的線上履歷編輯器',
          isDragged: false,
          list: 'todo'
        },
        {
          id: '3',
          point: 13,
          content: '會員系統（登入、註冊、權限管理）',
          isDragged: false,
          list: 'todo'
        },
        {
          id: '4',
          point: 8,
          content: '前台職缺列表、應徵',
          isDragged: false,
          list: 'todo'
        },
      ],
      deletedItems: []
    }
  },
  watch: {
    'deletedId': function () {
        console.log('delete', this.deletedId)
        const deletedItem = this.todoList.find(item => item.id === this.deletedId)
        this.deletedItems.push(deletedItem)
        this.todoList = this.todoList.filter(item => item.id !== this.deletedId)
    },
    'restoredId': function () {
      const restoredItem = this.deletedItems.find(item=> item.id === this.restoredId)
      console.log(restoredItem)
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