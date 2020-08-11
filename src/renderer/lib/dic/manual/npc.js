const npc = {
  c_01: function() {
    const _this = this
    this.Name = '天使'
    this.description = '菜逼勇者?'
    this.finshed = false
    this.dialogue = function(vm) {
      return dialogue(vm)
    }
    function* dialogue(vm) {
      yield {
        content: '你醒了，勇者？',
        selectList: null,
        next: true
      }
      yield {
        content: '公主还在塔里，快去营救她吧！',
        selectList: null,
        next: true
      }
      yield {
        content: '我这里有三把钥匙，你先拿去，要珍惜使用。',
        selectList: null,
        next: true
      }
      yield {
        content: null,
        selectList: [
          {
            select: '收下钥匙',
            effect: () => {
              if (_this.finshed) {
                _this.end = `我已经没有钥匙给你了`
                vm.next()
              } else {
                _this.finshed = true
                vm.$store.dispatch('setRedKey', 1)
                vm.$store.dispatch('setBlueKey', 1)
                vm.$store.dispatch('setGreenKey', 1)
                vm.close()
              }
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
  },
  c_02: function() {
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
  },
  c_03: function() {
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
            select: '增加800生命：25金币',
            effect: () => {
              if (vm.$store.state.role.item.Money >= 25) {
                vm.$store.commit('setMoney', '-25')
                vm.$store.dispatch('setHealth', 800)
              } else {
                console.info('金币不足')
              }
            }
          },
          {
            select: '增加4点攻击：25金币',
            effect: () => {
              if (vm.$store.state.role.item.Money >= 25) {
                vm.$store.commit('setMoney', '-25')
                vm.$store.dispatch('setAttack', 4)
              } else {
                console.info('金币不足')
              }
            }
          },
          {
            select: '增加4点防御：25金币',
            effect: () => {
              if (vm.$store.state.role.item.Money >= 25) {
                vm.$store.commit('setMoney', '-25')
                vm.$store.dispatch('setDefense', 4)
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
  }
}

export default npc
