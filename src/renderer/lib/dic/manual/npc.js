const npc = {
  c_01: function() {
    const _this = this
    this.Name = '天使'
    this.description = '菜逼勇者?'
    this.finshed = false
    this.dialogue = function(vm, self) {
      return dialogue(vm, self)
    }
    function* dialogue(vm, self) {
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
              if (self.finshed) {
                _this.end = `我已经没有钥匙给你了`
                vm.next()
              } else {
                self.finshed = true
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
        content: self.end,
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
    this.Name = '小叮当'
    this.description = '百宝库的小叮当！'
    this.dialogue = function(vm) {
      if (vm.$store.state.role.attribute.isSaved_DX) {
        return dialogueOne(vm)
      } else {
        return dialogueTwo(vm)
      }
    }
    function* dialogueOne(vm) {
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
    function* dialogueTwo(vm) {
      yield {
        content: '你好，请问你有看到野比大熊吗？',
        selectList: null,
        next: true
      }
      yield {
        content: '我们在使用时光机的时候出了意外，来到了这里',
        selectList: null,
        next: true
      }
      yield {
        content: '在登陆的出了意外，你能帮我找到他吗？',
        selectList: null,
        next: false
      }
    }
  },
  c_04: function() {
    this.Name = '野比大熊'
    this.description = '小叮当快救我！'
    this.finshed = false
    this.dialogue = function(vm, self) {
      vm.$store.state.role.attribute.isSaved_DX = true
      return dialogue(vm, self)
    }
    function* dialogue(vm, self) {
      yield {
        content: '谢谢你久了我，勇者！',
        selectList: null,
        next: false
      }
    }
  }
}

export default npc
