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
      // if there is content already
      if(!item.content.length && originalId === undefined) {
        // dragged from todoList
        this.$set(this.sprintList, item.id -1, {
          ...item,
          point,
          content,
          originalId: id
        } )
        this.$emit('delete-data', newItem.id)
      } else if (!item.content.length) {
        console.log('two')
        this.$set(this.sprintList, id - 1, {
          ...newItem,
          point: '',
          content: '',
          originalId: 0
        })
        this.$set(this.sprintList, item.id - 1, {
          ...item,
          point,
          content,
          originalId,
        })
      } else {
        this.$set(this.sprintList, id - 1, {
          ...newItem,
          point: '',
          content: '',
          originalId: 0
        })
        const restoredItemId = item.originalId
        this.$emit('restore-data', restoredItemId)
        this.$set(this.sprintList, item.id - 1, {
          ...item,
          point,
          content,
          originalId,
        })
      }
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