<template lang="pug">
div.story-point
  img.time(src="~@/assets/image/quest2-time.png" :class="{'hide': !showTime}")
  div.story(v-for="item in stories" :key="item.id")
    img.bg(:src="item.img")
    img.clock(:src="item.clock" v-if="step === 5")
    div.point(:class="item.color") {{ item.point }}
</template>

<script>
export default {
  name: 'StoryPoint',
  props: {
    step: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      stories: [
        {
          id: 1,
          img: require('@/assets/image/quest2-story.png'),
          clock: require('@/assets/image/quest2-time_1.png'),
          color: 'green',
          point: 1
        },
        {
          id: 2,
          img: require('@/assets/image/quest2-story.png'),
          clock: require('@/assets/image/quest2-time_2.png'),
          color: 'green',
          point: 2
        },
        {
          id: 3,
          img: require('@/assets/image/quest2-story.png'),
          clock: require('@/assets/image/quest2-time_3.png'),
          color: 'green',
          point: 3
        },
        {
          id: 4,
          img: require('@/assets/image/quest2-story.png'),
          clock: require('@/assets/image/quest2-time_4.png'),
          color: 'green',
          point: 5
        },
        {
          id: 5,
          img: require('@/assets/image/quest2-story.png'),
          clock: require('@/assets/image/quest2-time_5.png'),
          color: 'green',
          point: 8
        },
        {
          id: 6,
          img: require('@/assets/image/quest2-story.png'),
          clock: require('@/assets/image/quest2-time_6.png'),
          color: 'green',
          point: 13
        },
        {
          id: 7,
          img: require('@/assets/image/quest2-story.png'),
          clock: require('@/assets/image/quest2-time_7.png'),
          color: 'green',
          point: 21
        },
      ],
      showTime: true
    }
  },
  watch: {
    'step': function () {
      if(this.step === 5) {
        this.stories[5] = {
          ...this.stories[5],
          img: require('@/assets/image/quest2-story-orange.png'),
          color: 'orange'
        }
        this.stories[6] = {
          ...this.stories[6],
          img: require('@/assets/image/quest2-story-red.png'),
          color: 'red'
        }
        this.showTime = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.story-point {
  width: 65%;
  height: 70%;
  margin: 5% auto;
  @include flex (center, center);
  flex-wrap: wrap;
  .time {
    width: calc(100%/6);
    position: relative;
    top: -15%;
    left: -5%;
    &.hide {
      opacity: 0;
    }
  }
  .story {
    width: calc(100% / 4);
    height: 45%;
    position: relative;
    .bg {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
    .clock {
      @include position(absolute, $top: -15%, $right: 0);
      width: 30%;
    }
    .point, .point.green {
      @include position (absolute, $top: 50%, $left: 50%);
      transform: translate(-30%, -50%);
      @include containerStyle(30%, auto, $primary-default, none, 50%);
      aspect-ratio: 1;
      @include flex(center, center);
      @extend %h1;
      color: $text-default;
    }
    .point.orange {
      background: rgba(255, 122, 0, 0.7);
    }
    .point.red {
      background: rgba(255, 0, 0, 0.7);
    }
  }
}
</style>