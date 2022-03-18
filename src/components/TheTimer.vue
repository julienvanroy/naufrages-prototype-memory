<template>
  <div class="timer">
    <span>{{ prettify }}</span>
    <div v-if="debug">
      <button v-if="!isRunning" @click="start" id="start">Start</button>
      <button v-if="isRunning" @click="stop" id="stop">Stop</button>
      <button @click="reset" id="reset">Reset</button>
    </div>
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
  computed: {
    prettify() {
      const value = this.time
      let minutes = Math.floor(value / 60);
      let seconds = value % 60;
      if (minutes < 10) {
        minutes = "0"+minutes
      }
      if (seconds < 10) {
        seconds = `0${seconds}`
      }
      return `${minutes}:${seconds}`
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

<style lang="scss" scoped>
.timer {
  > div {
    display: flex;

    > button {
      border: none;
      padding: 0.25rem 0.5rem;
      font-weight: bold;
      transition:  0.1s ease;

      &:hover {
        opacity: 0.9;
      }

      &:active {
        transform: scale(0.9);
      }

      &#start {
        background: $green-color;
        color: $white-color;
      }

      &#stop {
        background: $red-color;
        color: $white-color;
      }

      &:first-child {
        border-radius: 2rem 0 0 2rem;
      }

      &:last-child {
        border-radius: 0 2rem 2rem 0;
      }
    }
  }
}
</style>
