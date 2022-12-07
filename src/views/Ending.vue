<template lang="pug">
div.ending
  div.caption-wrapper
    img.logo(src="@/assets/image/ending-logo.png")
    h2 恭喜你通過
    div 《 敏捷任務 - 最初の試煉 》
    p(@click="()=> this.$router.push('/')") 再玩一次
  div.characters-wrapper
    div.character-red
      p 窩的冰淇淋ㄋ？
      Character.character(:color="'red-sm'")
    div.character-yellow
      p 嗚嗚我會想尼QQ 
      Character(:color="'yellow-sm'")
    div.character-purple
      p 不愧似窩ㄉ學生
      Character(:color="'purple-sm'")
    div.character-green
      p 哇喔太厲害ㄌㄅ
      Character(:color="'green-sm'")
      //- lights
  img.g-light-left(src="@/assets/image/ending-light-g.png", alt="")
  img.p-light-left(src="@/assets/image/ending-light-p.png", alt="")
  img.r-light-left(src="@/assets/image/ending-light-r.png", alt="")
  img.y-light-left(src="@/assets/image/ending-light-y.png", alt="")
  img.y-light-right(src="@/assets/image/ending-light-y.png", alt="")
  img.r-light-right(src="@/assets/image/ending-light-r.png", alt="")
  img.g-light-right(src="@/assets/image/ending-light-g.png", alt="")
  img.p-light-right(src="@/assets/image/ending-light-p.png", alt="")
</template>

<script>
import Character from '../components/Character.vue';

export default {
  name: 'Ending',
  components: {
    Character
  },
  beforeCreate() {
    this.$store.commit('updateProgress', '100vw')
  }
}
</script>

<style lang="scss" scoped>
.ending {
  @include containerStyle(100vw, 100vh, url('~@/assets/image/bg.png'), 1px solid transparent);
  .caption-wrapper {
    width: fit-content;
    height: 65%;
    margin: 0 auto;
    text-align: center;
    .logo {
      height: 60%;
      margin-bottom: -5%;
    }
    h2 {
      @extend %h2;
      color: $text-default;
    }
    div {
      @include containerStyle (
        30vw, 15%, 
        (linear-gradient(180deg, rgba(0, 255, 224, 0) 0%, rgba(0, 255, 224, 0.03) 59.9%, rgba(0, 255, 224, 0.12) 78.12%, rgba(0, 255, 224, 0.36) 100%),rgba(10, 13, 20, 0.6)), 2px solid $primary-default, 40px);
      margin: 3% auto;
      @include flex(center, center);
      @extend %h2;
      color: $primary-default;
    }
    p {
      @extend %listCaption;
      color: $primary-default;
      cursor: pointer;
      transition: opacity .3s ease-in-out;
      &:hover {
        opacity: 0.5;
      }
    }
  }
  .characters-wrapper {
    @include containerStyle(50%, 30%, transparent, none, 0);
    @include flex(center, center);
    margin: 0 auto;
    .character-red, .character-yellow, .character-purple, .character-green {
      text-align: center;
    }
    .character-red {
      p {
        position: relative;
        top: -1.5    em;
        color: $role-team2;
      }
      .character {
        transform: scaleX(-1);
      }
    }
    .character-yellow {
      margin-right: auto;
      p {
        position: relative;
        top: 1em;
        color: $role-team1;
      }
    }
    .character-purple {
      p {
        color: $role-sm-tint;
      }
    }
    .character-green {
      p {
        position: relative;
        top: 1em;
        color: $primary-default;
      }
    }
  }
}

.g-light-left {
  @include position (absolute, $top: 2%, $left: 30%);
  animation: lightsShine 2s ease-in-out alternate infinite;
}
.p-light-left {
  @include position (absolute, $top: 15%, $left: 15%);
  animation: lightsShine 2s ease-in-out 1s alternate infinite;
}
.r-light-left {
  @include position (absolute, $top: 35%, $left: 25%);
  animation: lightsShine 2.5s ease-in-out alternate infinite;
}
.y-light-left {
  @include position (absolute, $top: 55%, $left: 17%);
  animation: lightsShine 1s ease-in-out alternate infinite;
}

.y-light-right {
  @include position (absolute, $top: -1%, $right: 25%);
  animation: lightsShine 1s ease-in-out .5s alternate infinite;
}

.r-light-right {
  @include position (absolute, $top: 20%, $right: 15%);
  animation: lightsShine 2s ease-in-out 2.5s alternate infinite;
}

.g-light-right {
  @include position (absolute, $top: 35%, $right: 25%);
  animation: lightsShine 2.5s ease-in-out .5s alternate infinite;
}

.p-light-right {
  @include position (absolute, $top: 56%, $right: 17%);
  animation: lightsShine 1.5s ease-in-out alternate infinite;
}

@keyframes lightsShine {
  0% {
    opacity: 50%;
  }
  50% {
    opacity: 80%
  }
  100% {
    opacity: 100%;
  }
}
</style>