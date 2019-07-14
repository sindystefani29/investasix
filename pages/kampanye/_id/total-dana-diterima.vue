<template>
  <div class="main bg--white pt-50">
    <topArrow 
      :backLink = "backLink"
      :transparent = "false"
      textLink = "Total Dana Diterima"
    />
    <totalDanaTerima 
      :param = "paramId"
    />
  </div>
</template>

<script>
import axios from 'axios'
import totalDanaTerima from '~/components/kampanye/totalDanaTerima.vue'
import topArrow from '~/components/layout/topArrow.vue'
export default {
  components: {
    totalDanaTerima,
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
