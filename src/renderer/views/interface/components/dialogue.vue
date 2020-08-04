<template>
  <div class="dialogue" v-if="show">
    <i class="close-icon" @click="close">x</i>
    <div class="name">{{ npcName }}</div>
    <div class="content">{{ detail.content }}</div>
    <div class="select-list" v-for="(item, index) in detail.selectList">
      <div class="select" @click="select(item.effect)">{{ item.select }}</div>
    </div>
    <div class="next-step" v-if="detail.next" @click="next">下一步</div>
  </div>
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
      this.event = npc.dialogue(this)
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
@import '@style/coms/dialogue';
</style>
