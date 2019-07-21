<template>
  <div class="main bg--white pt-65">
    <donePinjaman
      :param = "paramId"
    />
  </div>
</template>

<script>
import axios from 'axios'
import donePinjaman from '~/components/investasi/donePinjaman.vue'
export default {
  scrollToTop: false,
  components: {
    donePinjaman
  },
  async asyncData({ params }) {
    return {
       paramId: params.id
    } 
  }
}
</script>
