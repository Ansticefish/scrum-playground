<template lang="pug">
div.dialogue(:class="[{'orange': orange}, {'yellow': yellow}, {'purple': purple}]") 
  div.name {{ speaker }}
  div.content
    slot
  div.pointer(v-if="showPointer" @click="changeStep")
</template>

<script>
export default {
  name: 'Dialogue',
  props: {
    speaker: {
      type: String,
      required: true
    },
    showPointer: {
      type: Boolean,
      default: false
    },
    // use it to toggle the class of .dialogue to change color
    orange: {
      type: Boolean,
      default: false
    },
    yellow: {
      type: Boolean,
      default: false
    },
    purple: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    changeStep () {
      this.$emit('change-step')
    }
  }
}
</script>

<style lang="scss" scoped>
.dialogue {
  @include popUp (
  70%, fit-content, 
  $primary-default, 
  $pop-up-linear, 
  rgba(0, 255, 224, 0.8),
  rgba(0, 255, 224, 0.95),
  $shadow-green,
  $pointer-green);
  &.orange {
    @include popUp (70%, fit-content,
    $role-team2,
    $team2-linear,
    #FF5C00,
    #FF5C00,
    $shadow-orange,
    $pointer-orange);
  }
  &.yellow {
    @include popUp (70%, fit-content,
    $role-team1,
    $team1-linear,
    #FFC700,
    #FFC700,
    $shadow-yellow,
    $pointer-yellow);
  }

  &.purple {
    @include popUp (70%, fit-content,
    $role-sm,
    $sm-linear,
    rgba(211, 85, 255, 0.8),
    rgba(211, 85, 255, 0.95),
    $shadow-purple,
    $pointer-purple
    );
  }
}
</style>