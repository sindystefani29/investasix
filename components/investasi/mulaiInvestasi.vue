<template>
    <div class="plr-15 mulai-investasi">
        <div class="mulai-investasi--admin" v-for="(item, index) in detailArr" :key="index">
            <div class="mulai-investasi--admin-chat bg--white mb-3">
                <p>Hi Sahabat Investasix,<br>Berapa nilai yang ingin anda investasikan untuk perusahaan {{item.nama}}? Berikut sisa dana yang dapat anda investasikan.</p>
            </div>
            <div class="mulai-investasi--admin-chat bg--white mb-3">
                <div class="d-flex">
                    <div class="flex-1">
                        <span class="md">Dana anda saat ini</span>
                        <h5>Rp {{danaSaatIni}}</h5>
                    </div>
                    <div class="flex-1">
                        <v-btn color="#A71E22" class="m-auto d-flex">
                            <nuxt-link to="/investasi">Tambah Dana</nuxt-link>
                        </v-btn>
                    </div>
                </div>
            </div>
            <div class="mulai-investasi--admin-chat bg--white mb-3">
                <span class="sm">Pinjaman yang masih dibutuhkan</span>
                <p><strong>Rp {{item.jumlah_pinjaman}}</strong></p>
                <div class="d-flex mt-3 mb-3">
                    <div class="pr-3 flex-1">
                        <span class="sm">Bunga</span>
                        <p><strong>{{item.bunga}}</strong></p>
                    </div>
                    <div class="line--vertical"></div>
                    <div class="plr-15 flex-1">
                        <span class="sm">Grade</span>
                        <p><strong>{{item.grade}}</strong></p>
                    </div>
                    <div class="line--vertical"></div>
                    <div class="plr-15 flex-1">
                        <span class="sm">Tenor</span>
                        <p><strong>{{item.tenor}}</strong></p>
                    </div>
                    <div class="line--vertical"></div>
                    <div class="plr-15 flex-1">
                        <span class="sm">Agunan</span>
                        <p><strong>Tidak Ada</strong></p>
                    </div>
                </div>
                <div class="kampanye-detil--frekuensi">
                    <div class="mb-2 d-flex">
                        <v-icon class="mr-2">brightness_1</v-icon> <span class="text-grey mr-2">Frekuensi Angsuran Pokok :</span> <strong>{{item.angsuran_pokok}}</strong>
                    </div>
                    <div class="d-flex">
                        <v-icon class="mr-2">brightness_1</v-icon> <span class="text-grey mr-2">Frekuensi Angsuran Bunga :</span> <strong>{{item.angsuran_bunga}}</strong>
                    </div>
                </div>
            </div>
        </div>
        <div class="mulai-investasi--user" v-for="(item, index) in detailArr" :key="index">
            <div class="mulai-investasi--user-chat bg--yellow mb-3">
                <p>Rp 100.000</p>
            </div>
        </div>
        <div class="mulai-investasi--admin">
            <div class="mulai-investasi--admin-chat bg--white mb-3">
                <p>Berdasarkan nominal yang kamu masukkan, berikut adalah Target pengembalian</p>
            </div>
        </div>
        <div class="mulai-investasi--floating main">
            <h4>Jumlah Investasi</h4>
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
        danaSaatIni : '100.000.000'
      }
    },
    computed: {
      detailArr(){
        let arr = this.investasiList.filter(field => this.param == field.id)
        return arr
      }
    }
}
</script>