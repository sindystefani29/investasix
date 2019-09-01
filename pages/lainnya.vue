<template>
  <div class="main bg--white pb-50">
    <userProfile
      v-if="username"
      :username="username"
    />
    <loginSignup v-else />
    <menuLainnya />
  </div>
</template>

<script>
import axios from 'axios'
import menuLainnya from '~/components/lainnya/menuLainnya.vue'
import loginSignup from '~/components/lainnya/loginSignup.vue'
import userProfile from '~/components/lainnya/userProfile.vue'
export default {
  layout: 'bottomNavbar',
  components: {
    menuLainnya,
    loginSignup,
    userProfile
  },
  asyncData ({ store }) {
    return {
      username: store.state.username,
      status: store.state.status
    }
  }
}
</script>
