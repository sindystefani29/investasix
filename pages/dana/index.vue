<template>
  <div class="main bg--white pb-50">
    <detailDana/>
  </div>
</template>

<script>
import axios from 'axios'
import detailDana from '~/components/dana/detail.vue'
export default {
  layout: 'bottomNavbar',
  components: {
    detailDana
  }
}
</script>