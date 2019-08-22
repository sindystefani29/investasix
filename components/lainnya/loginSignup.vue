<template>
    <div class="dana">
        <div class="bg--red d-flex">
            <p class="mt-3 mb-3"><strong>Masuk / Daftar untuk memberikan pinjaman</strong></p>
            <div class="d-flex align-stretch mb-3">
                <v-btn outline color="#fff" class="flex-1">
                  <nuxt-link :to="{path: `/daftar-baru`}">Daftar</nuxt-link>
                </v-btn>
                <v-btn color="#F3E249" class="flex-1">
                  <nuxt-link :to="{path: `/dana/tambah-dana`}">Masuk</nuxt-link>
                </v-btn>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    //empty
}
</script>