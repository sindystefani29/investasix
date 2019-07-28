<template>
  <div class="main bg--white">
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
  },
  async asyncData({ params }) {
    return {
       paramId: params.id
    } 
  }
}
</script>
