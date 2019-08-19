<template>
  <div class="main bg--white pb-50">
    <portfolio/>
  </div>
</template>

<script>
import axios from 'axios'
import portfolio from '~/components/portfolio/portfolio.vue'
export default {
  layout: 'bottomNavbar',
  components: {
    portfolio
  }
}
</script>
