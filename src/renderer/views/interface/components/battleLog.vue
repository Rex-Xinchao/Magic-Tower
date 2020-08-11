<template>
  <el-dialog title="战斗情况" :visible.sync="show" width="60%" :before-close="close" :modal-append-to-body="false">
    <span>
      <div class="battle-log-container">
        <p v-for="(item, index) in log" :key="index">{{ item }}</p>
      </div>
    </span>
  </el-dialog>
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
.battle-log-container {
  width: 100%;
  height: auto;
  font-size: 14px;
  line-height: 18px;
  white-space: normal;
  margin-top: 12px;

  p {
    -webkit-margin-before: 0.2em;
    -webkit-margin-after: 0.2em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
  }
}
</style>