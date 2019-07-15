<template>
    <div class="identitas-usaha">
        <div class="plr-15" v-for="(item, index) in detailArr" :key="index">
            <div class="identitas-usaha--detail">
                <span>Bentuk Usaha</span>
                <h4>{{item.identitas.bentuk_usaha}}</h4>
                <div class="line--horizontal mt-2 mb-3"></div>
            </div>
            <div class="identitas-usaha--detail">
                <span>Berdiri Sejak</span>
                <h4>{{item.identitas.tahun_berdiri}}</h4>
                <div class="line--horizontal mt-2 mb-3"></div>
            </div>
            <div class="identitas-usaha--detail">
                <span>Domisili Usaha</span>
                <h4>{{item.identitas.alamat}}</h4>
                <div class="line--horizontal mt-2 mb-3"></div>
            </div>
            <div class="identitas-usaha--detail">
                <span>Kategori Usaha</span>
                <h4>{{item.identitas.kategori_usaha}}</h4>
                <div class="line--horizontal mt-2 mb-3"></div>
            </div>
            <div class="identitas-usaha--detail">
                <h4 class="mb-1">Deskripsi Usaha</h4>
                <p>{{item.identitas.deskripsi_usaha}}</p>
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