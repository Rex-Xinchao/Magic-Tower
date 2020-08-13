<template>
  <el-dialog :title="npcName" :visible.sync="show" width="60%" :before-close="close" :modal-append-to-body="false">
    <span>
      <div class="content">{{ detail.content }}</div>
      <div class="select-list" v-for="(item, index) in detail.selectList">
        <div class="select" @click="select(item.effect)">{{ item.select }}</div>
      </div>
    </span>
    <span slot="footer" class="dialog-footer">
      <div class="next-step" v-if="detail.next" @click="next">下一步</div>
    </span>
  </el-dialog>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'dialogue',
  data() {
    return {
      show: false,
      npcName: null,
      detail: {}
    }
  },
  computed: {
    ...mapGetters([])
  },
  methods: {
    showDialog(npc) {
      this.show = true
      this.event = npc.dialogue(this, npc)
      this.npcName = npc.Name
      this.next()
    },
    close() {
      this.content = ''
      this.selectList = []
      this.show = false
    },
    next() {
      let value = this.event.next().value
      if (!value) return
      this.detail = value
    },
    select(effect) {
      const func = effect.bind(this)
      func()
    }
  }
}
</script>
<style lang="scss" scoped>
.name {
  width: 100%;
  height: auto;
  line-height: 24px;
  font-size: 24px;
  font-weight: bold;
}

.content {
  width: 100%;
  height: auto;
  font-size: 14px;
  line-height: 18px;
  white-space: normal;
  margin-top: 12px;
}

.select-list {
  width: 100%;
  text-align: center;
  margin: 0 0 10px 0;
  .select {
    width: 60%;
    margin: 0 auto;
    padding: 6px 20px;
    border: 1px solid black;
    cursor: pointer;
    border-radius: 6px;
  }
}

.next-step {
  position: absolute;
  right: 10px;
  bottom: 10px;
  width: 60px;
  height: 24px;
  line-height: 24px;
  cursor: pointer;
  background-color: #409eff;
  text-align: center;
  border-radius: 4px;
  color: white;
}
</style>
