<template lang="pug">
div.radio
  form.content-wrapper(
  v-for="item in questions"
  :key="item.id"
  )
    div.question {{ item.title }}
    label.choice-wrapper(:for="item.L.id")
      Character.character(
        :color="item.L.character"
      )
      input(
        type="radio"
        :class="{'wrong': item.L.isFalse}"
        :id="item.L.id"
        :name="item.name" 
        value="answer1"
        v-model="item.picked"
        @change="selectAnswer($event, item)"
        )
      div.description {{ item.L.answer}}
    label.choice-wrapper(:for="item.R.id")
      Character.character(
        :color="item.R.character"
      )
      input(
        type="radio"
        :class="{'wrong': item.R.isFalse}"
        :id="item.R.id"
        :name="item.name"
        value="answer2" 
        v-model="item.picked"
        @change="selectAnswer($event, item)"
        )
      div.description {{ item.R.answer}}
</template>

<script>
import Character from './Character.vue';

export default {
  name: 'QuestFiveRadio',
  components: {
    Character
  },  
  data () {
    return {
      questions: [
        {
          id: 1,
          name: 'question1',
          title: 'Q1.做得好的地方？',
          L: {
            id: 'L1-1',
            character: 'purple-sm',
            answer: '這次我幫了很多人救火耶～',
            isFalse: false
          },
          R: {
            id: 'R1-2',
            character: 'green-sm',
            answer: '大家在開發上都會互相 cover ， 讓任務都有準在時間內完成。',
            isFalse: false
          },
          correctAnswer: 'answer2',
          picked: ''
        },
        {
          id: 2,
          name: 'question2',
          title: 'Q2.有哪些可以做得更好？',
          L: {
            id: 'L2-1',
            character: 'yellow-sm',
            answer: '可以記錄這次的開發時間，讓預估團隊點數可以更精準。',
            isFalse: false
          },
          R: {
            id: 'R2-2',
            character: 'red-sm',
            answer: '開發時間預估不準確，請後端下次改進，避免delay到我。',
            isFalse: false
          },
          correctAnswer: 'answer1',
          picked: ''
        }
      ]
    }
  },
  methods: {
    selectAnswer($event, item) {
      const value = $event.target.value
      const target = $event.target.id.slice(0, 1)
      item.L.isFalse = false
      item.R.isFalse = false
      if (item.picked === value && value !== item.correctAnswer) {
        item[`${target}`]['isFalse'] = true
      } 
    },
    enableButton () {
      if (this.questions[0].correctAnswer === this.questions[0].picked && this.questions[1].correctAnswer === this.questions[1].picked) {
        this.$emit('enable-button', true)
      } else {
        this.$emit('enable-button', false)
      }
    }
  },
  watch: {
    'questions': {
      handler: 'enableButton',
      deep: true
    }
  }
}
</script>

<style lang="scss" scoped>
.radio {
  @include containerStyle(100%, 80%, transparent, none, 0);
  @include flex (space-around, center);
  .content-wrapper {
    @include containerStyle(45%, 100%, transparent, none, 0);
    @include flex(space-between, flex-start);
    position: relative;
    .question {
      @include containerStyle(fit-content, fit-content, $primary-default, none, 0);
      @include position(absolute, $top: 0, $right: 50%);
      transform: translateX(50%);
      padding: 1% 3%;
      @extend %h2;
      color: $bg-dark;
      white-space: nowrap;
    }
    .choice-wrapper {
      width: 50%;
      height: 90%;
      margin-top: 10%;
      cursor: pointer;
      @include flex(space-around, center, column);
      input {
        @include containerStyle(1.5vw, 1.5vw, $bg-dark60, 3px solid $primary-default, 50%);     
        &:checked {
          background: $primary-default;
          border: 3px solid $primary-default;
          display: grid;
          place-content: center;
          &::before {
            content: '';
            @include containerStyle(1.3vw, 1.3vw, $primary-default, 3px solid $bg-dark60, 50%);
          }
        }
        &.wrong {
          border-color: $danger;
          &:checked {
            &::before {
              background: $danger;
            }
          }
        }
      }
      .description {
        @include containerStyle(75%, 35%, $bg-dark60, 4px solid $primary-default, 20px);
        backdrop-filter: blur(5px);
        padding: 3% 5%;
        @extend %body;
        color: $text-default;
        text-align: center;
      }
    }
  }
}
</style>