<template>
  <div class="main bg--white pb-50">
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
  scrollToTop: false,
  components: {
    mainSwiper,
    progressInvestasi,
    wordingInvestasix
  }
}
</script>
