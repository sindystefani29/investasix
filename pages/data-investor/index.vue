<template>
  <div class="main bg--white pt-65">
    <topArrow 
      backLink = "/lainnya"
      :transparent = "false"
      textLink = "Kelengkapan Data Investor"
    />
    <dataDiri/>
  </div>
</template>

<script>
import axios from 'axios'
import dataDiri from '~/components/dataInvestor/dataDiri.vue'
import topArrow from '~/components/layout/topArrow.vue'
export default {
  scrollToTop: false,
  components: {
    dataDiri,
    topArrow
  }
}
</script>
