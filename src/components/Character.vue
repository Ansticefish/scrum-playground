<template lang="pug">
div.characters
  //- big characters
  div(
    :class="['characters-normal',`characters__${color}`]"
    v-if="color === item.color"
    v-for="item in characters"
    :key="item.id"
  )
    img.hole(src="~@/assets/image/role-hole.png", alt="")
    img.light(:src="item.light")
    img.character(:src="item.character")
    //- small characters
  div(
    :class="['characters-sm', `characters-sm__${color}`]"
    v-if="color === item.color"
    v-for="item in smallCharacters"
    :key="item.id"
  )
    img.hole(src="~@/assets/image/role-hole-sm.png", alt="")
    img.light(:src="item.light")
    img.character(:src="item.character")
</template>

<script>
export default {
  name: 'Character',
  props: {
    color: {
      type: String,
      default: 'green'
    }
  },
  data () {
    return {
      characters: [
        {
          id: 1,
          color: 'green',
          light: require("@/assets/image/role_g_light.png"),
          character: require("@/assets/image/role_g.png")
        },
        {
          id: 2,
          color: 'yellow',
          light: require("@/assets/image/role_y_light.png"),
          character: require("@/assets/image/role_y.png")
        },
        {
          id: 3,
          color: 'red',
          light: require("@/assets/image/role_r_light.png"),
          character: require("@/assets/image/role_r.png")
        },
        {
          id: 4,
          color: 'purple',
          light: require("@/assets/image/role_p_light.png"),
          character: require("@/assets/image/role_p.png")
        }
      ],
      smallCharacters: [
        {
          id: 1,
          color: 'green-sm',
          light: require("@/assets/image/role_g_light-sm.png"),
          character: require("@/assets/image/role-g-sm.png")
        },
        {
          id: 2,
          color: 'yellow-sm',
          light: require("@/assets/image/role_y_light-sm.png"),
          character: require("@/assets/image/role-y-sm.png")
        },
        {
          id: 3,
          color: 'red-sm',
          light: require("@/assets/image/role_r_light-sm.png"),
          character: require("@/assets/image/role-r-sm.png")
        },
        {
          id: 4,
          color: 'purple-sm',
          light: require("@/assets/image/role_p_light-sm.png"),
          character: require("@/assets/image/role-p-sm.png")
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.characters {
  .characters-normal {
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
  .characters__purple {
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
  .characters-sm {
    width: 10vw;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    align-items: end;
    justify-items: center;
    .hole, .light, .character {
      grid-column: 1/3;
      grid-row: 1/2;
    }
    .hole {
      margin-bottom: -5%;
    }
  }
}
</style>