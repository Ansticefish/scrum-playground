<template lang="pug">
div.dialogue 
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
    color: {
      type: String,
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
  @include popUp (70%, fit-content, $primary-default, $pointer-green);
}
</style>