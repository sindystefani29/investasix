<template>
  <div>
    <!--Bottom Menu-->
    <v-toolbar
      fixed
      app
      class="bg--white bottom-menu"
    >
        <div class="main d-flex">
            <v-btn color="#A71E22" class="d-flex flex-1 bottom-menu--button">
                <nuxt-link :to="buttonLink">
                    {{textButton}}
                </nuxt-link>
            </v-btn>
        </div>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  props: {
    buttonLink: String,
    textButton: String
  }
}
</script>
