<template>
    <div class="data-diri plr-15">
        <div class="d-flex flex-column">
            <video autoplay="true" id="webcamVideo" style="width: 100%"></video>
            <div id="gambar"></div>
            <v-btn v-if="cameraOn" color="#A71E22" class="mt-3 ma-0 d-flex" @click="takeSnapshot">
                <a>Ambil Gambar</a>
            </v-btn>
            <div v-else class="d-flex mt-3">
                <v-btn color="#A71E22" class="d-flex" @click="takeSnapshot">
                    <a>OK!</a>
                </v-btn>
                <v-btn outline color="#A71E22" class="d-flex" @click="takeSnapshot">
                    <a>Foto Ulang</a>
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
        const video = document.getElementById('webcamVideo')

        navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia
        
        if(navigator.getUserMedia){
            navigator.getUserMedia({video: true}, this.handleVideo, this.videoError)
        }
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
        webCamOff(stream){
            const video = document.getElementById('webcamVideo')
            video.pause();
            video.src  = "";
            video.srcObject.getTracks()[0].stop();
            console.log("Webcam off");
        },
        takeSnapshot(){
            const video = document.getElementById('webcamVideo')
            let img = document.createElement('img')
            let canvas = document.createElement('canvas')

            let context

            let width = video.offsetWidth,
                height = video.offsetHeight

            canvas.width = width
            canvas.height = height

            context = canvas.getContext('2d')
            context.drawImage(video, 0, 0, width, height)

            img.src = canvas.toDataURL('image/jpg');

            document.getElementById('webcamVideo').style.display = 'none'
            document.getElementById('gambar').appendChild(img)

            this.webCamOff()
            this.cameraOn = false
        }
    }
}
</script>