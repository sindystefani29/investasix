<template>
  <div class="main bg--white pt-65">
    <topArrow 
      backLink = "/data-investor"
      :transparent = "false"
      textLink = "Foto KTP"
    />
    <webCam/>
  </div>
</template>

<script>
import axios from 'axios'
import webCam from '~/components/dataInvestor/webCam.vue'
import topArrow from '~/components/layout/topArrow.vue'
export default {
  scrollToTop: false,
  components: {
    webCam,
    topArrow
  }
}
</script>
