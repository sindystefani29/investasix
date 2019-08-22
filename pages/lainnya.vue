<template>
  <div class="main bg--white pb-50">
    <loginSignup />
    <menuLainnya/>
  </div>
</template>

<script>
import axios from 'axios'
import menuLainnya from '~/components/lainnya/menuLainnya.vue'
import loginSignup from '~/components/lainnya/loginSignup.vue'
export default {
  layout: 'bottomNavbar',
  components: {
    menuLainnya,
    loginSignup
  }
}
</script>
