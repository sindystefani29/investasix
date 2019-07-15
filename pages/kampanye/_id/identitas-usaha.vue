<template>
  <div class="main bg--white pt-65">
    <topArrow 
      :backLink = "backLink"
      :transparent = "false"
      textLink = "Identitas Usaha"
    />
    <identitasUsaha 
      :param = "paramId"
    />
  </div>
</template>

<script>
import axios from 'axios'
import identitasUsaha from '~/components/kampanye/identitasUsaha.vue'
import topArrow from '~/components/layout/topArrow.vue'
export default {
  components: {
    identitasUsaha,
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
