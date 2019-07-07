<template>
    <div class="progress-investasi">
        <h4>Mulai investasi Sekarang</h4>
        <div class="thumbnail-container plr-15">
            <div class="thumbnail-image">
                <img src="~/static/welding.jpg"/>
                <div class="thumbnail-image--content d-flex">
                    <nuxt-link to="/welding" class="mb-0 mt-auto">Perusahaan Jasa Reparasi Tangki Migas di Jakarta Selatan <span>NO845/VE/1923</span></nuxt-link>
                </div>
            </div>
            <div class="thumbnail-detail d-flex">
                <div>
                    <div class="thumbnail-detail--title">Jumlah Pinjaman</div>
                    <p>Rp 1.000.000.000</p>
                </div>
                <div class="line--vertical"></div>
                <div class="plr-15">
                    <div class="thumbnail-detail--title">Bunga</div>
                    <p>10%</p>
                </div>
                <div class="line--vertical"></div>
                <div class="plr-15">
                    <div class="thumbnail-detail--title">Grade</div>
                    <p>A+</p>
                </div>
                <div class="line--vertical"></div>
                <div class="plr-15">
                    <div class="thumbnail-detail--title">Tenor</div>
                    <p>3 Bulan</p>
                </div>
            </div>
            <div class="thumbnail-progress d-flex">
                <div class="thumbnail-progress--title">Rp 200.000.000 telah terkumpul</div>
                <p>56.8%</p>
            </div>
            <v-progress-linear v-model="valueDeterminate"></v-progress-linear>
            <div class="thumbnail-expired"><v-icon class="mr-1">brightness_1</v-icon> Berakhir dalam 24 hari</div>
            <div class="line--horizontal mt-4 mb-4"></div>
        </div>
        <!------------------------------------------------>
        <div class="thumbnail-container plr-15">
            <div class="thumbnail-image">
                <img src="~/static/welding.jpg"/>
                <div class="thumbnail-image--content d-flex">
                    <nuxt-link to="/welding" class="mb-0 mt-auto">Perusahaan Jasa Reparasi Tangki Migas di Jakarta Selatan <span>NO845/VE/1923</span></nuxt-link>
                </div>
            </div>
            <div class="thumbnail-detail d-flex">
                <div>
                    <div class="thumbnail-detail--title">Jumlah Pinjaman</div>
                    <p>Rp 1.000.000.000</p>
                </div>
                <div class="line--vertical"></div>
                <div class="plr-15">
                    <div class="thumbnail-detail--title">Bunga</div>
                    <p>10%</p>
                </div>
                <div class="line--vertical"></div>
                <div class="plr-15">
                    <div class="thumbnail-detail--title">Grade</div>
                    <p>A+</p>
                </div>
                <div class="line--vertical"></div>
                <div class="plr-15">
                    <div class="thumbnail-detail--title">Tenor</div>
                    <p>3 Bulan</p>
                </div>
            </div>
            <div class="thumbnail-done">Telah terdanai 100% oleh 200 Lender di 26 Jan 2019</div>
            <div class="line--horizontal mt-4 mb-4"></div>
        </div>
        <!------------------------------>
        <div class="thumbnail-container plr-15">
            <div class="thumbnail-image">
                <img src="~/static/welding.jpg"/>
                <div class="thumbnail-image--content d-flex">
                    <nuxt-link to="/welding" class="mb-0 mt-auto">Perusahaan Jasa Reparasi Tangki Migas di Jakarta Selatan <span>NO845/VE/1923</span></nuxt-link>
                </div>
            </div>
            <div class="thumbnail-detail d-flex">
                <div>
                    <div class="thumbnail-detail--title">Jumlah Pinjaman</div>
                    <p>Rp 1.000.000.000</p>
                </div>
                <div class="line--vertical"></div>
                <div class="plr-15">
                    <div class="thumbnail-detail--title">Bunga</div>
                    <p>10%</p>
                </div>
                <div class="line--vertical"></div>
                <div class="plr-15">
                    <div class="thumbnail-detail--title">Grade</div>
                    <p>A+</p>
                </div>
                <div class="line--vertical"></div>
                <div class="plr-15">
                    <div class="thumbnail-detail--title">Tenor</div>
                    <p>3 Bulan</p>
                </div>
            </div>
            <div class="thumbnail-progress d-flex">
                <div class="thumbnail-progress--title">Rp 200.000.000 telah terkumpul</div>
                <p>56.8%</p>
            </div>
            <v-progress-linear v-model="valueDeterminate"></v-progress-linear>
            <div class="thumbnail-expired"><v-icon class="mr-1">brightness_1</v-icon> Berakhir dalam 24 hari</div>
            <div class="line--horizontal mt-4 mb-4"></div>
        </div>
        <!------------------------------------------------>
        <div class="thumbnail-container plr-15">
            <div class="thumbnail-image">
                <img src="~/static/welding.jpg"/>
                <div class="thumbnail-image--content d-flex">
                    <nuxt-link to="/welding" class="mb-0 mt-auto">Perusahaan Jasa Reparasi Tangki Migas di Jakarta Selatan <span>NO845/VE/1923</span></nuxt-link>
                </div>
            </div>
            <div class="thumbnail-detail d-flex">
                <div>
                    <div class="thumbnail-detail--title">Jumlah Pinjaman</div>
                    <p>Rp 1.000.000.000</p>
                </div>
                <div class="line--vertical"></div>
                <div class="plr-15">
                    <div class="thumbnail-detail--title">Bunga</div>
                    <p>10%</p>
                </div>
                <div class="line--vertical"></div>
                <div class="plr-15">
                    <div class="thumbnail-detail--title">Grade</div>
                    <p>A+</p>
                </div>
                <div class="line--vertical"></div>
                <div class="plr-15">
                    <div class="thumbnail-detail--title">Tenor</div>
                    <p>3 Bulan</p>
                </div>
            </div>
            <div class="thumbnail-done">Telah terdanai 100% oleh 200 Lender di 26 Jan 2019</div>
            <div class="line--horizontal mt-4 mb-4"></div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
      return {
        valueDeterminate: 56.8
      }
    }
}
</script>
