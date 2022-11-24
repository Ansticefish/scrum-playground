<template lang="pug">
div.quest1
  div.head 
    div.character-wrapper
      img.hole(src="~@/assets/image/role-hole.png", alt="")
      img.light(src="~@/assets/image/role_g_light.png", alt="")
      img.character(src="~@/assets/image/role_g.png", alt="")
    //- dialogues 
    Dialogue(:speaker="'PO'" :showPointer="false" v-if="step === 1" )
      span \ 碰 / 
      | 我是短衝小精靈 ， 開發 A 組的 PO 。
      br
      span PO 也就是產品負責人（Product Owner） ， 
      | 產品負責人會負責評估產品待辦清單的價值與重要性， 依序排列要執行的優先順序 ， 對齊產品目標 。 最後排出產品待辦清單（Product Backlog） 唷 ！
    Dialogue(:speaker="'PO'" :showPointer="false" v-if="step === 2" )
      | 剛好我最近手邊有一個 「 人才招募系統 」 的案子 ， 我才剛列出了 
      span 「 產品需求清單 」 
      |。
      br
      | 既然你都來了 ， 來試試看調整產品優先度 ， 排出產品待辦清單吧 ！
    Dialogue(:speaker="'PO'" :showPointer="true" v-if="step === 3" @change-step="addStep")
      | 在這階段我們要把需求放進產品待辦清單 ， 並調整其優先順序 。
      br
      | 對了 ！ 我們公司也推薦使用
      img(src="~@/assets/image/logo-jira.png")                       
      | 來做任務的管理呢 ！
    Dialogue(:speaker="'PO'" :showPointer="false" v-if="step === 4")
      strong 換你來試試看吧 ！
      br
      | 提示 ： 請把需求拖移至產品待辦清單 ， 並調整其優先順序。
  div.body
    div.btn-next(@click="()=> this.step = 2" v-if="step === 1")
      button 點擊畫面任意處繼續
    button.btn-start(v-if="step === 2" @click="()=> this.step = 3") 準備好了
      div 準備好了
    //- todo list
    TodoList
</template>

<script>
import Dialogue from '../components/Dialogue.vue'
import TodoList from '../components/TodoList.vue'

export default {
  name: 'QuestOne',
  components: {
    Dialogue,
    TodoList,
  },
  data () {
    return {
      step: 3
    }
  },
  methods: {
    addStep () {
      this.step += 1
    }
  },  
  beforeCreate() {
    this.$store.commit('updateProgress', '16.6vw')
  }
}
</script>

<style lang="scss" scoped>
.quest1 {
  @include containerStyle(100vw, 100vh, url('~@/assets/image/bg.png'));
  padding: 2% 0;
  .head {
    @include flex (space-around, center);
    width: 100%;
    height: 30%;
    .character-wrapper {
      @extend %character;
      height: 130%;
      margin-top: 5%;
    }
  }
  .body {
    height: 70%;
    position: relative;
    .btn-next {
      @extend %button-next;
    }
    .btn-start {
      @include button (10vw, 60px, $button-linear, $primary-default, $text-default);
      @include position (absolute, $bottom: 2%, $right: 2%);
    }
  }
  
}
</style>