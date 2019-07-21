<template>
  <div class="main bg--white pb-50">
    <topArrow 
      backLink = "/"
      :transparent = "true"
    />
    <kampanyeDetil 
      :param = "paramId"
    />
    <singleButton 
      :buttonLink = "linkMulaiInvestasi"
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
       paramId: params.id,
       linkMulaiInvestasi: `/mulai-investasi/${params.id}`
    } 
  }
}
</script>
