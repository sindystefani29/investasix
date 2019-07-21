<template>
    <div class="plr-15 mulai-investasi">
        <div class="mulai-investasi--admin" v-for="(item, index) in detailArr" :key="index">
            <div class="bg--white mb-3">
                <span class="sm">Kampanye</span>
                <p><strong>{{item.nama}} {{item.identitas.detil_usaha}}</strong></p>
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
                <div class="d-flex mt-4">
                    <div class="flex-1">
                        <span class="sm">Total Pemberian Pinjaman</span>
                        <h5>Rp {{$store.state.dana_pinjaman}}</h5>
                    </div>
                    <div class="flex-1">
                        <span class="sm">Total Pengembalian</span>
                        <h5 class="pengembalian">Rp {{kalkulasiPengembalian($store.state.dana_pinjaman)}}</h5>
                    </div>
                </div>
                <div class="d-flex mt-5">
                    <v-checkbox
                        v-model="checkbox1"
                        class="ma-0"
                        color="#A71E22"
                    ></v-checkbox>
                    <p class="text-grey">Saya telah membaca dan menyetujui <a>Perjanjian Pemberian Pinjaman</a> Investasix</p>
                </div>
                <div class="d-flex mt-3">
                    <v-checkbox
                        v-model="checkbox2"
                        class="ma-0"
                        color="#A71E22"
                    ></v-checkbox>
                    <p class="text-grey">Saya mengerti <a>Risiko Pemberian Pinjaman</a> dan menyetujui bahwa pemberian pinjaman saya tidak dapat dibatalkan kecuali jika kampanye pinjaman tidak mencapai target</p>
                </div>
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
        investasiList,
        checkbox1: false,
        checkbox2: false
      }
    },
    computed: {
      detailArr(){
        let arr = this.investasiList.filter(field => this.param == field.id)
        return arr
      }
    },
    methods: {
        kalkulasiPengembalian(angka){
            let a = Number(angka)+Number(angka * 0.15)
            return a
        }
    }
}
</script>