<template>
  <div>
    <!--Bottom Menu-->
    <v-toolbar
      fixed
      app
      class="top-menu bg--trans" id="navbar"
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
      class="top-menu top-menu--white"
      v-else
    >
        <div class="main d-flex">
            <nuxt-link :to="{path: backLink}" exact class="d-flex">
                <v-icon class="text-white mr-2">arrow_back</v-icon>
                <span>{{textLink}}</span>
            </nuxt-link>
        </div>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  props: {
    backLink: String,
    transparent: Boolean,
    textLink: String

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
      if(this.transparent){
        if(window.scrollY > 0){
          el.classList.add("top-menu--white")
          this.isWhite = false
        }else{
          el.classList.remove("top-menu--white")
          this.isWhite = true
        }
      }
    }
  }

}
</script>
