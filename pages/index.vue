<template>
  <div class="main bg--white">
    <mainSwiper />
    <progressInvestasi />
    <wordingInvestasix />
  </div>
</template>

<script>
import axios from 'axios'
import mainSwiper from '~/components/home/mainSwiper.vue'
import progressInvestasi from '~/components/home/progressInvestasi.vue'
import wordingInvestasix from '~/components/home/wordingInvestasix.vue'
export default {
  layout: 'mainNavbar',
  components: {
    mainSwiper,
    progressInvestasi,
    wordingInvestasix
  }
}
</script>
