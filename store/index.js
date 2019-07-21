export const state = () => ({
    nama_perusahaan: '',
    dana_pinjaman: ''
})
  
export const mutations = {
    addDana (state, payload) {
        state.nama_perusahaan = payload.nama_perusahaan;
        state.dana_pinjaman = payload.dana_pinjaman;
    }
}