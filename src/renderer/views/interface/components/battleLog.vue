<template>
  <div class="dialogue" v-if="show">
    <i class="close-icon" @click="close">x</i>
    <div class="battle-log-container">
      <p v-for="(item, index) in log" :key="index">{{ item }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'battleLog',
  data() {
    return {
      show: false,
      npcName: null,
      log: []
    }
  },
  methods: {
    showDialog(log) {
      this.show = true
      this.log = log
    },
    close() {
      this.show = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@style/coms/dialogue';
</style>
