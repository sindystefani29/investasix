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
        <div v-for="(dana, index) in tempArr" :key="index">
            <div class="mulai-investasi--user" v-if="$store.state.nama_perusahaan == detailArr[0].nama && $store.state.dana_pinjaman">
                <div class="mulai-investasi--user-chat bg--yellow mb-3">
                    <p>Rp {{dana}}</p>
                </div>
            </div>
            <div class="mulai-investasi--admin" v-if="$store.state.nama_perusahaan == detailArr[0].nama && $store.state.dana_pinjaman">
                <div class="mulai-investasi--admin-chat bg--white mb-3">
                    <p>Berdasarkan nominal yang kamu masukkan, berikut adalah Target pengembalian</p>
                </div>
            </div>
        </div>
        <div class="mulai-investasi--floating d-flex main h-180" v-if="kalkulasi">
            <h4>Jumlah Investasi</h4>
            <div class="d-flex">
                <v-subheader class="pl-0">Rp</v-subheader>
                <v-text-field
                    type="text"
                    label="Masukkan Nominal"
                    hint="Minimal Pinjaman 100.000 rupiah"
                    v-model="danaPinjaman"
                ></v-text-field>
            </div>
            <v-btn color="#A71E22" class="ma-0 d-flex" @click="kalkulasiPengembalian()">
                <a>Kalkulasi Pengembalian</a>
            </v-btn>
        </div>
        <div class="mulai-investasi--floating d-flex main h-156" v-else>
            <div class="d-flex mulai-investasi--floating-target">
                <span class="md">Target Pengembalian</span>
                <h5>Rp {{targetPengembalian}}</h5>
                <span class="lg">Biaya pokok {{danaPinjaman}} + Untung bunga 15% {{untungBunga}}</span>
            </div>
            <div class="d-flex">
                <v-btn outline color="#A71E22" class="flex-1" @click="kalkulasi = !kalkulasi">
                  <a>Ganti Nominal</a>
                </v-btn>
                <v-btn color="#A71E22" class="flex-1">
                  <nuxt-link :to="{path: `/investasi/${param}/konfirmasi-pinjaman`}">Lanjut</nuxt-link>
                </v-btn>
            </div>
        </div>
    </div>
</template>

<script>
import { investasiList } from '../../assets/js/dummyData'
import { setTimeout } from 'timers';
export default {
    props: {
      param: String
    },
    data () {
      return {
        tempArr: [],
        investasiList,
        danaSaatIni : '100.000.000',
        danaPinjaman : '',
        untungBunga: '',
        targetPengembalian : '',
        kalkulasi: true
      }
    },
    computed: {
      detailArr(){
        let arr = this.investasiList.filter(field => this.param == field.id)
        return arr
      }
    },
    mounted() {
        if(this.$store.state.nama_perusahaan == this.detailArr[0].nama && this.$store.state.dana_pinjaman){
            this.tempArr.push(this.$store.state.dana_pinjaman)
            this.untungBunga = this.$store.state.dana_pinjaman * 0.15
            this.targetPengembalian = Number(this.$store.state.dana_pinjaman)+Number(this.untungBunga)
            this.kalkulasi = false
        }
        setTimeout(this.toBottom, 100)
    },
    methods: {
        toBottom(){
            window.scrollTo(0, document.body.scrollHeight)
        },
        kalkulasiPengembalian(){
            let obj = {
                nama_perusahaan: this.detailArr[0].nama,
                dana_pinjaman: this.danaPinjaman
            }
            this.$store.commit('addDana', obj)
            this.untungBunga = this.danaPinjaman * 0.15
            this.targetPengembalian = Number(this.danaPinjaman)+Number(this.untungBunga)
            this.tempArr.push(this.danaPinjaman)
            this.kalkulasi = false
            setTimeout(this.toBottom, 100)
        }
    }
}
</script>