<template>
    <div class="main">
        <canvas ref="starShip"></canvas>
        <div class="index-container">
            <h1 class="title">Magic Tower</h1>
            <div class="btn-container">
                <button @click="gameStart">游戏开始</button>
                <button @click="gameOver">退出游戏</button>
            </div>
        </div>
    </div>
</template>

<script>
import StarShip from './mixins/starShip'

export default {
  name: 'index',
  mixins: [ StarShip ],
  methods: {
    gameStart () {
      this.$router.push('/interface')
    },
    gameOver () {
      window.close()
    }
  }
}
</script>

<style lang="scss" scoped>
    @import "../../../../static/styles/index";
</style>
