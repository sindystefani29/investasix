<template>
    <div class="plr-15">
        <div class="highlight-keuangan" v-for="(item, index) in detailArr" :key="index">
            <h4>Pendapatan</h4>
            <span>Periode 31 Des 2018</span>
            <div class="highlight-keuangan--container mb-4 mt-2">
                <div class="highlight-keuangan--top">
                    <span>Pendapatan</span>
                    <h5>Rp {{item.keuangan.pendapatan.nominal}}</h5>
                </div>
                <div class="line--horizontal"></div>
                <div class="highlight-keuangan--bottom d-flex">
                    <div class="flex-1">
                        <span>EBITDA</span>
                        <h5>Rp {{item.keuangan.pendapatan.ebitda}}</h5>
                    </div>
                    <div class="line--vertical"></div>
                    <div class="flex-1 pl-3">
                        <span>Laba Bersih</span>
                        <h5>Rp {{item.keuangan.pendapatan.laba_bersih}}</h5>
                    </div>
                </div>
            </div>
            <h4>Hutang dan Modal</h4>
            <span>Periode 1 Jan 2018 - 31 Des 2018</span>
            <div class="highlight-keuangan--container mb-4 mt-2">
                <div class="highlight-keuangan--top">
                    <span>Modal</span>
                    <h5>Rp {{item.keuangan.hutang_modal.modal}}</h5>
                </div>
                <div class="line--horizontal"></div>
                <div class="highlight-keuangan--bottom d-flex">
                    <div class="flex-1">
                        <span>Hutang Jangka Pendek</span>
                        <h5>Rp {{item.keuangan.hutang_modal.hutang_pendek}}</h5>
                    </div>
                    <div class="line--vertical"></div>
                    <div class="flex-1 pl-3">
                        <span>Hutang Jangka Panjang</span>
                        <h5>Rp {{item.keuangan.hutang_modal.hutang_panjang}}</h5>
                    </div>
                </div>
            </div>
            <h4>Rasio Keuangan</h4>
            <div class="highlight-keuangan--container mb-4 mt-2">
                <div class="highlight-keuangan--top">
                    <span>Debit service coverage ratio</span>
                    <h5>{{item.keuangan.rasio_keuangan.debit_service}}</h5>
                </div>
                <div class="line--horizontal"></div>
                <div class="highlight-keuangan--bottom d-flex">
                    <div class="flex-1">
                        <span>Debit to equity ratio</span>
                        <h5>{{item.keuangan.rasio_keuangan.equality_ratio}}</h5>
                    </div>
                    <div class="line--vertical"></div>
                    <div class="flex-1 pl-3">
                        <span>Debit to asset ratio</span>
                        <h5>{{item.keuangan.rasio_keuangan.asset_ratio}}</h5>
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