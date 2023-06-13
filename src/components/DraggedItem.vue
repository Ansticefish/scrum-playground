<template lang="pug">
div.item.top(
  v-show="!item.isDropped"
  :class="[{'top': top}, {'bottom': !top},{'fade': step === 3}, {'dragged': item.isDragged}]"
  draggable="true"
  @dragstart="$emit('startDrag', [$event, item.id - 1])"
  @dragend="$emit('endDrag', item.id - 1)"
  ) {{ item.content }}
</template>

<script>
export default {
  name: 'DraggedItem',
  props: {
    item: {
      type: Object,
      required: true
    },
    top: {
      type: Boolean,
      default: true
    },
    step: {
      type: Number,
      default: 0
    }
  },
  watch: {
    item: {
      handler: function (newValue){
        console.log(newValue)
      },
      deep: true
    },
    step : {
      handler: function (newValue) {
        console.log(newValue)
      }
    }
  }
}

</script>

<style lang="scss" scoped>
.item {
  @include containerStyle(fit-content, fit-content, transparent, 4px solid $primary-default, 20px);
  max-width: 21rem;
  padding: 2% 3%;
  @extend %body;
  color: $text-default; 
  transition: all .5s ease-out;
  cursor: grab;
  &.fade {
    opacity: 0.4;
  }
  &.dragged {
    opacity: 0.2;
  }
  &.top {
    align-self: flex-end;
    margin-bottom: 15%;
  }        
  &.bottom {
    align-self: flex-start;
  }       
}

        
</style>