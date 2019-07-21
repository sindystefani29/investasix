<template>
  <div class="main bg--grey pb-180 pt-65">
    <topArrow 
      :backLink = "linkKampanyeDetil"
      :transparent = "false"
      textLink = "Mulai Investasi"
    />
    <mulaiInvestasi
      :param = "paramId"
    />
  </div>
</template>

<script>
import axios from 'axios'
import mulaiInvestasi from '~/components/investasi/mulaiInvestasi.vue'
import topArrow from '~/components/layout/topArrow.vue'
export default {
  components: {
    mulaiInvestasi,
    topArrow
  },
  async asyncData({ params }) {
    return {
       paramId: params.id,
       linkKampanyeDetil: `/kampanye/${params.id}`
    } 
  }
}
</script>
