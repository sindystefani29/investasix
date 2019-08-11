<template>
    <div>
        <mulaiInvestasi 
            v-if="doInvestasi"
            :param = "param"
        />
        <div class="plr-15 mulai-investasi" v-else>
            <div class="mulai-investasi--admin">
                <div class="mulai-investasi--admin-chat bg--white mb-3">
                    <p>Hi Sahabat Investasix,<br>Anda sudah pernah melakukan investasi pada kampanye ini dengan detail sebagai berikut</p>
                </div>
                <div class="mulai-investasi--admin-chat bg--white mb-3" v-for="(item, index) in detailArr" :key="index">
                    <div class="d-flex">
                        <div class="flex-1">
                            <span class="md">Tanggal Pemberian Pinjaman</span>
                            <p><strong>{{item.pemberian_pinjaman}}</strong></p>
                        </div>
                        <div class="flex-1">
                            <span class="md">Jumlah Pemberian Pinjaman</span>
                            <p><strong>Rp {{item.on_process}}</strong></p>
                        </div>
                    </div>
                </div>
                <div class="mulai-investasi--admin-chat bg--white mb-3">
                    <p>Anda ingin berinvestasi lagi ?</p>
                </div>
            </div>
            <div class="mulai-investasi--floating d-flex main h-129">
                <h4>Ingin berinvestasi lagi ?</h4>
                <div class="d-flex">
                    <v-btn outline color="#A71E22" class="flex-1">
                        <nuxt-link :to="{path: `/kampanye/${param}`}">Tidak</nuxt-link>
                    </v-btn>
                    <v-btn color="#A71E22" class="flex-1" @click="doInvestasi = !doInvestasi">
                        <a>Ya</a>
                    </v-btn>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import mulaiInvestasi from '~/components/investasi/mulaiInvestasi.vue'
import { portfolio } from '../../assets/js/dummyData'
import { setTimeout } from 'timers';
export default {
    props: {
      param: String
    },
    components: {
        mulaiInvestasi
    },
    data () {
      return {
        portfolio,
        doInvestasi: false
      }
    },
    computed: {
      detailArr(){
        let arr = this.portfolio.filter(field => this.param == field.id)
        return arr
      }
    },
    mounted() {
        setTimeout(this.toBottom, 100)
    },
    methods: {
        toBottom(){
            window.scrollTo(0, document.body.scrollHeight)
        }
    }
}
</script>