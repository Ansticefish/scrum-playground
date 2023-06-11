<template lang="pug">
div.opening
  div.bg
    img.bg-top(src="~@/assets/image/opening-bg-top.png", alt="")
    img.bg-bottom(src="~@/assets/image/opening-bg-bottom.png", alt="")
    img.bg-left(src="~@/assets/image/opening-bg-left.png", alt="")
    img.bg-right(src="~@/assets/image/opening-bg-right.png", alt="")
    //- disappear after btn clicked
    img.bg-lt(src="~@/assets/image/opening-bg-lt.png", alt="" :class="{'bg-gone': enterVillage}")
    img.bg-lb(src="~@/assets/image/opening-bg-lb.png", alt="" :class="{'bg-gone': enterVillage}")
    img.bg-tm(src="~@/assets/image/opening-bg-tm.png", alt="" :class="{'bg-gone': enterVillage}")
    img.bg-rb(src="~@/assets/image/opening-bg-rb.png", alt="" :class="{'bg-gone': enterVillage}")
  div.title-wrapper(:class="{'disappear': enterVillage}")
    img.logo(src="~@/assets/image/opening-logo.png", alt="logo")
    div.instruction
      h2 深入敏捷の村一探究竟
      button.enter-btn(@click="()=> this.enterVillage = true") 進入村莊
        div 進入村莊
  div.opening-wrapper(:class="{'appear': enterVillage}")
    div.opening
      div.name （謎之音）
      div.content 
        | 呦呼 ， 歡迎進入 
        span 「SCRUM 新手村」 
        | ， 在正式加入專案開發之前 ，需要請你先了解 Scrum 的流程與精神 ！
        br 
        br
        | 請接受挑戰任務 ， 成功通過 Scrum 新手村的挑戰任務吧～
    button.next-btn(@click="()=> this.$router.push('/quest1')") 接受挑戰
      div 接受挑戰
</template>

<script>
export default {
  name: 'Opening',
  data () {
    return {
      enterVillage: false
    }
  },
  beforeCreate () {
    this.$store.commit('updateProgress', '0.5vw')
  }
}
</script>

<style lang="scss" scoped>
%transition {
   transition: opacity .6s ease-out;
}

.opening {
  @include containerStyle(100vw, 100vh, $bg-dark); 
  @include flex (center, center);
  .bg {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 0;
    overflow: hidden;
    & img {
      transition: transform 1s ease-out;
    }
    &-top {
      @include position (absolute, $top: 0, $right: 50%);
      transform: translate(50%, 0);
    }
    &-bottom {
      @include position (absolute, $bottom: 0, $left: 15%);
    }
    &-left {
      @include position (absolute, $top: 0, $left: 0);
    }
    &-right {
      @include position (absolute, $top: 0, $right: 0);
    }
    &-lt {
      @include position (absolute, $top: 0, $left: 0);
      &.bg-gone {
      transform: translate(-100%, -100%);
      }
    }
    &-lb {
      @include position (absolute, $bottom: 0, $left: 0);
      &.bg-gone {
      transform: translate(-100%, 100%);
      }
    }
    &-tm {
      @include position (absolute, $top: 0, $right: 15.2%);
      &.bg-gone {
      transform: translate(100%, -100%);
      }
    }
    &-rb {
      @include position (absolute, $bottom: 0, $right: 0);
      &.bg-gone {
      transform: translate(100%, 100%);
      }
    }
  }
  .title-wrapper {
    position: relative;
    z-index: 1;
    @extend %transition;
    &.disappear {
      opacity: 0;
      position: absolute;
    }
    .logo {
      max-height: 95vh;
    }
    .instruction {
      @include position (absolute, $top: 70%, $right: 50%);
      transform: translate(50%, 0);
      text-align: center;
      h2 {
        @extend %h2;
        color: $text-default;
      }
      .enter-btn {
        @include button (13vw, 60px, $button-linear, $primary-default, $text-default);
        margin-top: 5%;
      }
    }
  }

  .opening-wrapper {
    position: absolute;
    text-align: center;
    opacity: 0;
    @extend %transition;
    &.appear {
      position: relative;
      opacity: 1;
    }
    .opening {
      @include containerStyle(fit-content, fit-content, $bg-dark60, 2px solid $primary-default, 80px);
      min-width: 50vw;
      max-height: 50vh;
      box-shadow: 0px 0px 24px 8px rgba(0, 255, 224, 0.8), 0px 0px 8px 8px rgba(0, 255, 224, 0.95);
      backdrop-filter: blur(5px);
      position: relative;
      padding: 15% 12%;
      text-align: start;
      .name {
        @include containerStyle(fit-content, fit-content, $primary-default);
        padding: .5px 24px;
        @extend %h3;
        color: $bg-dark;
        @include position (absolute, $top: 15%, $left: -1.5%); 
        &::before {
          content: '';
          @include containerStyle(9.89px, 52px, $primary-default);
          @include position (absolute, $top: 0, $left: -1.1%);
          box-shadow: 0px 0px 24px 2px rgba(0, 255, 224, 0.8), 0px 0px 8px 0px rgba(0, 255, 224, 0.95);
        }
      }
      .content {
        @extend %h3;
        color: $text-default;
        span {
          color: $text-tint;
        }
      }
    }
    .next-btn {
      @include button (13vw, 60px, $button-linear, $primary-default, $text-default);
      margin-top: 6%;
      z-index: 100;
    }
  }
}
</style>