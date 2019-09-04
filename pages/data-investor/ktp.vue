<template>
  <div class="main bg--white pt-65">
    <topArrow 
      backLink = "/data-investor"
      :transparent = "false"
      textLink = "KTP"
    />
    <settingKtp/>
  </div>
</template>

<script>
import axios from 'axios'
import settingKtp from '~/components/dataInvestor/settingKtp.vue'
import topArrow from '~/components/layout/topArrow.vue'
export default {
  scrollToTop: false,
  components: {
    settingKtp,
    topArrow
  }
}
</script>
