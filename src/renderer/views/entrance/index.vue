<template>
  <div class="main">
    <canvas ref="starShip"></canvas>
    <div class="index-container">
      <h1 class="title">Magic Tower</h1>
      <div class="btn-container">
        <button @click="gameStart">游戏开始</button>
        <button @click="fullscreen">{{ isFullScreen ? '退出全屏' : '全屏' }}</button>
        <button @click="gameOver">退出游戏</button>
      </div>
    </div>
    <Instruction ref="instruction"></Instruction>
  </div>
</template>

<script>
import StarShip from './mixins/starShip'
import Instruction from './components/instruction'

const { ipcRenderer } = require('electron')

export default {
  name: 'index',
  data() {
    return {
      isFullScreen: false
    }
  },
  mixins: [StarShip],
  components: { Instruction },
  methods: {
    gameStart() {
      this.$router.push('/interface')
    },
    gameOver() {
      ipcRenderer.send('close')
    },
    fullscreen() {
      if (this.isFullScreen) {
        ipcRenderer.send('exitFullScreen')
      } else {
        ipcRenderer.send('fullScreen')
      }
      this.isFullScreen = !this.isFullScreen
    },
    checkAndStart() {
      ipcRenderer.send('checkForUpdate')
      ipcRenderer.on('message', (event, text) => {
        console.log(text)
      })
      ipcRenderer.on('downloadProgress', (event, progressObj) => {
        console.log(progressObj)
        this.downloadPercent = progressObj.percent || 0
      })
      ipcRenderer.on('isUpdateNow', () => {
        ipcRenderer.send('isUpdateNow')
      })
    },
    fileTest() {
      this.Utils.setJson('name', 'RexSun', function(e) {
        console.log(e)
      })
      this.Utils.getJson('name', function(e) {
        console.log(e)
      })
      this.Utils.writeFile('new.txt', { name: '123' })
      this.Utils.readFile('old.txt')
    }
  },
  mounted() {
    this.checkAndStart()
    this.$refs.instruction.showDialog()
  }
}
</script>

<style lang="scss" scoped>
@import '@style/index';
</style>
