<template lang="pug">
div.quest5
  div.head
    Dialogue(
      v-if="step === 1"
      :speaker="'GG'"
      :showPointer="true"
      :orange="true"
      @change-step="changeStep"
    )
      | 嗚啊啊新來的 ， 你真的很幸運 ， 今天剛好是開發 B 組的 Retro ， 你也來見識一下 ，  看看 Retro 都該做些什麼吧～～ 
    Dialogue(
      v-if="step === 2"
      :speaker="'GG'"
      :showPointer="false"
      :orange="true"
    )
      | 我們會在會議裡請團隊成員提出哪些是做得好的地方、哪些可以繼續改善的地方 ？ 並記錄在 Confluence中。 Retro 重點在於「正面表述」， 你也思考看看 ， 哪一些是適合 Retro 的回饋呢 ？
    Character.character(
      :color="'red'"
    )
  div.body
    QuestFiveRadio(@enable-button="(data) => this.allowClick = data")
    button.btn-next(
      v-if="step > 1" 
      @click="changeStep"
      :disabled="!allowClick"
      ) 我選好了
      div 我選好了
</template>

<script>
import Dialogue from '../components/Dialogue.vue';
import Character from '../components/Character.vue';
import QuestFiveRadio from '../components/QuestFiveRadio.vue';

export default {
  name: 'QuestFive',
  components: {
    Dialogue,
    Character,
    QuestFiveRadio
  },
  data () {
    return {
      step: 1,
      allowClick: false
    }
  },
  methods: {
    changeStep () {
      this.step++
    }
  },
  beforeCreate() {
    this.$store.commit('updateProgress', '83.3vw')
  }
}
</script>

<style lang="scss" scoped>
.quest5 {
  @include containerStyle(100vw, 100vh, url('~@/assets/image/bg.png'));
  padding: 2% 0;

  .head {
    @include flex (space-around, center);
    width: 100%;
    height: 30%;

    .character {
      @extend %character;
      height: 110%;
    }
  }

  .body {
    height: 72%;
    position: relative;
    .btn-next {
      @include button (10vw, 60px, $button-linear, $primary-default, $text-default);
      @include position (fixed, $bottom: 5%, $right: 2%);
    }
  }
}
</style>