<template>
    <div>
        <div class="plr-15" v-for="(item, index) in detailArr" :key="index">
            <div class="total-dana-terima" v-for="(dana, index) in item.dana_diterima" :key="index">
                <div class="total-dana-terima--detail d-flex">
                    <div>
                        <h4>{{dana.deskripsi}}</h4>
                        <span>{{dana.tanggal}} {{dana.jam}}</span>
                    </div>
                    <h5>Rp {{dana.nominal}}</h5>
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