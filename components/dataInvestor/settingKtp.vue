<template>
    <div class="data-diri plr-15 d-flex flex-column">
        <p class="mb-1"><strong>Tinjau Foto KTP</strong></p>
        <p class="text-grey mb-3">Mohon Periksa kembali foto KTP Anda. Pastikan data terlihat jelas dalam foto</p>
        <div class="data-diri--content d-flex mb-3">
            <img v-if="ktp" :src="ktp" style="width: 50%" class="ma-auto">
            <p class="text-grey" v-else><nuxt-link to="/data-investor/webcam">Click here to take a picture</nuxt-link></p>
        </div>
        <label class="pure-material-textfield-outlined mb-3">
            <input placeholder=" " v-model="noKTP">
            <span>Nomor KTP</span>
        </label>
        <div v-if="selfieKtp" class="data-diri--content d-flex mb-3">
            <img :src="selfieKtp" style="width: 50%" class="ma-auto">
        </div>
        <nuxt-link v-else to="/data-investor/webcam" class="data-diri--content d-flex justify-between mb-3">
            <div class="d-flex align-center">
                <p>Foto Selfie dengan KTP</p>
            </div>
            <div class="d-flex align-center">
                <v-icon>chevron_right</v-icon>
            </div>
        </nuxt-link>
        <p class="text-grey mb-4">Dengan menekan tombol lanjut, maka Anda menyetujui bahwa data di atas benar</p>
        <div class="d-flex">
            <v-btn outline color="#A71E22" class="d-flex ml-0">
                <nuxt-link to="/data-investor">Batal</nuxt-link>
            </v-btn>
            <v-btn color="#A71E22" class="d-flex mr-0" @click="saveKTP">
                <a>Lanjut</a>
            </v-btn>
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
        investasiList,
        ktp: '',
        selfieKtp: '',
        noKTP: ''
      }
    },
    mounted() {
        this.ktp = this.$store.state.ktp
        this.selfieKtp = this.$store.state.selfieKTP
        this.noKTP = this.$store.state.noKTP
    },
    methods:{
        saveKTP(){
            this.$store.commit('addNoKTP', this.noKTP)
            this.$router.push({path: '/data-investor'})
        }
    }
}
</script>