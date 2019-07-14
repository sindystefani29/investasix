<template>
    <div class="plr-15">
        <div class="jadwal-angsuran" v-for="(item, index) in detailArr" :key="index">
            <div class="jadwal-angsuran--container d-flex mb-3" v-for="(angsuran, index) in item.jadwal_angsuran" :key="index">
                <div class="jadwal-angsuran--tanggal d-flex">
                    <h4>12</h4>
                    <span>JUL</span>
                </div>
                <div class="jadwal-angsuran--detail d-flex flex-1">
                    <div>
                        <span>{{angsuran.jenis}}</span>
                        <p>{{angsuran.deskripsi}}</p>
                    </div>
                    <div>
                        <h4>Rp {{angsuran.nominal}}</h4>
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