<template lang="pug">
div.sprint
  div.bg4
  div.bg3
  div.bg2 
  div.container 
    div.head 
      h2 開發A組的短衝待辦清單
      P Sprint Backlog 
    div.list 
      div.list__blocks
        div.block(
          v-for="item in sprintList" 
          :key="item.id"
          :class="{'block-quest3': item.content}"
          @dragenter="allowDrag($event)"
          @dragover="allowDrag($event)"
          @drop="addData($event, item)"
          draggable="true"
          @dragstart="startDrag($event, item)"
          @dragend="endDrag(item)"
          )
          div.point {{ item.point }}
          p {{ item.content}}
</template>

<script>
import { drag } from '../utils/mixins'
export default {
  name: 'SprintList',
  data () {
    return {
      sprintList: [
        {
          id: 1,
          point: '',
          content: '',
          isDragged: false,
          originalId: ''
        },
        {
          id: 2,
          point: '',
          content: '',
          isDragged: false,
          originalId: ''
        },
        {
          id: 3,
          point: '',
          content: '',
          isDragged: false,
          originalId: ''         
        },
      ],
    }
  },
  mixins: [drag],
  methods: {
    allowDrag($event) {
      $event.preventDefault()
    },
    addData($event, item) {
      const newItem = JSON.parse($event.dataTransfer.getData('application/json'))
      const { id, point, content, originalId} = newItem
      if(!item.content.length && originalId === undefined) {
        //  if there is not any content already & dragged from todoList
        this.resetSprint(item.id -1, item, point, content, id)
        this.$emit('delete-data', newItem.id)
      } else if (!item.content.length) {
        // if there is not any content already & dragged within sprintList
        this.resetSprint(id -1, newItem, '', '', '')
        this.resetSprint(item.id -1, item, point, content, originalId)
      } else if (item.content.length && originalId === undefined) {
        // if there is content already & dragged from todoList
        this.resetSprint(id -1, newItem, '', '', '')
        const restoredItemId = item.originalId
        this.$emit('restore-data', restoredItemId)
        this.$emit('delete-data', newItem.id)
        this.resetSprint(item.id -1, item, point, content, id )
      } else {
        // if there is content already & dragged within sprintList
        // to deal with drag and drop at the same block
        if(item.originalId === originalId) return
        this.resetSprint(id -1, newItem, '', '', '')
        const restoredItemId = item.originalId
        this.$emit('restore-data', restoredItemId)
        this.resetSprint(item.id -1, item, point, content, originalId)
      }
    },
    resetSprint (index, item, point, content, originalId) {
      this.$set(this.sprintList, index, {
        ...item,
        point,
        content,
        originalId,
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.sprint {
  @include listStyle (
    radial-gradient(50% 50% at 50% 50%, #FFC700 0%, rgba(255,199, 0, 0)100%),
    rgba(255, 122, 0, 0.2),
    rgba(255, 122, 0, 0.3),
    rgba(255, 122, 0, 0.4),
    $role-team1, 
    $role-team-dark,
    $role-team1,
    #FFC700,
  );
}
</style>