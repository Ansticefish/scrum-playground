<template lang="pug">
div.quest1
  div.head 
    Character.character
    //- dialogues 
    Dialogue(:speaker="'PO'" :showPointer="false" :content="dialogue[0]" v-if="step === 1") 
    Dialogue(:speaker="'PO'" :showPointer="false"  :content="dialogue[1]" v-if="step === 2" )
    Dialogue(:speaker="'PO'" :showPointer="true" :content="dialogue[2]" v-if="step === 3" @change-step="addStep")
    Dialogue(:speaker="'PO'" :showPointer="false" :content="dialogue[3]" v-if="step === 4")
    Dialogue(:speaker="'PO'" :showPointer="true" :content="dialogue[4]" @change-step="() => this.step += 1" v-if="step > 4")
  div.body
    //- buttons
    div.btn-next(@click="()=> this.step = 2" v-if="step === 1")
      button 點擊畫面任意處繼續
    button.btn-start(v-if="step === 2" 
    @click="()=> this.step = 3") 準備好了
      div 準備好了
    button.btn-finish(v-if="step > 3 && step < 5" :disabled="blockFilled !== 4" 
    @click="()=> this.step = 5") 我完成了
      div 我完成了
    div.btn-leave(v-if="step === 6"  @click="()=> this.$router.push('/quest2')")
      button 點擊畫面任意處繼續
    //- list
    div.drag-area(v-if="step > 2")
      div.drag-area__left(@dragenter.prevent @dragover.prevent @drop="resetList($event)")
        //- div.item.top(
        //-   v-show="!list[0].isDropped"
        //-   :class="[{'fade': step === 3}, {'dragged': list[0].isDragged}]"
        //-   draggable="true"
        //-   @dragstart="startDrag($event, 0)"
        //-   @dragend="endDrag(0)"
        //- ) 
        //-   | 應徵者的線上履歷編輯器  
        //- div.item.bottom(
        //-   v-show="!list[1].isDropped"
        //-   :class="[{'fade': step === 3},{'dragged': list[1].isDragged}]"
        //-   draggable="true"
        //-   @dragstart="startDrag($event, 1)"
        //-   @dragend="endDrag(1)"
        //-   )
        //-   | 後台職缺管理功能（資訊上架、
        //-   br
        //-   | 下架、顯示應徵者資料）
        DraggedItem(:item="list[0]" :step="step" @startDrag="startDrag" @endDrag="endDrag") 
        DraggedItem(:item="list[1]" :top="false" :step="step" @startDrag="startDrag" @endDrag="endDrag")  
      QuestOneList.list(
        @hide-item="hideItem" 
        @show-item="showItem" 
        :deletedId="deletedId")
      div.drag-area__right(@dragenter.prevent @dragover.prevent @drop="resetList($event)")
        //- div.item.top(
        //-   v-show="!list[2].isDropped"
        //-   :class="[{'fade': step === 3},{'dragged': list[2].isDragged}]"
        //-   draggable="true"
        //-   @dragstart="startDrag($event, 2)"
        //-   @dragend="endDrag(2)"
        //-   ) 
        //-   | 會員系統（登入、註冊、權限管理）
        //- div.item.bottom(
        //-   v-show="!list[3].isDropped"
        //-   :class="[{'fade': step === 3},{'dragged': list[3].isDragged}]"
        //-   draggable="true"
        //-   @dragstart="startDrag($event, 3)"
        //-   @dragend="endDrag(3)"
        //-   ) 
        //-   | 前台職缺列表、應徵
        DraggedItem(:item="list[2]" :step="step" @startDrag="startDrag" @endDrag="endDrag") 
        DraggedItem(:item="list[3]" :top="false" :step="step" @startDrag="startDrag" @endDrag="endDrag") 
        svg( id="path" width="148" height="176" viewBox="0 0 148 176" fill="none" xmlns="http://www.w3.org/2000/svg" v-if="step === 3")
          path(d="M4.19366 0.0094212C3.09428 -0.0975291 2.11635 0.706986 2.00939 1.80637L0.26642 19.7218C0.159463 20.8212 0.963979 21.7991 2.06336 21.906C3.16274 22.013 4.14067 21.2085 4.24762 20.1091L5.79693 4.1843L21.7217 5.73361C22.8211 5.84056 23.7991 5.03604 23.906 3.93667C24.013 2.83728 23.2084 1.85936 22.1091 1.7524L4.19366 0.0094212ZM147.044 172.729L5.5445 0.7294L2.45549 3.27065L143.955 175.27L147.044 172.729Z" fill="white")
        div.demo-block(v-if="step === 3") 前台職缺列表、應徵
          img(src="~@/assets/image/quest1-hand.png")
</template>

<script>
import Character from '../components/Character.vue'
import Dialogue from '../components/Dialogue.vue'
import QuestOneList from '../components/QuestOneList.vue'
import DraggedItem from '../components/DraggedItem.vue'

