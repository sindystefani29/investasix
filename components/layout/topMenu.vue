<template>
  <div>
    <!--Bottom Menu-->
    <v-toolbar
      fixed
      app
      class="top-menu bg--trans" id="navbar"
    >
        <div class="main d-flex">
            <div class="top-menu--logo">
                <img src="~/static/logo/layer 2.png" v-if="isWhite" />
                <img src="~/static/logo/layer 2.1.png" v-else />
            </div>
            <div class="top-menu--caption">TKB 90 : <strong>98%</strong></div>
        </div>
    </v-toolbar>
  </div>
</template>

<script>
export default {
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
