<template>
  <v-app>
      <topMenu />
      <v-content>
        <nuxt />
      </v-content>
      <bottomMenu />
  </v-app>
</template>

<script>
import bottomMenu from '~/components/layout/bottomMenu.vue'
import topMenu from '~/components/layout/topMenu.vue'
export default {
  components: {
    bottomMenu,
    topMenu
  }
}
</script>
