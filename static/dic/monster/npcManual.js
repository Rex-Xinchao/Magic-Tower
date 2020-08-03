const npcManual = {
  '01': function() {
    this.Name = '消耗品商人'
    this.description = '你要看一下我的大宝贝吗?'
    this.dialogue = function(vm) {
      return dialogue(vm)
    }
    function* dialogue(vm) {
      yield {
        content: '欢迎冒险家，你要买些什么吗？',
        selectList: null,
        next: true
      }
      yield {
        content: null,
        selectList: [
          {
            select: '生命药水(小)：50金币',
            effect: () => {
              if (vm.$store.state.role.item.Money >= 50) {
                vm.$store.commit('setMoney', '-50')
                vm.$store.commit('getTool', 'HealingPotion_Small')
              } else {
                console.info('金币不足')
              }
            }
          },
          {
            select: '生命药水(中)：100金币',
            effect: () => {
              if (vm.$store.state.role.item.Money >= 100) {
                vm.$store.commit('setMoney', '-100')
                vm.$store.commit('getTool', 'HealingPotion_Mid')
              } else {
                console.info('金币不足')
              }
            }
          },
          {
            select: '直接离开',
            effect: () => {
              vm.close()
            }
          }
        ],
        next: false
      }
    }
  },
  '02': function() {
    const _this = this
    this.Name = '战死的冒险者'
    this.description = '好惨，只剩下一堆白骨'
    this.finshed = false
    this.end = '获得了破败的断剑'
    this.dialogue = function(vm) {
      return dialogue(vm)
    }

    function* dialogue(vm) {
      yield {
        content: '前辈的遗骸，似乎可以搜出些什么东西。',
        selectList: null,
        next: true
      }
      yield {
        content: null,
        selectList: [
          {
            select: '搜尸体',
            effect: () => {
              if (!_this.finshed) {
                vm.$store.commit('getEquipment', 'brokenSword')
              }
              vm.next()
              _this.finshed = true
              _this.end = '没有任何有用的东西了！'
            }
          },
          {
            select: '直接离开',
            effect: () => {
              vm.close()
            }
          }
        ],
        next: false
      }
      yield {
        content: _this.end,
        selectList: null,
        next: false
      }
    }
  }
}

export default npcManual
