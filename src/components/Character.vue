<template lang="pug">
div.characters
  div.characters__green(v-if="color === 'green'")
    img.hole(src="~@/assets/image/role-hole.png", alt="")
    img.light(src="~@/assets/image/role_g_light.png", alt="")
    img.character(src="~@/assets/image/role_g.png", alt="")
  div.characters__yellow(v-if="color === 'yellow'")
    img.hole(src="~@/assets/image/role-hole.png", alt="")
    img.light(src="~@/assets/image/role_y_light.png", alt="")
    img.character(src="~@/assets/image/role_y.png", alt="")
  div.characters__red(v-if="color === 'red'")
    img.hole(src="~@/assets/image/role-hole.png", alt="")
    img.light(src="~@/assets/image/role_r_light.png", alt="")
    img.character(src="~@/assets/image/role_r.png", alt="")
  div.characters__purple(v-if="color === 'purple'")
    img.hole(src="~@/assets/image/role-hole.png", alt="")
    img.light(src="~@/assets/image/role_p_light.png", alt="")
    img.character(src="~@/assets/image/role_p.png", alt="")
    
</template>

<script>
export default {
  name: 'Character',
  props: {
    color: {
      type: String,
      default: 'green'
    }
  }
}
</script>

<style lang="scss" scoped>
.characters {
  &__green, &__yellow, &__red, &__purple {
    width: 22vw;
    height: 100%;
    text-align: center;
    .hole {
        height: 25%;
        object-fit: contain;
      }
      .light {
        height: 130%;
        position: relative;
        top: -25%;
        object-fit: contain;
      }
    
      .character {
        height: 100%;
        position: relative;
        top: -151%;
        object-fit: contain;
      }
  }
  &__purple {
    .hole {
      position: relative;
      top: 80%;
    }
    .light {
      top: -60%;
    }
    .character {
      top: -162%;
    }
  }
}
</style>