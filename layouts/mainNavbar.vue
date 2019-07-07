<template>
  <v-app>
      <v-content>
        <nuxt />
      </v-content>
      <bottomMenu />
  </v-app>
</template>

<script>
import bottomMenu from '~/components/layout/bottomMenu.vue'
export default {
  components: {
    bottomMenu
  }
}
</script>
