<template>
  <div class="main bg--white">
    <topArrow 
      backLink = "/"
      :transparent = "true"
    />
    <kampanyeDetil 
      :param = "paramId"
    />
    <singleButton 
      buttonLink = "/investasi"
      textButton = "Investasi Sekarang"
    />
  </div>
</template>

<script>
import axios from 'axios'
import kampanyeDetil from '~/components/kampanye/detil.vue'
import topArrow from '~/components/layout/topArrow.vue'
import singleButton from '~/components/layout/singleButton.vue'
export default {
  components: {
    kampanyeDetil,
    topArrow,
    singleButton
  },
  async asyncData({ params }) {
    return {
       paramId: params.id
    } 
  }
}
</script>
