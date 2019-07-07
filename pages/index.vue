<template>
  <div class="main bg--white
  ">
    <mainSwiper />
    <progressInvestasi />
  </div>
</template>

<script>
import axios from 'axios'
import mainSwiper from '~/components/home/mainSwiper.vue'
import progressInvestasi from '~/components/home/progressInvestasi.vue'
export default {
  layout: 'mainNavbar',
  components: {
    mainSwiper,
    progressInvestasi
  }
}
</script>
