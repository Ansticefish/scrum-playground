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
          :class="[{'block-quest3': item.content}, {'red': item.content && totalPoints > 20}]"
          @dragenter="allowDrag($event)"
          @dragover="allowDrag($event)"
          @drop="addData($event, item)"
          draggable="true"
          @dragstart="startDrag($event, item)"
          @dragend="endDrag(item)"
          )
          div.point {{ item.point === 0? '': item.point }}
          p {{ item.content}}
        div.list-bar
          div.progress(:style="{'width': totalPoints/20*100 + '%'}" :class="{'red': totalPoints > 20}")
          p {{ totalPoints}} / 20 (5人)
</template>

<script>
import { drag } from '../utils/mixins'
export default {
  name: 'SprintList',
  props: {
    deletedSprint: {
      type: Number
    }
  },
  data () {
    return {
      sprintList: [
        {
          id: 1,
          point: 0,
          content: '',
          isDragged: false,
          originalId: ''
        },
        {
          id: 2,
          point: 0,
          content: '',
          isDragged: false,
          originalId: ''
        },
        {
          id: 3,
          point: 0,
          content: '',
          isDragged: false,
          originalId: ''         
        },
      ],
      totalPoints: 0
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
        this.resetSprint(id -1, newItem, 0, '', '')
        this.resetSprint(item.id -1, item, point, content, originalId)
      } else if (item.content.length && originalId === undefined) {
        // if there is content already & dragged from todoList
        const restoredItemId = item.originalId
        this.$emit('restore-data', restoredItemId)
        this.$emit('delete-data', newItem.id)
        this.resetSprint(item.id -1, item, point, content, id )
      } else {
        // if there is content already & dragged within sprintList
        // to deal with drag and drop at the same block
        if(item.originalId === originalId) return
        this.resetSprint(id -1, newItem, 0, '', '')
        const restoredItemId = item.originalId
        this.$emit('restore-data', restoredItemId)
        this.resetSprint(item.id -1, item, point, content, originalId)
      }
      this.updateTotalPoints()
    },
    resetSprint (index, item, point, content, originalId) {
      this.$set(this.sprintList, index, {
        ...item,
        point,
        content,
        originalId,
      })
    },
    updateTotalPoints () {
      this.totalPoints = 0
      for (let i = 0; i < this.sprintList.length; i++) {
        this.totalPoints += this.sprintList[i].point
      }
      this.$emit('update-points', this.totalPoints)
    }
  },
  watch: {
    'deletedSprint': function () {
      console.log('sprint update')
      const index = this.sprintList.findIndex(item=> item.originalId === this.deletedSprint)
      this.$set(this.sprintList, index, {
        id: index + 1,
        point: 0,
        content: '',
        isDragged: false,
        originalId: '' 
      })
      this.updateTotalPoints()
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