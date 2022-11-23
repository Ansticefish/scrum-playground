<template lang="pug">
div.opening
  div.bg
    img.bg__top(src="~@/assets/image/opening-bg-top.png", alt="")
    img.bg__bottom(src="~@/assets/image/opening-bg-bottom.png", alt="")
    img.bg__left(src="~@/assets/image/opening-bg-left.png", alt="")
    img.bg__right(src="~@/assets/image/opening-bg-right.png", alt="")
    //- disappear after btn clicked
    img.bg__lt(src="~@/assets/image/opening-bg-lt.png", alt="" v-show="!enterVillage")
    img.bg__lb(src="~@/assets/image/opening-bg-lb.png", alt="" v-show="!enterVillage")
    img.bg__tm(src="~@/assets/image/opening-bg-tm.png", alt="" v-show="!enterVillage")
    img.bg__rb(src="~@/assets/image/opening-bg-rb.png", alt="" v-show="!enterVillage")
  div.title-wrapper(v-if="!enterVillage")
    img.logo(src="~@/assets/image/opening-logo.png", alt="")
    div.instruction
      h2 深入敏捷の村一探究竟
      button.enter-btn(@click="()=> this.enterVillage = true") 
        div 進入村莊
  div.opening-wrapper(v-else)
    div.opening
      div.name （謎之音）
      div.content 
        | 呦呼 ， 歡迎進入 
        span 「SCRUM 新手村」 
        | ， 在正式加入專案開發之前 ，需要請你先了解 Scrum 的流程與精神 ！
        br 
        br
        | 請接受挑戰任務 ， 成功通過 Scrum 新手村的挑戰任務吧～
    button.next-btn 
      div 接受挑戰
</template>

<script>
export default {
  name: 'Opening',
  data () {
    return {
      enterVillage: false
    }
  }
}
</script>

<style lang="scss" scoped>
.opening {
  @include containerStyle(100vw, 100vh, $bg-dark); 
  @include flex (center, center);
  .bg {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 0;
    overflow: hidden;
    &__top {
      @include position (absolute, $top: 0, $right: 50%);
      transform: translate(50%, 0);
    }
    &__bottom {
      @include position (absolute, $bottom: 0, $left: 15%);
    }
    &__left {
      @include position (absolute, $top: 0, $left: 0);
    }
    &__right {
      @include position (absolute, $top: 0, $right: 0);
    }
    &__lt {
      @include position (absolute, $top: 0, $left: 0);
    }
    &__lb {
      @include position (absolute, $bottom: 0, $left: 0);
    }
    &__tm {
      @include position (absolute, $top: 0, $right: 15.2%);
    }
    &__rb {
      @include position (absolute, $bottom: 0, $right: 0);
    }
  }
  .title-wrapper {
    position: relative;
    z-index: 1;
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
    text-align: center;
    .opening {
      @include opening (50vw, 40vh,$primary-default);
      text-align: start;
    }
    .next-btn {
      @include button (13vw, 60px, $button-linear, $primary-default, $text-default);
      margin-top: 6%;
    }
  }
}
</style>