export const state = () => ({
    nama_perusahaan: '',
    dana_pinjaman: '',
    user: {
        
    }
})
  
export const mutations = {
    addDana (state, payload) {
        state.nama_perusahaan = payload.nama_perusahaan;
        state.dana_pinjaman = payload.dana_pinjaman;
    },
    addUser (state, payload) {
        
    }
}