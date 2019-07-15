<template>
  <div class="main bg--white pt-65">
    <topArrow 
      :backLink = "backLink"
      :transparent = "false"
      textLink = "Riwayat Pinjaman"
    />
    <riwayatPinjaman 
      :param = "paramId"
    />
  </div>
</template>

<script>
import axios from 'axios'
import riwayatPinjaman from '~/components/kampanye/riwayatPinjaman.vue'
import topArrow from '~/components/layout/topArrow.vue'
export default {
  components: {
    riwayatPinjaman,
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
