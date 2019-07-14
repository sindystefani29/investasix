<template>
  <div class="kampanye-detil">
    <div v-for="(item, index) in detailArr" :key="index">
      <div class="progress-investasi mb-4">
          <div class="thumbnail-image h-135">
            <img src="~/static/welding.jpg"/>
              <div class="thumbnail-image--content d-flex">
                <a class="mb-0 mt-auto">{{item.nama}} {{item.identitas.detil_usaha}} {{item.identitas.kota}} <span>{{item.id}}</span></a>
              </div>
          </div>
          <div class="thumbnail-container plr-15">
              <div class="thumbnail-detail d-flex mt-4">
                  <div class="flex-1">
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
          </div>
      </div>
      <div class="plr-15">
        <div class="kampanye-detil--frekuensi mb-4">
          <div class="mb-2 d-flex">
            <v-icon class="mr-2">brightness_1</v-icon> <span class="text-grey mr-2">Frekuensi Angsuran Pokok :</span> <strong>{{item.angsuran_pokok}}</strong>
          </div>
          <div class="d-flex">
            <v-icon class="mr-2">brightness_1</v-icon> <span class="text-grey mr-2">Frekuensi Angsuran Bunga :</span> <strong>{{item.angsuran_bunga}}</strong>
          </div>
        </div>
        <div class="kampanye-detil--investasi mb-4 d-flex">
          <div>
            <h5>Total Investasi</h5>
            <span class="mb-1">Rp {{item.total_investasi}}</span>
            <nuxt-link :to="{path: `/kampanye/${item.id}/total-investasi`}">Lihat Detail</nuxt-link>
          </div>
          <div>
            <h5>Total Dana Diterima</h5>
            <span class="mb-1">Rp {{item.total_dana_diterima}}</span>
            <nuxt-link :to="{path: `/kampanye/${item.id}/total-dana-diterima`}">Lihat Detail</nuxt-link>
          </div>
        </div>
        <h3 class="mb-1">Tujuan Penggalangan Dana</h3>
        <p class="text-grey mb-4">{{item.tujuan_dana}}</p>
        <h4 class="mb-1">Jaminan dan Anggunan</h4>
        <p class="text-grey mb-4">Tidak Ada</p>
        <nuxt-link class="kampanye-detil--link d-flex mb-4" :to="{path: `/kampanye/${item.id}/identitas-usaha`}">
          <div class="d-flex">
            <img class="mr-3 icon-img" src="~/static/icon/identitas_usaha.png"/>
            <h4>Identitas Usaha</h4>
          </div>
          <v-icon>chevron_right</v-icon>
        </nuxt-link>
        <nuxt-link class="kampanye-detil--link d-flex mb-4" :to="{path: `/kampanye/${item.id}/highlight-keuangan`}">
          <div class="d-flex">
            <img class="mr-3 icon-img" src="~/static/icon/highlight_keuangan.png"/>
            <h4>Highlight Keuangan</h4>
          </div>
          <v-icon>chevron_right</v-icon>
        </nuxt-link>
        <nuxt-link class="kampanye-detil--link d-flex mb-4" :to="{path: `/kampanye/${item.id}/jadwal-angsuran`}">
          <div class="d-flex">
            <img class="mr-3 icon-img" src="~/static/icon/jadwal_angsuran.png"/>
            <h4>Jadwal Angsuran</h4>
          </div>
          <v-icon>chevron_right</v-icon>
        </nuxt-link>
        <nuxt-link class="kampanye-detil--link d-flex mb-4" :to="{path: `/kampanye/${item.id}/riwayat-pinjaman`}">
          <div class="d-flex">
            <img class="mr-3 icon-img" src="~/static/icon/riwayat_pinjaman.png"/>
            <h4>Riwayat Pinjaman</h4>
          </div>
          <v-icon>chevron_right</v-icon>
        </nuxt-link>
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