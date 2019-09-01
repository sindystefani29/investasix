<template>
    <div class="dana">
        {{now}}
        <br/>
        {{timer}}
        <br />
        {{minutes}}:{{seconds}}
    </div>
</template>

<script>
export default {
    data () {
      return {
        timer: '',
        now: '',
        minutes: '',
        seconds: ''
      }
    },
    mounted(){
        const momentTime = this.$moment()
        const moment = this.$moment
        
        const currentTime = momentTime.unix()
        const eventTime = momentTime.add(2, 'minutes').add(30, 'seconds').unix()
        let diffTime = eventTime - currentTime
        let duration = moment.duration(diffTime * 1000, 'milliseconds')
        
        const interval = 1000

        let timerId = setInterval(() => {
            if(diffTime > 0){
                duration = moment.duration(duration.asMilliseconds() - interval, 'milliseconds')
                let m = moment.duration(duration).minutes()
                let s = moment.duration(duration).seconds()

                if(m < 10){
                    m = '0' + m
                }

                if(s < 10){
                    m = '0' + m
                }

                this.minutes = m
                this.seconds = s
            }
        }, interval);

        setTimeout(() => {
            clearInterval(timerId)
            alert('stop Interval')
        }, 15000)
    }
}
</script>