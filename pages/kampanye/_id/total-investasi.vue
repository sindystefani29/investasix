<template>
  <div class="main bg--white pt-50">
    <topArrow 
      :backLink = "backLink"
      :transparent = "false"
      textLink = "Total Investasi"
    />
    <totalInvestasi 
      :param = "paramId"
    />
  </div>
</template>

<script>
import axios from 'axios'
import totalInvestasi from '~/components/kampanye/totalInvestasi.vue'
import topArrow from '~/components/layout/topArrow.vue'
export default {
  components: {
    totalInvestasi,
    topArrow
  },
  async asyncData({ params }) {
    return {
       paramId: params.id,
       backLink: `/kampanye/${params.id}`
    } 
  }
}
</script>
