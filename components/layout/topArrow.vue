<template>
  <div>
    <!--Bottom Menu-->
    <v-toolbar
      fixed
      app
      class="top-menu" id="navbar"
      v-if="transparent"
    >
        <div class="main d-flex">
            <nuxt-link :to="{path: backLink}" exact>
                <v-icon>arrow_back</v-icon>
            </nuxt-link>
        </div>
    </v-toolbar>
    <v-toolbar
      fixed
      app
      class="top-arrow" id="navbar"
      v-else
    >
        <div class="main d-flex">
            <nuxt-link :to="{path: backLink}" exact>
                <v-icon class="text-white">arrow_back</v-icon>
            </nuxt-link>
        </div>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  props: {
    backLink: String,
    transparent: Boolean

  },
  data() {
    return {
        isWhite: true
    }
  },
  mounted () {
    window.addEventListener('scroll', this.onScroll)
  },
  destroyed (){
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll: function (){
      let el = document.getElementById("navbar")
      if(window.scrollY > 0){
        if(!el.classList.contains("top-menu--white")){
          el.classList.add("top-menu--white")
          this.isWhite = false
        }
      }else{
        el.classList.remove("top-menu--white")
        this.isWhite = true
      }
    }
  }

}
</script>