export default {
  name: 'QuestOne',
  components: {
    Character,
    Dialogue,
    QuestOneList,
    DraggedItem
  },
  data () {
    return {
      dialogue: [
        `<span class="test"> \\ 碰 / </span> 我是短衝小精靈 ， 開發 A 組的 PO 。
          <br>
          <span> PO 也就是產品負責人（Product Owner） </span>，產品負責人會負責評估產品待辦清單的價值與重要性， 依序排列要執行的優先順序 ， 對齊產品目標。最後排出產品待辦清單（Product Backlog）唷！`,
        `剛好我最近手邊有一個 「 人才招募系統 」 的案子 ， 我才剛列出了<span>「 產品需求清單 」</span>。<br>
        既然你都來了 ， 來試試看調整產品優先度 ， 排出產品待辦清單吧 ！`,
        `在這階段我們要把需求放進產品待辦清單 ， 並調整其優先順序 。
         <br>
         對了 ！ 我們公司也推薦使用
        <img src="https://i.imgur.com/CPvAmtZ.png" alt="Jira">                       
        來做任務的管理呢 ！`,
        `<strong> 換你來試試看吧 ！</strong>
        <br>   
        提示 ： 請把需求拖移至產品待辦清單 ， 並調整其優先順序。`,
        `哇喔完成惹 ， 尼太棒ㄌ！ 我們繼續吧 ！`
      ],
      step: 1,
      list: [
        {
          id: 1,
          content: '應徵者的線上履歷編輯器',
          isDragged: false,
          isDropped: false,
        },
        {
          id: 2,
          content: '後台職缺管理功能（ 資訊上架、下架、顯示應徵者資料 ）',
          isDragged: false,
          isDropped: false,
        },
        {
          id: 3,
          content: '會員系統（登入、註冊、權限管理）',
          isDragged: false,
          isDropped: false,
        },
        {
          id: 4,
          content: '前台職缺列表、應徵',
          isDragged: false,
          isDropped: false,
        }
      ],
      deletedId: {
        time: 0, 
        id: -1
      },
      blockFilled: 0,
    }
  },
  methods: {
    addStep () {
      this.step += 1
    },
    startDrag(data) {
      const [event, index] = data
      if(this.step === 3) return
      event.dataTransfer.clearData()
      event.dataTransfer.setData('application/json', JSON.stringify(this.list[index]))
      this.list[index].isDragged = true
    },
    endDrag(index) {
      this.list[index].isDragged = false
    },
    hideItem(id) {
      this.list[id - 1].isDropped = true
      this.blockFilled += 1
    },
    showItem(id) {
      this.list[id -1].isDropped = false
      this.blockFilled -= 1
    },
    resetList($event) {
      const {id, originalId} = JSON.parse($event.dataTransfer.getData('application/json'))
      if(originalId === undefined) return
      this.showItem(originalId)
      this.deletedId.time += 1
      this.deletedId.id = id
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
    .character {
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
    .btn-finish {
      @extend .btn-start;
      z-index: 1;
    }
    .btn-leave {
      @extend %button-leave;
    }
    .drag-area {
      height: 100%;
      width: 100%;
      display: flex;
      &__left, &__right {
        height: 100%;
        width: calc(100%/3);
        @include flex (center, center, column);
        padding: 3%;
        position: relative;
        .item {
          @include containerStyle(fit-content, fit-content, transparent, 4px solid $primary-default, 20px);
          padding: 2% 3%;
          @extend %body;
          color: $text-default; 
          transition: all .5s ease-out;
          cursor: grab;
          &.fade {
            opacity: 0.4;
          }
          &.dragged {
            opacity: 0.2;
          }
        }
        .top {
          align-self: flex-end;
          margin-bottom: 15%;
        }
        .bottom {
          align-self: flex-start;
        }
        #path {
          @include position (absolute, $top: 28%, $left: -10%);
        }
        .demo-block {
          @include containerStyle(78%, calc(72%/4), $bg-dark60, 4px solid $primary-default , 20px);
          @include position (absolute, $top: 17%, $left: -88%);
          @include flex (flex-start, center);
          padding: 3%;
          @extend %body;
          color: $text-default;
          animation: dragDemo 2.5s ease-in infinite;
          img {
            @include position (absolute, $bottom: -15%, $right: 20%);
          }
        }
      }
    }
  }
}

// animation keyword: offset-path
// change later
@keyframes dragDemo {
  0% {
    width: fit-content;
    height: fit-content;
    padding: 2% 3%;
    @include position (absolute, $top: 56%, $left: 9%); 
  }
  50% {
    width: fit-content;
    height: fit-content;
    padding: 2% 3%;
  }
  65% {
    @include containerStyle(78%, calc(72%/4), $bg-dark60, 4px solid $primary-default , 20px);
    @include position (absolute, $top: 17%, $left: -88%);
  }
  100% {
    @include containerStyle(78%, calc(72%/4), $bg-dark60, 4px solid $primary-default , 20px);
    @include position (absolute, $top: 17%, $left: -88%);
  }
}
</style>