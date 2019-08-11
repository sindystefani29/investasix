<template>
  <div class="main bg--white pb-50 pt-65">
    <topArrow 
      :backLink = "linkMulaiInvestasi"
      :transparent = "false"
      textLink = "Konfirmasi Pinjaman"
    />
    <konfirmasiPinjaman
      :param = "paramId"
    />
    <singleButton 
      :buttonLink = "linkInvestasiSelesai"
      textButton = "Selesai"
    />
  </div>
</template>

<script>
import axios from 'axios'
import singleButton from '~/components/layout/singleButton.vue'
import topArrow from '~/components/layout/topArrow.vue'
import konfirmasiPinjaman from '~/components/investasi/konfirmasiPinjaman.vue'
export default {
  components: {
    singleButton,
    topArrow,
    konfirmasiPinjaman
  },
  async asyncData({ params }) {
    return {
       paramId: params.id,
       linkMulaiInvestasi: `/investasi/${params.id}`,
       linkInvestasiSelesai: `/investasi/${params.id}/done`
    } 
  }
}
</script>
