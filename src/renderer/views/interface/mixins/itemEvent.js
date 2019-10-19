const itemEvent = {
  methods: {
    get (item) {
      if (item.Type === 'tool') {
        this.$store.commit('getTool', item.Id)
      } else {
        this.$store.commit('getEquipment', item.Id)
      }
    },
    del (item) {
      if (item.Type === 'tool') {
        this.$store.commit('delTool', item.Id)
      } else {
        this.$store.commit('delEquipment', item.Id)
      }
    },
    use (item) {
      item.effect(this)
      this.del(item)
    },
    equip (item) {
      this.$store.commit('equip', item.Id)
    },
    drop (item) {
      this.$store.commit('drop', item.Id)
    }
  }
}

export default itemEvent
