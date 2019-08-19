<template>
  <div class="main bg--white pb-50">
    <menuLainnya/>
  </div>
</template>

<script>
import axios from 'axios'
import menuLainnya from '~/components/lainnya/menuLainnya.vue'
export default {
  layout: 'bottomNavbar',
  components: {
    menuLainnya
  }
}
</script>
