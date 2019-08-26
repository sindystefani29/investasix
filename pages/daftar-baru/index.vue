<template>
  <div class="main bg--blue pb-180 pt-65">
    <topArrow 
      backLink = "/lainnya"
      :transparent = "false"
      textLink = "Daftar Baru"
    />
    <daftarBaru/>
  </div>
</template>

<script>
import axios from 'axios'
import daftarBaru from '~/components/lainnya/daftarBaru.vue'
import topArrow from '~/components/layout/topArrow.vue'
export default {
  scrollToTop: false,
  components: {
    daftarBaru,
    topArrow
  }
}
</script>
