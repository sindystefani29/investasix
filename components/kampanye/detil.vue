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
                  <div class="pr-2 flex-1">
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
            <svg class="mr-3 icon-img" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2322 13.3869C12.4222 13.3869 13.3869 12.4222 13.3869 11.2322C13.3869 10.0421 12.4222 9.07739 11.2322 9.07739C10.0421 9.07739 9.07739 10.0421 9.07739 11.2322C9.07739 12.4222 10.0421 13.3869 11.2322 13.3869ZM11.2322 14.4643C13.0172 14.4643 14.4643 13.0172 14.4643 11.2322C14.4643 9.44709 13.0172 8 11.2322 8C9.44709 8 8 9.44709 8 11.2322C8 13.0172 9.44709 14.4643 11.2322 14.4643Z" fill="#231F20"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2383 17L13.0061 13.7678L13.7679 13.006L17.0001 16.2381L16.2383 17Z" fill="#231F20"/>
              <path d="M0.5 5C0.5 4.17157 1.17157 3.5 2 3.5H15C15.8284 3.5 16.5 4.17157 16.5 5V15C16.5 15.8284 15.8284 16.5 15 16.5H2C1.17157 16.5 0.5 15.8284 0.5 15V5Z" stroke="#231F20"/>
              <path d="M4.5 2C4.5 1.17157 5.17157 0.5 6 0.5H11C11.8284 0.5 12.5 1.17157 12.5 2V3.5H4.5V2Z" stroke="#231F20"/>
              <path d="M0 7H7" stroke="black"/>
              <path d="M10 7L17 7" stroke="#231F20"/>
              <rect x="7" y="6" width="3" height="2" fill="#231F20"/>
            </svg>
            <h4>Identitas Usaha</h4>
          </div>
          <v-icon>chevron_right</v-icon>
        </nuxt-link>
        <nuxt-link class="kampanye-detil--link d-flex mb-4" :to="{path: `/kampanye/${item.id}/highlight-keuangan`}">
          <div class="d-flex">
            <svg class="mr-3 icon-img" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.5 8.5C14.5 12.366 11.366 15.5 7.5 15.5C3.63401 15.5 0.5 12.366 0.5 8.5C0.5 4.63401 3.63401 1.5 7.5 1.5C11.366 1.5 14.5 4.63401 14.5 8.5Z" stroke="#231F20"/>
              <path d="M11.5 8.5C11.5 10.7091 9.70914 12.5 7.5 12.5C5.29086 12.5 3.5 10.7091 3.5 8.5C3.5 6.29086 5.29086 4.5 7.5 4.5C9.70914 4.5 11.5 6.29086 11.5 8.5Z" stroke="#231F20"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 1C12.2495 1 12.4991 0.875459 12.6865 0.688534L12.6885 0.686465C12.8755 0.49908 13 0.24954 13 0C13 0.24954 13.1245 0.49908 13.3115 0.686465L13.3135 0.688534C13.5009 0.875459 13.7505 1 14 1C13.7505 1 13.5009 1.12454 13.3135 1.31147L13.3115 1.31354C13.1245 1.50092 13 1.75046 13 2C13 1.75046 12.8755 1.50092 12.6885 1.31354L12.6865 1.31147C12.4991 1.12454 12.2495 1 12 1Z" fill="#231F20"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M3 13C3.24954 13 3.49908 12.8755 3.68646 12.6885L3.68853 12.6865C3.87546 12.4991 4 12.2495 4 12C4 12.2495 4.12454 12.4991 4.31147 12.6865L4.31354 12.6885C4.50092 12.8755 4.75046 13 5 13C4.75046 13 4.50092 13.1245 4.31354 13.3115L4.31147 13.3135C4.12454 13.5009 4 13.7505 4 14C4 13.7505 3.87546 13.5009 3.68853 13.3135L3.68646 13.3115C3.49908 13.1245 3.24954 13 3 13Z" fill="#231F20"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M14 14C14.2495 14 14.4991 13.8755 14.6865 13.6885L14.6885 13.6865C14.8755 13.4991 15 13.2495 15 13C15 13.2495 15.1245 13.4991 15.3115 13.6865L15.3135 13.6885C15.5009 13.8755 15.7505 14 16 14C15.7505 14 15.5009 14.1245 15.3135 14.3115L15.3115 14.3135C15.1245 14.5009 15 14.7505 15 15C15 14.7505 14.8755 14.5009 14.6885 14.3135L14.6865 14.3115C14.4991 14.1245 14.2495 14 14 14Z" fill="#231F20"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 16C12.2495 16 12.4991 15.8755 12.6865 15.6885L12.6885 15.6865C12.8755 15.4991 13 15.2495 13 15C13 15.2495 13.1245 15.4991 13.3115 15.6865L13.3135 15.6885C13.5009 15.8755 13.7505 16 14 16C13.7505 16 13.5009 16.1245 13.3135 16.3115L13.3115 16.3135C13.1245 16.5009 13 16.7505 13 17C13 16.7505 12.8755 16.5009 12.6885 16.3135L12.6865 16.3115C12.4991 16.1245 12.2495 16 12 16Z" fill="#231F20"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M13 3C13.4991 3 13.9982 2.75092 14.3729 2.37707L14.3771 2.37293C14.7509 1.99816 15 1.49908 15 1C15 1.49908 15.2491 1.99816 15.6229 2.37293L15.6271 2.37707C16.0018 2.75092 16.5009 3 17 3C16.5009 3 16.0018 3.24908 15.6271 3.62293L15.6229 3.62707C15.2491 4.00184 15 4.50092 15 5C15 4.50092 14.7509 4.00184 14.3771 3.62707L14.3729 3.62293C13.9982 3.24908 13.4991 3 13 3Z" fill="#231F20"/>
            </svg>
            <h4>Highlight Keuangan</h4>
          </div>
          <v-icon>chevron_right</v-icon>
        </nuxt-link>
        <nuxt-link class="kampanye-detil--link d-flex mb-4" :to="{path: `/kampanye/${item.id}/jadwal-angsuran`}">
          <div class="d-flex">
            <svg class="mr-3 icon-img" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2812 1.0625H14.875C15.4618 1.0625 15.9375 1.5382 15.9375 2.125V8.78429C15.6249 8.60348 15.2621 8.5 14.875 8.5H6.375C5.98795 8.5 5.62506 8.60348 5.3125 8.78429V8.5H3.1875V10.625H4.25V11.6875H3.1875V13.8125H4.25V14.875C4.25 15.2621 4.35348 15.6249 4.53429 15.9375H2.125C1.5382 15.9375 1.0625 15.4618 1.0625 14.875V2.125C1.0625 1.5382 1.5382 1.0625 2.125 1.0625H3.71875V2.65625H3.1875V3.71875H5.3125V2.65625H4.78125V1.0625H7.96875V2.65625H7.4375V3.71875H9.5625V2.65625H9.03125V1.0625H12.2188V2.65625H11.6875V3.71875H13.8125V2.65625H13.2812V1.0625ZM5.3125 13.8125V14.875C5.3125 15.4618 5.7882 15.9375 6.375 15.9375H14.875C15.4618 15.9375 15.9375 15.4618 15.9375 14.875V12.75H5.3125V13.8125ZM15.9375 10.625H5.3125C5.3125 10.0382 5.7882 9.5625 6.375 9.5625H14.875C15.4618 9.5625 15.9375 10.0382 15.9375 10.625ZM17 12.75V10.625V2.125C17 0.951395 16.0486 0 14.875 0H13.2812H12.2188H9.03125H7.96875H4.78125H3.71875H2.125C0.951395 0 0 0.951395 0 2.125V14.875C0 16.0486 0.951395 17 2.125 17H6.375H14.875C16.0486 17 17 16.0486 17 14.875V12.75ZM5.3125 5.3125H3.1875V7.4375H5.3125V5.3125ZM7.4375 5.3125H9.5625V7.4375H7.4375V5.3125ZM13.8125 5.3125H11.6875V7.4375H13.8125V5.3125Z" fill="#231F20"/>
            </svg>
            <h4>Jadwal Angsuran</h4>
          </div>
          <v-icon>chevron_right</v-icon>
        </nuxt-link>
        <nuxt-link class="kampanye-detil--link d-flex mb-4" :to="{path: `/kampanye/${item.id}/riwayat-pinjaman`}">
          <div class="d-flex">
            <svg class="mr-3 icon-img" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 1C4.35786 1 1 4.35786 1 8.5C1 12.6421 4.35786 16 8.5 16C9.86691 16 11.147 15.6348 12.2496 14.9969L12.7504 15.8625C11.4996 16.5861 10.0474 17 8.5 17C3.80558 17 0 13.1944 0 8.5C0 3.80558 3.80558 0 8.5 0C13.1944 0 17 3.80558 17 8.5C17 10.3489 16.4091 12.0612 15.406 13.4566L14.9486 14.0928L13.0643 10.7453L13.9357 10.2547L15.0281 12.1953C15.6468 11.1048 16 9.84415 16 8.5C16 4.35786 12.6421 1 8.5 1Z" fill="#231F20"/>
            </svg>
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