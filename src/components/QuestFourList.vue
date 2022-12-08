<template lang="pug">
div.sprint-process
  img(src="@/assets/image/quest4-process.png")
  div.items-left
    div.items-done(
      v-for="item in doneList" 
      :key="item.id"
    )
      h2 {{ item.title }}
      p {{ item.subtitle}}
  div.step4
    h2 短衝
    p Sprint
  div.drop-item(
    v-for="item in dropList"
    :key="item.id"
    :class="[item.class, { 'hide': !item.isDropped}, {'alarm': item.isFalse}]"
    @dragenter="allowDrag"
    @dragover="allowDrag"
    @drop="addData($event, item)"
    draggable="true"
    @dragstart="startDrag($event, item)"
    @dragend="endDrag(item)"
    )
    h2 {{ item.title }}
    p {{ item.subtitle}}
  div.drag-list
    div.drag-item(
      v-for="item in dragList"
      :key="item.id"
      :class="[item.class, {'dragged': item.isDragged},{'hide': item.isDropped}]"
      draggable="true"
      @dragstart="startDrag($event, item)"
      @dragend="endDrag(item)"
    )
      h2 {{ item.title}}
      p {{ item.subtitle}}
  button.btn-finish(:disabled="correctBlocks < 3" :class="{'hide': !showButton }" @click="clickButton") 我完成了
      div 我完成了
</template>

<script>
import { drag, allowDrag } from '../utils/mixins' 

export default {
  name: 'QuestFourList',
  data () {
    return {
      doneList: [
        {
          id: 1,
          title: '產品待辦清單',
          subtitle: 'Product Backlog'
        },
        {
          id: 2,
          title: '短衝規劃會議',
          subtitle: 'Sprint Planning'
        },
        {
          id: 3,
          title: '短衝待辦清單',
          subtitle: 'Sprint Backlog'
        },
      ],
      dropList: [
        {
          id: 1,
          class: 'drop1',
          title: '短衝檢視會議',
          subtitle: 'Sprint Review',
          correctTitle: '每日站立會議',
          originalId: -1,
          isDragged: false,
          isDropped: false,
          isFalse: false
        },
        {
          id: 2,
          class: 'drop2',
          title: '每日站立會議',
          subtitle: 'Daily Scrum',
          correctTitle: '短衝檢視會議',
          originalId: -1,
          isDragged: false,
          isDropped: false,
          isFalse: false
        },
        {
          id: 3,
          class: 'drop3',
          title: '短衝自省會議',
          subtitle: 'Sprint Retrospective',
          correctTitle: '短衝自省會議',
          originalId: -1,
          isDragged: false,
          isDropped: false,
          isFalse: false
        }
      ],
      dragList: [
        {
          id: 1,
          class: 'drag1',
          title: '短衝檢視會議',
          subtitle: 'Sprint Review',
          isDragged: false,
          isDropped: false,
        },
        {
          id: 2,
          class: 'drag2',
          title: '每日站立會議',
          subtitle: 'Daily Scrum',
          isDragged: false,
          isDropped: false,
        },
        {
          id: 3,
          class: 'drag3',
          title: '短衝自省會議',
          subtitle: 'Sprint Retrospective',
          isDragged: false,
          isDropped: false,
        }
      ],
      showButton: true
    }
  },
  mixins: [drag, allowDrag],
  methods: {
    addData ($event, item) {
      const draggedItem = JSON.parse($event.dataTransfer.getData('application/json'))
      const { id, title, subtitle, originalId } = draggedItem
      const falseAnswer = this.correctOrNot(title, item.correctTitle)
      if ( originalId === undefined && item.originalId === -1) {
        // drag from outside onto an empty block
        this.resetDropList(item.id - 1, item, title, subtitle, id, true, falseAnswer)
        this.dragList[id - 1].isDropped = true
      } else if (item.originalId === -1) {
        // drag inside the list onto an empty block
        this.resetDropList(id -1, draggedItem, title, subtitle, -1, false, false)
        this.resetDropList(item.id - 1, item, title, subtitle, originalId, true, falseAnswer)
      } else if (originalId === undefined && item.originalId !== -1) {
        // drag from outside onto an occupied block
        this.dragList[item.originalId -1].isDropped = false
        this.resetDropList(item.id -1, item, title, subtitle, id, true, falseAnswer)
        this.dragList[id - 1].isDropped = true
      } else {
        // drag from inside onto an occupied block
        this.dragList[item.originalId - 1].isDropped = false
        this.resetDropList(id - 1, draggedItem, title, subtitle, -1, false, false)
        this.resetDropList(item.id - 1, item, title, subtitle, originalId, true, falseAnswer)
      }
    },
    resetDropList(index, item, title, subtitle, originalId, isDropped, isFalse) {
      this.$set(this.dropList, index, {
        ...item,
        title,
        subtitle,
        originalId,
        isDropped,
        isFalse
      })
    },
    correctOrNot (title, correctTitle) {
      if (title === correctTitle) {
        return false
      } else {
        return true
      }
    },
    clickButton () {
      this.$emit('change-step')
      this.showButton = false
    }
  },
  computed: {
    correctBlocks () {
      let filledBlocks = 0
      for (let i = 0; i < this.dropList.length; i++) {
        if (this.dropList[i].isDropped === true && this.dropList[i].isFalse === false ){
          filledBlocks += 1
        }
      }
      return filledBlocks
    }
  }
}
</script>

