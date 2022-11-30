<template lang="pug">
div.quest4
  div.head
    //- dialogues top
    Dialogue(
      v-if="step === 1"
      :speaker="'EE'"
      :show-pointer="true"
      :yellow="true"
      @change-step="changeStep" 
      )
      | 等等等等等 ， 你都還不知道什麼是 Sprint 吧 ！
      br
      | 讓我先為你介紹一下～仔細聽好唷 ， 等等會考考你 ！
    Dialogue(
      v-if="step === 2"
      :speaker="'EE'"
      :show-pointer="true"
      :yellow="true"
      @change-step="changeStep" 
      )
      |  Sprint 是一個短衝 ， 開發團隊會在這期間執行開發 。 在這段期間內 ， 開發團隊舉辦
      span 每日站立會議 (Daily Scrum) 
      | ， 追蹤成員間的工作狀況 ， 在 Sprint 的結束也會包含
      span 短衝檢視會議 (Sprint Review)
      | 以及
      span 短衝自省會議 (Sprint Retrospective) 
      |。
    Dialogue(
      v-if="step === 3"
      :speaker="'EE'"
      :yellow="true"
      )
      | 優化工作流程、讓團隊有變得更好的機會。
      br
      | 推薦工具 ： 
      img(src="~@/assets/image/logo_confluence.png")
    Character.character(
      :color="'yellow'"
      )
  div.body
    SprintLesson(v-if="step === 2 || step === 3")
    button.btn-next(
      v-if="step === 3" 
      @click="changeStep"
      ) 練習去囉
      div 練習去囉
</template>

<script>
import Dialogue from '../components/Dialogue.vue';
import Character from '../components/Character.vue';
import SprintLesson from '../components/SprintLesson.vue';

export default {
  name: 'QuestFour',
  components: {
    Dialogue,
    Character,
    SprintLesson,
  },
  data () {
    return {
      step: 1,
    }
  },
  methods: {
    changeStep () {
      this.step ++
    }
  },
  beforeCreate() {
    this.$store.commit('updateProgress', '66.6vw')
  }
}
</script>

<style lang="scss" scoped>
.quest4 {
  @include containerStyle(100vw, 100vh, url('~@/assets/image/bg.png'));
  padding: 2% 0;

  .head {
    @include flex (space-around, center);
    width: 100%;
    height: 30%;

    .character {
      @extend %character;
      height: 130%;
      margin-top: 5%;
    }
  }

  .body {
    height: 70%;
    position: relative;
    .btn-next {
      @include button (10vw, 60px, $button-linear, $primary-default, $text-default);
      @include position (absolute, $bottom: 8%, $right: 2%);
    }
  }
}
</style>