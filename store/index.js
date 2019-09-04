export const state = () => ({
    nama_perusahaan: '',
    dana_pinjaman: '',
    username: '',
    status: '',
    ktp: '',
    selfieKTP: '',
    noKTP: ''
})
  
export const mutations = {
    addDana (state, payload) {
        state.nama_perusahaan = payload.nama_perusahaan;
        state.dana_pinjaman = payload.dana_pinjaman;
    },
    addUser (state, payload) {
        state.username = payload.username;
        state.status = payload.status;
    },
    addKTP (state, payload) {
        state.ktp = payload
    },
    addSelfieKTP (state, payload) {
        state.selfieKTP = payload
    },
    addNoKTP (state, payload) {
        state.noKTP = payload
    }
}