<style lang="scss" scoped>
@mixin blockStyle ($border, $h2, $p) {
  @include containerStyle(fit-content, fit-content, $bg-dark60, 4px solid #{$border}, 20px);
    margin-bottom: 3%;
    padding: 8px 50px;
    text-align: center;
    backdrop-filter: blur(5px);
    white-space: nowrap;
    cursor: grab;
    h2 {
      @extend %h2;
      color: #{$h2};
      font-size: 1.6vw;
    }
    p {
      @extend %listCaption;
      color: #{$p};
      font-size: 0.8vw;
    }
}


.sprint-process {
  @include containerStyle (100%, 90%, transparent, none, 0);
  margin: 0 auto;
  padding: 0 3%;
  position: relative;
  img {
    width: 80%;
    height: 110%;
  }
  .items-left {
    @include position (absolute, $top: 0, $left:5%);
    z-index: 1;
    .items-done {
      @include blockStyle($primary-default, $text-tint, $primary-dark);
      &::before {
        content: '';
        @include containerStyle(10%, 0, 0, 4px solid $primary-default, 0);
        @include position (absolute, $top: 50%, $left: -10%);
      }
    }
  }
  .step4 {
    @include blockStyle($primary-default, $text-tint, $primary-dark);
    @include position (absolute, $top: 73%, $left: 19%);
    &::after {
      content: '';
      @include containerStyle(0, 50%, 0, 4px solid $primary-default, 0);
      @include position (absolute, $top: -50%, $left: 50%);
      transform: translate(-50%, 0);
    }
  }
  .drop-item {
    @include blockStyle ($role-team1, $role-team1, $text-tint);
    position: absolute;
    &::before {
      content: '';
      @include containerStyle(0, 25%, 0, 4px solid $primary-default, 0);
      @include position (absolute, $bottom: -25%, $left: 50%);
    }
    &.drop1 {
      top: 54%;
      left: 37.6%;
      &::before {
        all: unset;
      }
      &::after {
        content: '';
        @include containerStyle(10%, 0, 0, 4px solid $primary-default, 0);
        @include position (absolute, $top: 50%, $left: -10%);
      }
    }
    &.drop2 {
      bottom: -12%;
      left: 35%;
    }
    &.drop3 {
      bottom: -12%;
      left: 55%;
    }
    &.hide {
      background: transparent;
      border: 2px dashed $primary-default;
      h2, p {
        opacity: 0;
      }
    }
    &.alarm {
      border-color: $danger;
    }
  }
  .drag-list {  
    @include position (absolute, $top: 8%, $right: 5%);
    .drag-item {
      @include blockStyle ($role-team1, $role-team1, $text-tint);
      &.dragged {
        opacity: 0.3;
      }
      &.hide {
        opacity: 0;
      }
    }
  }

  .btn-finish {
    @include button (10vw, 60px, $button-linear, $primary-default, $text-default);
    @include position (absolute, $bottom: -3%, $right: 8%);
    &.hide {
      display: none;
    }
  }
}
</style>