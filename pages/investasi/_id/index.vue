<template>
  <div class="main bg--blue pb-180 pt-65">
    <topArrow 
      :backLink = "linkKampanyeDetil"
      :transparent = "false"
      textLink = "Mulai Investasi"
      v-if="isFirst"
    />
    <topArrow 
      :backLink = "linkKampanyeDetil"
      :transparent = "false"
      textLink = "Investasi"
      v-else
    />
    <mulaiInvestasi
      :param = "paramId"
      v-if="isFirst"
    />
    <reInvestasi
      :param = "paramId"
      v-else
    />
  </div>
</template>

<script>
import axios from 'axios'
import { portfolio } from '../../../assets/js/dummyData'
import mulaiInvestasi from '~/components/investasi/mulaiInvestasi.vue'
import reInvestasi from '~/components/investasi/reInvestasi.vue'
import topArrow from '~/components/layout/topArrow.vue'
export default {
  scrollToTop: false,
  components: {
    mulaiInvestasi,
    reInvestasi,
    topArrow
  },
  async asyncData({ params }) {
    let a = await portfolio.filter(field => params.id == field.id)
    let b = await (a.length == 0) ? true : false
    return {
       paramId: params.id,
       linkKampanyeDetil: `/kampanye/${params.id}`,
       isFirst: b
    } 
  }
}
</script>
