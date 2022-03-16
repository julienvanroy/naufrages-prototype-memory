<template>
  <div class="timer">{{ time }}</div>
  <div v-if="debug">
    <button v-if="!isRunning" @click="start">Start</button>
    <button v-if="isRunning" @click="stop">Stop</button>
    <button @click="reset">Reset</button>
  </div>
</template>

<script>
import {ref, watch} from "vue";

export default {
  name: "TheTimer",
  data() {
    return {
      isRunning: false,
      timer: null,
    }
  },
  setup(props) {
    const time = ref(0)

    const setTimeWithDuration = () => {
      time.value = props.duration
    }

    watch(() => props.duration, () => {
      setTimeWithDuration()
    });

    return {
      time,
      setTimeWithDuration
    }
  },
  mounted() {
    this.setTimeWithDuration()
  },
  methods: {
    start () {
      this.isRunning = true
      if (!this.timer) {
        this.timer = setInterval( () => {
          if (this.time > 0) {
            this.time--
          } else {
            clearInterval(this.timer)
            this.reset()
          }
        }, 1000 )
      }
    },
    stop () {
      this.isRunning = false
      clearInterval(this.timer)
      this.timer = null
    },
    reset () {
      this.stop()
      this.setTimeWithDuration()
    },
  },
  props: {
    duration: {
      type: Number,
      required: true
    },
    debug: {
      type: Boolean,
      default: process.env.NODE_ENV !== 'production'
    }
  },
}
</script>
