<template>
  <el-dialog title="操作说明" :visible.sync="show" width="30%" :before-close="close" :modal-append-to-body="false">
    <span>
      <p>按键：← ------ 向左走一个</p>
      <p>按键：→ ------ 向右走一个</p>
      <p>按键：↑ ------ 向上走一个</p>
      <p>按键：↓ ------ 向下走一个</p>
      <p>按键：s ------ 存档</p>
      <p>按键：l ------ 读档</p>
    </span>
  </el-dialog>
</template>

<script>
export default {
  name: 'instruction',
  data() {
    return {
      show: false
    }
  },
  methods: {
    showDialog() {
      this.show = true
    },
    close() {
      this.show = false
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
