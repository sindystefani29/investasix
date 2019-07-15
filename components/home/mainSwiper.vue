<template>
  <div class="main-swiper">
    <no-ssr>
      <div v-swiper:mySwiper1="swiperFadeLoop" class="swiper-background">
        <div class="swiper-wrapper">
          <div class="swiper-slide zomato--banner__swiper" v-for="(banner, index) in bannerSlide" :key="index">
            <img src="~/static/city.jpg"/>
            <div class="plr-15 swiper-slide-content d-flex">
              <h3 class="mb-2 mt-4">{{banner.header}}</h3>
              <p  class="mb-5">{{banner.content}}</p>
              <div class="swiper-slide-button mt-auto d-flex">
                <v-btn color="white" class="flex-1">
                  <nuxt-link to="/investasi">Investasi Sekarang</nuxt-link>
                </v-btn>
                <v-btn outline color="white" class="flex-1">
                  <nuxt-link to="/pelajari">Pelajari Lebih Lanjut</nuxt-link>
                </v-btn>
              </div>
            </div>
          </div>
          <div class="swiper-pagination" slot="pagination"></div>
        </div>
      </div>
    </no-ssr>
  </div>
</template>

<script>
export default {
    data () {
      return {
        swiperFadeLoop: {
          loop: true,
          autoplay: {
            delay: 7000,
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        },
        bannerSlide: [
          {
            header: 'Investasi dengan keuntungan lebih tinggi di atas rata-rata',
            content: 'Berikan pinjaman kepada pelaku usaha dan dapatkan imbalan hasil hingga 24% per tahun. 100% online.'
          },
          {
            header: 'Pinjaman cepat dan gampang dengan suku bunga fleksibel dan transparan',
            content: 'Kami mengerti kebutuhan anda. Bisnis anda memerlukan dana untuk terus berkembang. Kami serius untuk memberikan solusi yang lebih baik.'
          },
          {
            header: 'Konsultasi investasi gratis dengan standard CFA',
            content: 'CFA merupakan asosiasi dengan reputasi global terbaik di dunia investasi. Tentukan tujuan investasi anda, kami akan tunjukkan caranya'
          }
        ]
      }
    }
}
</script>
