<template>
  <div class="main bg--white pt-65">
    <topArrow 
      :backLink = "backLink"
      :transparent = "false"
      textLink = "Highlight Keuangan"
    />
    <highlightKeuangan 
      :param = "paramId"
    />
  </div>
</template>

<script>
import axios from 'axios'
import highlightKeuangan from '~/components/kampanye/highlightKeuangan.vue'
import topArrow from '~/components/layout/topArrow.vue'
export default {
  components: {
    highlightKeuangan,
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
