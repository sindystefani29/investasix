<template>
    <div class="plr-15">
        <div class="highlight-keuangan" v-for="(item, index) in detailArr" :key="index">
            <h4>Informasi Riwayat Pinjaman</h4>
            <div class="highlight-keuangan--container mb-4 mt-2">
                <div class="highlight-keuangan--top">
                    <span>Pinjaman dalam kampanye ini</span>
                    <h5>Rp {{item.riwayat_pinjaman.informasi.pinjaman_kampanye_ini}}</h5>
                </div>
                <div class="line--horizontal"></div>
                <div class="highlight-keuangan--bottom d-flex">
                    <div class="flex-1">
                        <span>Pinjaman Lunas</span>
                        <h5>Rp {{item.riwayat_pinjaman.informasi.pinjaman_aktif}}</h5>
                    </div>
                    <div class="line--vertical"></div>
                    <div class="flex-1 pl-3">
                        <span>Pinjaman Aktif</span>
                        <h5>Rp {{item.riwayat_pinjaman.informasi.pinjaman_lunas}}</h5>
                    </div>
                </div>
            </div>
            <h4>Riwayat Pinjaman Lunas</h4>
            <div class="highlight-keuangan--container mb-4 mt-2">
                <div class="highlight-keuangan--top">
                    <span>Pembayaran</span>
                    <h5>Rp {{item.riwayat_pinjaman.lunas.pembayaran}}</h5>
                </div>
                <div class="line--horizontal"></div>
                <div class="highlight-keuangan--bottom d-flex">
                    <div class="flex-1">
                        <span>Tepat Waktu</span>
                        <h5>Rp {{item.riwayat_pinjaman.lunas.tepat_waktu}}</h5>
                    </div>
                    <div class="line--vertical"></div>
                    <div class="flex-1 pl-3">
                        <span>Telat</span>
                        <h5>Rp {{item.riwayat_pinjaman.lunas.telat}}</h5>
                    </div>
                </div>
            </div>
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
      detailArr(){
        let arr = this.investasiList.filter(field => this.param == field.id)
        return arr
      }
    }
}
</script>