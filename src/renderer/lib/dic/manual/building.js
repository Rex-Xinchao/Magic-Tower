const building = {
  b_00: function() {
    this.id = 0
    this.name = '地面'
    this.image = ''
    this.class = 'ground'
  },
  b_01: function() {
    this.id = 1
    this.name = '墙'
    this.image = ''
    this.class = 'wall'
  },
  b_02: function() {
    this.id = 2
    this.name = '河流'
    this.image = ''
    this.class = 'river'
  },
  b_03: function() {
    this.id = 3
    this.name = '雕像'
    this.image = ''
    this.class = 'statue'
  },
  b_11: function() {
    this.id = 11
    this.name = '红门'
    this.image = ''
    this.opened = false
    this.class = 'redDoor'
    this.func = (item, self) => {
      if (self.opened) {
        return true
      } else if (item.RedKey > 0) {
        item.RedKey--
        self.opened = true
        return true
      } else {
        return false
      }
    }
  },
  b_12: function() {
    this.id = 12
    this.name = '绿门'
    this.image = ''
    this.opened = false
    this.class = 'greenDoor'
    this.func = (item, self) => {
      if (self.opened) {
        return true
      } else if (item.GreenKey > 0) {
        item.GreenKey--
        self.opened = true
        return true
      } else {
        return false
      }
    }
  },
  b_13: function() {
    this.id = 13
    this.name = '蓝门'
    this.image = ''
    this.opened = false
    this.class = 'blueDoor'
    this.func = (item, self) => {
      if (self.opened) {
        return true
      } else if (item.BlueKey > 0) {
        item.BlueKey--
        self.opened = true
        return true
      } else {
        return false
      }
    }
  },
  b_14: function() {
    this.id = 14
    this.name = '楼梯(下)'
    this.image = ''
    this.class = 'stairway_down'
    this.func = (item, self, vm) => {
      vm.$store.commit('nextFlour', {
        mapList: vm.mapList,
        rolePosition: vm.rolePosition
      })
    }
  },
  b_15: function() {
    this.id = 15
    this.name = '楼梯(上)'
    this.image = ''
    this.class = 'stairway_up'
    this.func = (item, self, vm) => {
      vm.$store.commit('lastFlour', {
        mapList: vm.mapList,
        rolePosition: vm.rolePosition
      })
    }
  }
}

export default building