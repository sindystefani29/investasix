<template>
    <div class="data-diri plr-15">
        <p class="text-grey mb-4">Mohon lengkapi data diri Anda di bawah</p>
        <div class="d-flex flex-column">
            <nuxt-link :to="{path: cekStoreFotoKTP ? '/data-investor/ktp' : '/data-investor/webcam'}" class="data-diri--content d-flex justify-between mb-3">
                <div class="d-flex align-center">
                    <div class="data-diri--combo-btn mr-3" :class="{'bg--green': cekStoreFotoKTP, 'bg--grey': !cekStoreFotoKTP}">
                        <svg v-if="cekStoreFotoKTP" width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 3.72727L3.94737 7L9 1" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <p><strong>KTP</strong></p>
                </div>
                <div class="d-flex align-center">
                    <v-icon>chevron_right</v-icon>
                </div>
            </nuxt-link>
            <nuxt-link to="/dana" class="data-diri--content d-flex justify-between mb-3">
                <div class="d-flex align-center">
                    <div class="data-diri--combo-btn mr-3 bg--grey"></div>
                    <p><strong>Identitas Anda</strong></p>
                </div>
                <div class="d-flex align-center">
                    <v-icon>chevron_right</v-icon>
                </div>
            </nuxt-link>
            <nuxt-link to="/dana" class="data-diri--content d-flex justify-between mb-3">
                <div class="d-flex align-center">
                    <div class="data-diri--combo-btn mr-3 bg--grey"></div>
                    <p><strong>Akun Bank</strong></p>
                </div>
                <div class="d-flex align-center">
                    <v-icon>chevron_right</v-icon>
                </div>
            </nuxt-link>
        </div>
    </div>
</template>

<script>
import { investasiList } from '../../assets/js/dummyData'
export default {
    props: {
      param: String
    },
    data () {
      return {
        investasiList
      }
    },
    computed: {
      cekStoreFotoKTP(){
        return this.$store.state.ktp
      }
    }
}
</script>