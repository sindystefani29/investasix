<template>
    <div class="plr-15 mulai-investasi">
        <div class="mulai-investasi--done d-flex" v-for="(item, index) in detailArr" :key="index">
            <svg class="mb-4" width="123" height="98" viewBox="0 0 123 98" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0)">
            <path d="M38.7 54.2C38.7 59.8 34.1 64.4 28.5 64.4H10.2C4.6 64.4 0 59.8 0 54.2C0 48.5 4.6 44 10.2 44H28.4C34.1 43.9 38.7 48.5 38.7 54.2Z" fill="#DDECFF"/>
            <path d="M82.2 28.2C82.2 22.5 86.8 18 92.4 18H106.3C112 18 116.5 22.6 116.5 28.2C116.5 33.8 111.9 38.4 106.3 38.4H92.5C86.8 38.4 82.2 33.8 82.2 28.2Z" fill="#DDECFF"/>
            <path d="M119.5 87.3C119.5 93 114.9 97.5 109.3 97.5H67C61.4 97.5 56.8 92.9 56.8 87.3C56.8 81.7 61.4 77.1 67 77.1H109.2C115 77.1 119.5 81.8 119.5 87.3Z" fill="#DDECFF"/>
            <path d="M101.9 49.6H26V91.1H101.9V49.6Z" fill="white"/>
            <path d="M94.2 42.3H18.3V83.8H94.2V42.3Z" fill="#77B4FF"/>
            <path d="M101.9 48.3H95.5V42.3C95.5 41.6 94.9 41 94.2 41H18.3C17.6 41 17 41.6 17 42.3V83.8C17 84.5 17.6 85.1 18.3 85.1H24.7V91.1C24.7 91.8 25.3 92.4 26 92.4H101.9C102.6 92.4 103.2 91.8 103.2 91.1V49.6C103.2 48.9 102.6 48.3 101.9 48.3ZM19.6 43.6H92.9V82.5H19.6V43.6ZM100.6 89.8H27.3V85.2H94.2C94.9 85.2 95.5 84.6 95.5 83.9V50.9H100.5V89.8H100.6Z" fill="#231F20"/>
            <path d="M25.5 71.7V54.4C28.2 54.4 30.4 52.2 30.4 49.5H82.1C82.1 52.2 84.3 54.4 87 54.4V71.7C84.3 71.7 82.1 73.9 82.1 76.6H30.4C30.4 73.9 28.2 71.7 25.5 71.7Z" fill="white"/>
            <path d="M43.5 61.5H34.8C34.3 61.5 33.8 61.1 33.8 60.5C33.8 60 34.2 59.5 34.8 59.5H43.5C44 59.5 44.5 59.9 44.5 60.5C44.4 61.1 44 61.5 43.5 61.5Z" fill="#77B4FF"/>
            <path d="M43.5 66.6H34.8C34.3 66.6 33.8 66.2 33.8 65.6C33.8 65.1 34.2 64.6 34.8 64.6H43.5C44 64.6 44.5 65 44.5 65.6C44.4 66.2 44 66.6 43.5 66.6Z" fill="#77B4FF"/>
            <path d="M77.7 61.5H69C68.4 61.5 68 61.1 68 60.5C68 60 68.4 59.5 69 59.5H77.7C78.3 59.5 78.7 59.9 78.7 60.5C78.7 61.1 78.3 61.5 77.7 61.5Z" fill="#77B4FF"/>
            <path d="M77.7 66.6H69C68.4 66.6 68 66.2 68 65.6C68 65.1 68.4 64.6 69 64.6H77.7C78.3 64.6 78.7 65 78.7 65.6C78.7 66.2 78.3 66.6 77.7 66.6Z" fill="#77B4FF"/>
            <path d="M56.4001 62.1C55.0001 62.1 53.8 60.9 53.8 59.5C53.8 58.1 55.0001 56.9 56.4001 56.9C57.8001 56.9 59 58.1 59 59.5C59 60 59.4 60.5 60 60.5C60.5 60.5 61 60.1 61 59.5C61 57.3 59.5001 55.5 57.4001 55.1V54.2C57.4001 53.7 57.0001 53.2 56.4001 53.2C55.8001 53.2 55.4001 53.6 55.4001 54.2V55.1C53.4001 55.6 51.8 57.4 51.8 59.5C51.8 62 53.8001 64.1 56.4001 64.1C57.8001 64.1 59 65.3 59 66.7C59 68.1 57.8001 69.3 56.4001 69.3C55.0001 69.3 53.8 68.1 53.8 66.7C53.8 66.2 53.4 65.7 52.8 65.7C52.2 65.7 51.8 66.1 51.8 66.7C51.8 68.9 53.3001 70.7 55.4001 71.1V72C55.4001 72.5 55.8001 73 56.4001 73C56.9001 73 57.4001 72.6 57.4001 72V71.1C59.4001 70.6 61 68.8 61 66.7C60.9 64.1 58.9001 62.1 56.4001 62.1Z" fill="#77B4FF"/>
            <path d="M44.9001 29.6L42.3001 32.2V18.9C42.3001 18.4 41.9001 17.9 41.3001 17.9H24.6001C24.0001 17.9 23.6001 18.3 23.6001 18.9C23.6001 19.5 24.0001 19.9 24.6001 19.9H40.3001V32.2L37.7001 29.6C37.3001 29.2 36.7001 29.2 36.3001 29.6C35.9001 30 35.9001 30.6 36.3001 31L40.6001 35.3C41.0001 35.7 41.6001 35.7 42.0001 35.3L46.3001 31C46.7001 30.6 46.7001 30 46.3001 29.6C45.9001 29.2 45.3001 29.2 44.9001 29.6Z" fill="#231F20"/>
            <path d="M95.6001 17.9H78.9001C78.3001 17.9 77.9001 18.3 77.9001 18.9V32.2L75.3001 29.6C74.9001 29.2 74.3001 29.2 73.9001 29.6C73.5001 30 73.5001 30.6 73.9001 31L78.2001 35.3C78.6001 35.7 79.2001 35.7 79.6001 35.3L84.0001 31C84.4001 30.6 84.4001 30 84.0001 29.6C83.6001 29.2 83.0001 29.2 82.6001 29.6L80.0001 32.2V19.9H95.7001C96.2001 19.9 96.7001 19.5 96.7001 18.9C96.7001 18.3 96.1001 17.9 95.6001 17.9Z" fill="#231F20"/>
            <path d="M60.4001 15.1C60.0001 14.7 59.4001 14.7 59.0001 15.1L54.7001 19.4C54.3001 19.8 54.3001 20.4 54.7001 20.8C55.1001 21.2 55.7001 21.2 56.1001 20.8L58.7001 18.2V35.1C58.7001 35.6 59.1001 36.1 59.7001 36.1C60.2001 36.1 60.7001 35.7 60.7001 35.1V18.2L63.3001 20.8C63.7001 21.2 64.3001 21.2 64.7001 20.8C65.1001 20.4 65.1001 19.8 64.7001 19.4L60.4001 15.1Z" fill="#231F20"/>
            <path d="M15.1001 22.4C17.1001 25.8 13.6001 29.3 10.2001 27.3C9.90008 27.1 9.60008 26.9 9.40008 26.5C7.40008 23.1 10.9001 19.6 14.3001 21.6C14.7001 21.8 14.9001 22.1 15.1001 22.4Z" fill="#FDE2FF"/>
            <path d="M73.4 0C71.5 0 70 1.5 70 3.4C70 5.3 71.5 6.8 73.4 6.8C75.3 6.8 76.8 5.3 76.8 3.4C76.8 1.5 75.3 0 73.4 0Z" fill="#FFF2D7"/>
            <path d="M12.9001 90.3C11.3001 90.3 10.1001 91.6 10.1001 93.1C10.1001 94.7 11.4001 95.9 12.9001 95.9C14.5001 95.9 15.7001 94.6 15.7001 93.1C15.7001 91.6 14.5001 90.3 12.9001 90.3Z" fill="#FFBF5A"/>
            <path d="M119.5 53.7C117.9 53.7 116.7 55 116.7 56.5C116.7 58.1 118 59.3 119.5 59.3C121.1 59.3 122.3 58 122.3 56.5C122.3 55 121.1 53.7 119.5 53.7Z" fill="#CEF6FD"/>
            <path d="M100.9 94.1C107.748 94.1 113.3 88.5483 113.3 81.7C113.3 74.8517 107.748 69.3 100.9 69.3C94.0517 69.3 88.5 74.8517 88.5 81.7C88.5 88.5483 94.0517 94.1 100.9 94.1Z" fill="#188CA6"/>
            <path d="M100.9 95.4C93.3 95.4 87.2 89.2 87.2 81.7C87.2 74.2 93.4 68 100.9 68C108.4 68 114.6 74.2 114.6 81.7C114.6 89.2 108.4 95.4 100.9 95.4ZM100.9 70.5C94.8 70.5 89.8 75.5 89.8 81.6C89.8 87.7 94.8 92.7 100.9 92.7C107 92.7 112 87.7 112 81.6C112 75.5 107 70.5 100.9 70.5Z" fill="#231F20"/>
            <path d="M100.6 86.3C100.4 86.3 100.1 86.2 99.8999 86.1L95.6999 83.3C95.0999 82.9 94.8999 82.1 95.2999 81.5C95.6999 80.9 96.4999 80.7 97.0999 81.1L100.3 83.3L105.3 77.5C105.8 77 106.6 76.9 107.1 77.4C107.6 77.9 107.7 78.7 107.2 79.2L101.4 85.9C101.3 86.2 100.9 86.3 100.6 86.3Z" fill="white"/>
            </g>
            <defs>
            <clipPath id="clip0">
            <rect width="122.3" height="97.6" fill="white"/>
            </clipPath>
            </defs>
            </svg>
            <h4>Investasi Berhasil senilai</h4>
            <h3>Rp {{$store.state.dana_pinjaman}}</h3>
            <div class="mt-4 flex-1 w-100">
                <span class="sm">Kampanye</span>
                <p><strong>{{item.nama}} {{item.identitas.detil_usaha}}</strong></p>
                <div class="d-flex mt-3 mb-3">
                    <div class="pr-3 flex-1">
                        <span class="sm">Bunga</span>
                        <p><strong>{{item.bunga}}</strong></p>
                    </div>
                    <div class="line--vertical"></div>
                    <div class="plr-15 flex-1">
                        <span class="sm">Grade</span>
                        <p><strong>{{item.grade}}</strong></p>
                    </div>
                    <div class="line--vertical"></div>
                    <div class="plr-15 flex-1">
                        <span class="sm">Tenor</span>
                        <p><strong>{{item.tenor}}</strong></p>
                    </div>
                    <div class="line--vertical"></div>
                    <div class="plr-15 flex-1">
                        <span class="sm">Agunan</span>
                        <p><strong>Tidak Ada</strong></p>
                    </div>
                </div>
                <div class="kampanye-detil--frekuensi">
                    <div class="mb-2 d-flex">
                        <v-icon class="mr-2">brightness_1</v-icon> <span class="text-grey mr-2">Frekuensi Angsuran Pokok :</span> <strong>{{item.angsuran_pokok}}</strong>
                    </div>
                    <div class="d-flex">
                        <v-icon class="mr-2">brightness_1</v-icon> <span class="text-grey mr-2">Frekuensi Angsuran Bunga :</span> <strong>{{item.angsuran_bunga}}</strong>
                    </div>
                </div>
                <div class="d-flex mt-3">
                    <div class="flex-1">
                        <span class="sm">Total Pemberian Pinjaman</span>
                        <h5>Rp {{$store.state.dana_pinjaman}}</h5>
                    </div>
                    <div class="flex-1">
                        <span class="sm">Total Pengembalian</span>
                        <h5 class="pengembalian">Rp {{kalkulasiPengembalian($store.state.dana_pinjaman)}}</h5>
                    </div>
                </div>
                <div class="d-flex mt-5">
                    <v-btn outline color="#A71E22" class="flex-1 ma-0" @click="kalkulasi = !kalkulasi">
                        <a>Lihat Kontrak</a>
                    </v-btn>
                </div>
                <div class="d-flex mt-2 mb-3">
                    <v-btn color="#A71E22" class="flex-1 ma-0">
                        <nuxt-link :to="{path: `/`}" exact>Selesai</nuxt-link>
                    </v-btn>
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
    },
    methods: {
        kalkulasiPengembalian(angka){
            let a = Number(angka)+Number(angka * 0.15)
            return a
        }
    }
}
</script>