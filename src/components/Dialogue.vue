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
// set up the style for dialogue
@mixin dialogue ($w, $h, $color, $bg, $shadow1, $shadow2, $shadowImg, $pointer) {
  @include containerStyle(#{$w}, #{$h},#{$bg}, 2px solid #{$color}, 40px);
  box-shadow: 0px 0px 24px 8px #{$shadow1}, 0px 0px 8px 8px #{$shadow2};
  backdrop-filter: blur(5px);
  position: relative;
  @include flex (flex-start, center);
  padding: 2% 6%;
  padding-left: 8%;
  .name {
    @include containerStyle(fit-content, fit-content, #{$color});
    padding: .5px 24px;
    @extend %h3;
    color: $bg-dark;
    @include position (absolute, $top: 25%, $left: -0.7%);
    // set up the shadow
    &::before {
      content: '';
      background-image: #{$shadowImg};
      width: 10px;
      height: 52px;
      @include position (absolute, $top: 0, $left:0 );
      box-shadow: 0px 0px 24px 2px #{$shadow1}, 0px 0px 8px 0px #{$shadow2};
      z-index: -1;
    }
  }
  .content {
    width: 100%;
    height: fit-content;
    @extend %body;
    color: $text-default;
    span {
      color: $text-tint;
    }
    img {
      height: 180%;
      @include position (relative, $top: 10px);
    }
    strong {
      @extend %h2;
    }
  }
  .pointer {
    @include position(absolute, $bottom: 15%, $right: 3%);
    @include containerStyle(5%, 15%, #{$pointer});
    background-repeat: no-repeat;
    background-size: contain;
    transition: opacity 0.1s ease-in;
    animation: pointerJump 1s alternate infinite;
    &:hover {
      cursor: pointer;
      opacity: 0.6;
    }
  }
}

@keyframes pointerJump {
  0% {
    transform: translateY(45%);
  }
  35% {
    transform: translateY(48%);
  }
  65% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(35%);
  }

}

.dialogue {
  @include dialogue (
  70%, fit-content, 
  $primary-default, 
  $pop-up-linear, 
  rgba(0, 255, 224, 0.8),
  rgba(0, 255, 224, 0.95),
  $shadow-green,
  $pointer-green);
  &.orange {
    @include dialogue (70%, fit-content,
    $role-team2,
    $team2-linear,
    #FF5C00,
    #FF5C00,
    $shadow-orange,
    $pointer-orange);
  }
  &.yellow {
    @include dialogue (70%, fit-content,
    $role-team1,
    $team1-linear,
    #FFC700,
    #FFC700,
    $shadow-yellow,
    $pointer-yellow);
  }

  &.purple {
    @include dialogue (70%, fit-content,
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