<template>
    <div class="data-diri plr-15">
        <div class="d-flex flex-column">
            <video autoplay="true" id="webcamVideo" style="width: 100%"></video>
            <div id="gambar">
                <img src="">
            </div>
            <v-btn v-if="cameraOn" color="#A71E22" class="mt-3 ma-0 d-flex" @click="takeSnapshot">
                <a>Ambil Gambar</a>
            </v-btn>
            <div v-else class="d-flex mt-3">
                <v-btn outline color="#A71E22" class="d-flex ml-0" @click="webCamOn">
                    <a>Foto Ulang</a>
                </v-btn>
                <v-btn color="#A71E22" class="d-flex mr-0" @click="saveImage">
                    <a>OK !</a>
                </v-btn>
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
        investasiList,
        cameraOn: true
      }
    },
    mounted() {
        this.webCamOn()

        this.$once('hook:destroyed', () => {
            this.webCamOff()
        })
    },
    methods:{
        handleVideo(stream){
            const video = document.getElementById('webcamVideo')
            video.srcObject = stream
        },
        videoError(e){
            alert("Izinkan menggunakan webcam untuk foto KTP")
        },
        webCamOn(){
            this.cameraOn = true

            document.getElementById('webcamVideo').style.display = 'flex'
            document.getElementById('gambar').style.display = 'none'

            const video = document.getElementById('webcamVideo')

            navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia
            
            if(navigator.getUserMedia){
                navigator.getUserMedia({video: true}, this.handleVideo, this.videoError)
            }
        },
        webCamOff(stream){
            const video = document.getElementById('webcamVideo')
            video.pause();
            video.src  = "";
            video.srcObject.getTracks()[0].stop();
            console.log("Webcam off");
        },
        takeSnapshot(){
            const video = document.getElementById('webcamVideo')
            const gambar = document.getElementById('gambar')
            let img = gambar.children[0]
            let canvas = document.createElement('canvas')

            let context

            let width = video.offsetWidth,
                height = video.offsetHeight

            canvas.width = width
            canvas.height = height

            context = canvas.getContext('2d')
            context.drawImage(video, 0, 0, width, height)

            img.src = canvas.toDataURL('image/jpg');

            video.style.display = 'none'
            gambar.style.display = 'flex'

            this.webCamOff()
            this.cameraOn = false
        },
        saveImage(){
            const img = document.getElementById('gambar').children[0].src
            
            if(this.$store.state.ktp){
                this.$store.commit('addSelfieKTP', img)
            }else{
                this.$store.commit('addKTP', img)
            }

            this.$router.push({path: '/data-investor/ktp'})
        }
    }
}
</script>