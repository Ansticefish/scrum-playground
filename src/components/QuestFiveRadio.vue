<template lang="pug">
div.radio
  form.content-wrapper(
  v-for="item in questions"
  :key="item.id"
  )
    div.question
    label(
      for="answer1"
    )
      Character.character(
        :color="item.character1"
      )
    input(
      type="radio"
      id="answer1"
      name="question1" 
      value="answer1"
      )
    label(
      for="answer2"
    )
      Character.character(
        :color="item.character2"
      )
    input(
      type="radio"
      id="answer2"
      name="question1"
      value="answer2" 
      )
  
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
          title: 'Q1.做得好的地方？',
          character1: 'purple-sm',
          answer1: '這次我幫了很多人救火耶～',
          character2: 'green-sm',
          answer2: '大家在開發上都會互相 cover ， 讓任務都有準在時間內完成 。',
          correctAnswer: 'answer2',
          picked: ''
        },
        {
          id: 2,
          title: 'Q2.有哪些可以做得更好？',
          character1: 'yellow-sm',
          answer1: '可以記錄這次的開發時間，讓預估團隊點數可以更精準。',
          character2: 'red-sm',
          answer2: '開發時間預估不準確，請後端下次改進，避免delay到我。',
          correctAnswer: 'answer1',
          picked: ''
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.radio {
  @include containerStyle(100%, 95%, transparent, none, 0);
  border: 1px solid red;
  .content-wrapper {
    @include containerStyle(45%, 100%, transparent, none, 0);
    @include flex (center, center);
  }
}
</style>