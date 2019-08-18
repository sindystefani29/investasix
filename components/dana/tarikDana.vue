<template>
    <div class="dana">
        <div class="bg--red d-flex">
            <p class="mb-1">Dana Anda Saat ini</p>
            <div class="d-flex align-center mb-1">
                <svg class="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0)">
                    <path d="M16.8944 5.80631C17.8882 5.80631 18.6335 6.58051 18.6335 7.61277V17.0321C18.6335 18.0644 17.8882 18.8386 16.8944 18.8386H2.98137C1.98758 18.7095 1.24224 17.9353 1.24224 16.9031V7.61277C1.24224 6.58051 1.98758 5.80631 2.98137 5.80631H16.8944ZM16.8944 4.51599H2.98137C1.36646 4.51599 0 5.80631 0 7.61277V17.0321C0 18.5805 1.36646 19.9999 2.98137 19.9999H17.0186C18.6335 19.9999 20 18.5805 20 16.9031V7.61277C19.8758 5.80631 18.5093 4.51599 16.8944 4.51599Z" fill="white"/>
                    <path d="M2.4845 5.16129L14.0734 1.1488C15.6974 0.586511 17.3913 1.79262 17.3913 3.5112V5.16129H2.4845Z" stroke="white" stroke-width="1.25" stroke-miterlimit="10" stroke-linejoin="round"/>
                    <path d="M18.6335 10.9677V13.5483H16.149C15.4037 13.5483 14.9068 13.0322 14.9068 12.258C14.9068 11.4838 15.4037 10.9677 16.149 10.9677H18.6335ZM19.8757 9.67737H16.149C14.7826 9.67737 13.6646 10.8387 13.6646 12.258C13.6646 13.6774 14.7826 14.8387 16.149 14.8387H19.8757V9.67737Z" fill="white"/>
                    </g>
                    <defs>
                    <clipPath id="clip0">
                    <rect width="20" height="20" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
                <h2>Rp 14.000.000.-</h2>
            </div>
        </div>
        <div class="plr-15 pt-4">
          <div class="d-flex align-center justify-between">
            <label class="pure-material-textfield-outlined">
              <input placeholder=" ">
              <span>Masukkan nominal penarikan</span>
            </label>
          </div>
        </div>
        <div class="plr-15 pt-4">
          <div class="d-flex flex-column justify-between">
            <h3 class="mb-3">Pilih Bank</h3>
            <div class="dana--bank plr-15">
              <p><strong>BCA - 8991234567</strong><br>John Lee</p>
            </div>
          </div>
        </div>
        <div class="plr-15 pt-4">
          <div class="d-flex flex-column justify-between">
            <p class="mb-3"><strong>Peringatan!</strong></p>
            <div class="dana--warning">
              <p class="mb-3">Nama pemilik rekening harus sama dengan nama pemilik akun!</p>
              <p class="mb-3">Pastikan kembali nomor dan nama yang anda masukkan untuk mendaftarkan rekening.</p>
              <p class="mb-3">INVESTASIX Tidak bertanggung jawab atas kesalahan transfer akibat kelalaian pengguna.</p>
              <p>Minimal penarikan Rp. 100.000.</p>
              <p class="mb-3">Maksimal penarikan Rp. 200.000.000 per hari (untuk menaikan limit, klik sini).</p>
              <p class="mb-3">Biaya administrasi penarikan Rp. 5.000.</p>
              <p class="mb-3">Semua penarikan Rupiah akan diproses menggunakan jaringan LLG (Kliring) atau RTGS.</p>
              <p class="mb-3">Proses penarikan di atas pukul 12.00 WIB / 13.00 WITA akan masuk pada hari kerja bank selanjutnya.</p>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import { transaksi } from '../../assets/js/dummyData'
export default {
    data () {
      return {
        transaksi,
        dialog: false,
        valueDialog: []
      }
    },
    computed: {
      onProcess(){
        let arr = this.portfolio.filter(field => field.status == "on_process")
        return arr
      },
      onDone(){
        let arr = this.portfolio.filter(field => field.status == "done")
        return arr
      }
    },
    methods:{
      openDialog(id){
        let arr = this.transaksi.filter(field => field.id == id)
        this.valueDialog = arr
      }
    }
}
</script>