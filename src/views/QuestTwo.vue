<template lang="pug">
div.quest2 
  div.head 
    Character.character-lt(v-if="step < 3")
    Character.character-rt1(:color="'yellow'" v-if="step > 2")
    Character.character-rt2(:color="'red'" v-if="step > 2")
    Dialogue(
      v-if="step === 1"
      :speaker="'PO'" 
      :showPointer="true" 
      @change-step="changeStep"
      )
      | 產品待辦清單好了之後 ， 我們來召集 ScrumMaster 和開發團隊共同召開
      span 短衝規劃會議（Sprint Planning） 
      | 。 短衝即是一個迭代 ， 具有固定時間限制 ， 我們會在這個會議中 ， 決定要完成哪些工作事項來達到商業需求 ， 列出
      span 短衝待辦清單 （Sprint Backlog） 
      |， 並由開發團隊在接下來的產品開發週期裡執行 。
  div.body
    //- circleGlasses
    CircleGlass.main-content1(:color="'green'" v-if="step === 1")
      template(v-slot:bg)
        img(src="~@/assets/image/quest2-sprint.png") 
      template(v-slot:content)
        img(src="~@/assets/image/quest2-sprint.png")
    CircleGlass.main-content2(:color="'purple'" v-if="step === 2")
      template(v-slot:bg)
        img(src="~@/assets/image/quest2-team.png") 
      template(v-slot:content)
        img(src="~@/assets/image/quest2-team.png")
    CircleGlass.main-content3(:color="'purple'" v-if="step === 3")
      template(v-slot:bg)
        img(src="~@/assets/image/quest2-plan.png") 
      template(v-slot:content)
        img(src="~@/assets/image/quest2-plan.png")
    //- dialogues
    div.bottom-wrapper
      Dialogue(
        v-if="step === 2"
        :speaker="'MM'"
        :showPointer="true"
        :purple="true"
        @change-step="changeStep "
      )
        | 哦哦 ， 你是新來的前端吧 ！ 我是這次的 
        span ScrumMaster MM 
        |， 我的工作主要是促成開發團隊成員協作 、 引導團隊進行自省會議 ， 提升團隊成員對 Scrum 瞭解 。
      Dialogue(
        v-if="step === 3"
        :speaker="'MM'"
        :showPointer="true"
        :purple="true"
        @change-step="changeStep "
      )
       | 這兩位是 EE 和 GG ， 是我們開發團隊的成員唷～ 我們團隊
       span 一次 Sprint 週期是兩週
       | 的時間 ， 依照我的觀察 ， 目前團隊可以負擔的點數 (Story Point) 大約是 
       span 20 點
       | 左右。   
      Character.character-b(
        :color="'purple'"
        )
</template>

<script>
import Dialogue from '../components/Dialogue.vue';
import CircleGlass from '../components/CircleGlass.vue';
import Character from '../components/Character.vue';

export default {
  name: 'QuestTwo',
  components: {
    Dialogue,
    CircleGlass,
    Character
  },
  data () {
    return {
      step: 1
    }
  },
  methods: {
    changeStep () {
      this.step += 1
    }
  },
  beforeCreate() {
    this.$store.commit('updateProgress', '33.3vw')
  }
}
</script>

<style lang="scss" scoped>
.quest2 {
@include containerStyle(100vw, 100vh, url('~@/assets/image/bg.png'));
  .head {
    @include flex (space-around, center);
    width: 100%;
    height: 30%;
    padding: 1% 0.3%;
    .character-lt {
      height: 120%;
      margin-top: 5%;
      margin-right: auto;
    }
    .character-rt1 {
      height: 100%;
      margin-top: 5%;
      margin-left: auto;
      margin-right: -3%;
    }
    .character-rt2 {
      height: 100%;
      margin-top: 5%;
    }
  }
  .body {
    height: 70%;
    .main-content1 {
      height: 80%;
      margin: 0 auto;
    }
    .main-content2 {
      height: 80%;
      margin: 0 auto;
      margin-top: -15%;
      margin-bottom: 15%;
    }
    .main-content3 {
      @extend .main-content2;
      margin-left: 15%;
    }
    .bottom-wrapper {
      @include position (relative, $bottom: 40%);
      height: 50%;
      @include flex(space-around, center);
      padding: 0 3%;
      .character-b {
        height: 100%;
        margin-left: auto;
      }
    }
  }
}
</style>