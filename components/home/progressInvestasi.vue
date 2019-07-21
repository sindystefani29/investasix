<template>
    <div class="progress-investasi">
        <h4>Mulai investasi Sekarang</h4>
        <div class="thumbnail-container plr-15" v-for="(item, index) in investasiList" :key="index">
            <div class="thumbnail-image h-120">
                <img src="~/static/welding.jpg"/>
                <div class="thumbnail-image--content d-flex">
                    <nuxt-link :to="{path: `/kampanye/${item.id}`}" class="mb-0 mt-auto">{{item.nama}} {{item.identitas.detil_usaha}} {{item.identitas.kota}} <span>{{item.id}}</span></nuxt-link>
                </div>
            </div>
            <div class="thumbnail-detail d-flex mt-3">
                <div class="pr-3 flex-1">
                    <div class="thumbnail-detail--title">Jumlah Pinjaman</div>
                    <p>Rp {{item.jumlah_pinjaman}}</p>
                </div>
                <div class="line--vertical"></div>
                <div class="plr-15 flex-1">
                    <div class="thumbnail-detail--title">Bunga</div>
                    <p>{{item.bunga}}</p>
                </div>
                <div class="line--vertical"></div>
                <div class="plr-15 flex-1">
                    <div class="thumbnail-detail--title">Grade</div>
                    <p>{{item.grade}}</p>
                </div>
                <div class="line--vertical"></div>
                <div class="plr-15 flex-1">
                    <div class="thumbnail-detail--title">Tenor</div>
                    <p>{{item.tenor}}</p>
                </div>
            </div>
            <div class="thumbnail-progress d-flex" v-if="!item.tanggal_lunas">
                <div class="thumbnail-progress--title">Rp {{item.dana_terkumpul}} telah terkumpul</div>
                <p>{{item.progress}}%</p>
            </div>
            <v-progress-linear v-if="!item.tanggal_lunas" v-model="item.progress"></v-progress-linear>
            <div class="thumbnail-expired" v-if="!item.tanggal_lunas"><v-icon class="mr-1">brightness_1</v-icon> Berakhir dalam 24 hari</div>
            <div class="thumbnail-done" v-if="item.tanggal_lunas">Telah terdanai {{item.progress}}% oleh {{item.jumlah_lender}} Lender di {{item.tanggal_lunas}}</div>
            <div class="line--horizontal mt-4 mb-4"></div>
        </div>
        <v-btn color="#A71E22" class="m-auto thumbnail-button custom-button">
            <nuxt-link to="/investasi">Lihat Lebih Banyak</nuxt-link>
        </v-btn>
    </div>
</template>

<script>
import { investasiList } from '../../assets/js/dummyData'
export default {
    data () {
      return {
        investasiList
      }
    }
}
</script>
