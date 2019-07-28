<template>
    <div class="wording-investasix mt-5">
        <h4>Mengapa investasi di Investasix</h4>
        <div class="wording-row plr-15 d-flex mt-4">
            <div class="wording-row--content">
                <img src="~/static/logo/clock.png" />
                <div class="wording-row--title mb-1">Lebih Cepat</div>
                <p>Proses administrasi bisa dimulai sebelum dana dibutuhkan.</p>
            </div>
            <div class="wording-row--content">
                <img src="~/static/logo/money.png" />
                <div class="wording-row--title mb-1">Lebih Murah</div>
                <p>Gunakan simulasi bunga pinjaman untuk bunga yang lebih rendah.</p>
            </div>
            <div class="wording-row--content">
                <img src="~/static/logo/hand.png" />
                <div class="wording-row--title mb-1">Lebih Transparan</div>
                <p>Semua biaya tertera dengan jelas sejak awal.</p>
            </div>
            <div class="wording-row--content">
                <img src="~/static/logo/asix.png" />
                <div class="wording-row--title mb-1">Lebih Asix</div>
                <p>Dapatkan pengalaman seru dan informasi penting.</p>
            </div>
        </div>
        <div class="wording-column plr-15 bg--grey">
            <div class="wording-column--image mb-3">
                <img src="~/static/logo/kalkulator.png" />
            </div>
            <div class="wording-column--title">Kalkulator Finansial</div>
            <div class="wording-column--caption">Rencanakan masa depan mu hari ini</div>
            <p>Hitung Rencana Pendanaan mu unutuk mendapatkan kondisi keuangan yang terencana di mas depan</p>
            <v-btn color="#A71E22" class="m-auto wording-button custom-button">
                <nuxt-link to="/investasi">Rencanakan Sekarang</nuxt-link>
            </v-btn>
        </div>
        <div class="wording-column plr-15 bg--white">
            <div class="wording-column--image mb-3">
                <img src="~/static/logo/auto invest.png" />
            </div>
            <div class="wording-column--title">Auto Invest</div>
            <div class="wording-column--caption">Solusi hemat waktu dengan hasil optimal</div>
            <p>Investasi Otomatis sesuai dengan kriteria yang sudah ditentukan oleh anda. Fitur ini bertujuan untuk memudahkan investor dan meningkatkan produktivitas dana investasi.</p>
            <v-btn color="#A71E22" class="m-auto wording-button custom-button">
                <nuxt-link to="/investasi">Setup Auto Invest</nuxt-link>
            </v-btn>
        </div>
        <div class="wording-column plr-15 bg--grey">
            <div class="wording-column--image mb-3">
                <img src="~/static/logo/refer.png" />
            </div>
            <div class="wording-column--title">Refer Your Friend</div>
            <div class="wording-column--caption">Referensikan temankamu</div>
            <p>Ajak teman kamu untuk bergabung disini dan jadilah pahlawan bagi perusahaan yang membutuhkan dana</p>
            <v-btn color="#A71E22" class="m-auto wording-button custom-button">
                <nuxt-link to="/investasi">Refer Now</nuxt-link>
            </v-btn>
        </div>
    </div>
</template>

<script>
export default {
    data () {
      return {
        
      }
    }
}
</script>