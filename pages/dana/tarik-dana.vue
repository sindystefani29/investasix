<template>
  <div class="main bg--white pt-50 pb-50">
    <topArrow 
      :backLink = "backLink"
      :transparent = "false"
      textLink = "Tarik Dana"
    />
    <tarikDana/>
    <singleButton 
      :buttonLink = "linkMulaiInvestasi"
      textButton = "Transfer"
    />
  </div>
</template>

<script>
import axios from 'axios'
import tarikDana from '~/components/dana/tarikDana.vue'
import topArrow from '~/components/layout/topArrow.vue'
import singleButton from '~/components/layout/singleButton.vue'
export default {
  components: {
    topArrow,
    tarikDana,
    singleButton
  },
  async asyncData({ params }) {
    return {
       paramId: params.id,
       backLink: `/dana`,
       linkMulaiInvestasi: `/konfirmasi`
    } 
  }
}
</script>
