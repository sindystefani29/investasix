<template>
  <div class="main bg--white pt-65">
    <topArrow 
      :backLink = "backLink"
      :transparent = "false"
      textLink = "Estimasi Jadwal Pengembalian Angsuran"
    />
    <jadwalAngsuran 
      :param = "paramId"
    />
  </div>
</template>

<script>
import axios from 'axios'
import jadwalAngsuran from '~/components/kampanye/jadwalAngsuran.vue'
import topArrow from '~/components/layout/topArrow.vue'
export default {
  components: {
    jadwalAngsuran,
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
