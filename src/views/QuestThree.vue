<template lang="pug">
div.quest3
  div.head 
    Dialogue.dialogue-top(v-if="step < 4" :speaker="'GG'" :showPointer="showRedPointer" :orange="true" @change-step="addStep")
      | 沒錯，如 EE 說的，我這邊已經把剛剛討論好的點數標上去囉～ 你來練習把任務排到短衝待辦清單吧 ！
    Dialogue.dialogue-top2(v-if="step > 3" :speaker="'GG'" :showPointer="showRedPointer" :orange="true" @change-step="addStep")
      strong 換你來試試看吧 ！ 
      br
      | 把 
      span 「 產品待辦清單 」 
      | 的項目拖進 
      span 「 開發Ａ組的短衝待辦清單 」 裡吧 ！
      br
      | 提示 ： 置入兩項以上的 Story ， 點數總和不能超過團隊負擔上限 20 點唷 ！
    div.characters
      div.character-wrapper-yellow(v-if="step < 4")
        img.hole(src="~@/assets/image/role-hole.png", alt="")
        img.light(src="~@/assets/image/role_y_light.png", alt="")
        img.character(src="~@/assets/image/role_y.png", alt="")
      div.character-wrapper-red
        img.hole(src="~@/assets/image/role-hole.png", alt="")
        img.light(src="~@/assets/image/role_r_light.png", alt="")
        img.character(src="~@/assets/image/role_r.png", alt="")
  div.body 
    Dialogue.dialogue-mid(:speaker="'EE'" :showPointer="showYellowPointer" :yellow="true" v-if="step === 2 || step === 3" @change-step="addStep")
      | By the way , 我們平常管理任務是使用
      img(src="~@/assets/image/logo-jira.png")                       
      | 這套軟體 ， 
      br
      | 你有時間記得先去註冊和熟悉唷 !
    button.btn-start(v-if="step === 3" @click="addStep") 練習去囉
      div 練習去囉
    button.btn-next(v-if="step > 3" @click="addStep" :disabled="!questionSolved" ) 開始sprint
      div 開始sprint
</template>

<script>
import Dialogue from '../components/Dialogue.vue';

export default {
  name: 'QuestThree',
  components: {
    Dialogue,
  },
  data () {
    return {
      step: 1,
      showRedPointer: true,
      showYellowPointer: true,
      questionSolved: false
    }
  },
  methods: {
    addStep () {
      if (this.step === 1) {
        this.showRedPointer = false
      } else {
        this.showYellowPointer = false
      }
      this.step += 1
    }
  },
  beforeCreate() {
    this.$store.commit('updateProgress', '50vw')
  }
}
</script>

<style lang="scss" scoped>
.quest3 {
  @include containerStyle(100vw, 100vh, url('~@/assets/image/bg.png'));
  padding: 2% 0;
  overflow: hidden;
  .head {
    @include flex (space-around, center);
    width: 100%;
    height: 30%;
    .dialogue-top {
      width: 50%;
    }
    .characters {
      display: flex;
      height: 100%;
      .character-wrapper-yellow,
      .character-wrapper-red {
        @extend %character;
        height: 130%;
        margin-right: -5%;
      }
    }
    
  }
  .body {
    height: 70%;
    position: relative;
    border: 1px solid transparent;
    .dialogue-mid {
      width: 50%;
      margin: 10% auto;
    }
    .btn-start, .btn-next {
      @include button (10vw, 60px, $button-linear, $primary-default, $text-default);
      @include position(absolute, $bottom: 2%, $right: 2%);
    }
  }
}
</style>