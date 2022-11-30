<template lang="pug">
div.lessons-container
  div.lesson(v-for="item in list" :key="item.id")
    img(:src="item.img")
    div.title-wrapper
      h2 {{ item.title}}
      p {{ item.subtitle}}
    ul.lesson 
      p {{ item.contentStart}}
      li(v-if="item.contentList[0]") {{item.contentList[0]}}
      li(v-if="item.contentList[1]") {{item.contentList[1]}}
      li(v-if="item.contentList[2]") {{item.contentList[2]}}
      p(v-if="item.contentEnd") {{ item.contentEnd}}
</template>

<script>
export default {
  name: 'SprintLesson',
  data () {
    return {
      list: [
        {
          id: 1,
          img: require('@/assets/image/quest4-daily.png'),
          title: '每日站立會議',
          subtitle: 'Daily Scrum',
          contentStart: '每天都要進行的會議 ， 以15分鐘為限制',
          contentList: [
            '昨天為團隊的短衝目標 (Sprint Goal)做了那些進度',
            '今天我會如何準備來幫助團隊達到短衝目標',
            '過程中有遇到什麼問題、難題'
          ],
          contentEnd: '透過團隊分享 ， 追蹤大家的工作狀況。'
        },
        {
          id: 2,
          img: require('@/assets/image/quest4-review.png'),
          title: '短衝檢視會議',
          subtitle: 'Sprint Review',
          contentStart: '用來檢視該次短衝增量的成果 ， 以蒐集相關的回饋數據或意見。',
          contentList: [],
          contentEnd: ''
        },
        {
          id: 3,
          img: require('@/assets/image/quest4-retro.png'),
          title: '短衝自省會議',
          subtitle: 'Sprint Retrospective',
          contentStart: '團隊在自省會議裡,會共同回顧該短衝歷程發生的事情',
          contentList: [
            '好的地方',
            '可以改進的地方',
            '如何維持我們已有的成功經驗'
          ],
          contentEnd: ''
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.lessons-container {
  width: 95%;
  height: 90%;
  margin: 2% auto;
  padding: 2%;
  @include flex (space-between, flex-start);
  .lesson {
    width: calc(100% /3 - 2%);
    text-align: center;
    img {
      width: 100%;
    }
    .title-wrapper {
      @include containerStyle(100%, 30%, $bg-dark60, 4px solid $role-team1, 20px);
      margin: 5% auto;
      padding: 8px 16px;
      backdrop-filter: blur(5px);
      h2 {
        @extend %h2;
        color: $role-team1;
      }
      p {
        @extend %listCaption;
        color: $text-tint;
      }
    }
    .lesson {
      width: 100%;
      all: revert;
      text-align: left;
      list-style-position: inside;
      p, li {
        @extend %body;
        line-height: 36px;
        color: $text-default;
      }    
    }
  }
}
</style>