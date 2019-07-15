<template>
    <div>
        <div class="plr-15" v-for="(item, index) in detailArr" :key="index">
            <div class="total-investasi" v-for="(investasi, index) in item.investasi" :key="index">
                <div class="total-investasi--detail d-flex">
                    <h4>{{investasi.tanggal}}</h4>
                    <h4>Rp {{investasi.nominal}}</h4>
                </div>
                <div class="line--horizontal"></div>
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