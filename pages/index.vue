<template>
  <div class="main bg--white
  ">
    <mainSwiper />
  </div>
</template>

<script>
import axios from 'axios'
import mainSwiper from '~/components/home/mainSwiper.vue'
export default {
  layout: 'mainNavbar',
  components: {
    mainSwiper
  }
}
</script>
