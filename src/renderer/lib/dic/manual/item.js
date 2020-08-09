const item = {
  i_01: function() {
    this.Id = 'i_01'
    this.class = 'redKey'
    this.Name = '红钥匙'
    this.Type = 'tool'
    this.Instruction = '红色的钥匙'
    this.EffectDescription = '可以打开红门'
    this.IsExist = true
    this.effect = (vm, self) => {
      self.IsExist = false
      vm.$store.commit('setRedKey', 1)
    }
  },
  i_02: function() {
    this.Id = 'i_02'
    this.class = 'greenKey'
    this.Name = '绿钥匙'
    this.Type = 'tool'
    this.Instruction = '绿色的钥匙'
    this.EffectDescription = '可以打开绿门'
    this.IsExist = true
    this.effect = (vm, self) => {
      self.IsExist = false
      vm.$store.commit('setGreenKey', 1)
    }
  },
  i_03: function() {
    this.Id = 'i_03'
    this.class = 'blueKey'
    this.Name = '蓝钥匙'
    this.Type = 'tool'
    this.Instruction = '蓝色的钥匙'
    this.EffectDescription = '可以打开蓝门'
    this.IsExist = true
    this.effect = (vm, self) => {
      self.IsExist = false
      vm.$store.commit('setBlueKey', 1)
    }
  },
  i_04: function() {
    this.Id = 'i_04'
    this.Name = '生命药水（小）'
    this.Type = 'tool'
    this.Instruction = '提升体质的药剂'
    this.EffectDescription = '增加少量生命上限'
    this.IsExist = true
    this.effect = (vm, self) => {
      self.IsExist = false
      vm.$store.commit('addHealth', 50)
    }
  },
  i_05: function() {
    this.Id = 'i_05'
    this.Name = '生命药水（中）'
    this.Type = 'tool'
    this.Instruction = '提升体质的药剂'
    this.EffectDescription = '增加中等生命上限'
    this.IsExist = true
    this.effect = (vm, self) => {
      self.IsExist = false
      vm.$store.commit('addHealth', 100)
    }
  },
  i_06: function() {
    this.Id = 'i_06'
    this.Name = '怪物图鉴-残'
    this.Type = 'tool'
    this.Instruction = '收录了一部分怪物信息的图鉴'
    this.EffectDescription = '可以查看怪物属性'
    this.IsExist = true
    this.effect = (vm, self) => {
      self.IsExist = false
      vm.$store.commit('setMonsterManual', 1)
    }
  },
  e_01: function() {
    this.Id = 'e_01'
    this.Name = '木刀-洞爷湖'
    this.Type = 'arms'
    this.Attack = 1
    this.Defense = 0
    this.MagicAttack = 0
    this.MagicDefense = 0
    this.Dexterous = 0
    this.Priority = 1
    this.EquipEffect = 'AppendHarm'
    this.Instruction = '一把破烂的武器，有极小几率追加5点伤害'
    this.EffectDescription = '追加5点伤害'
    this.effect = (physicsHarm, magicHarm, luck = 0) => {
      let probability = Math.floor(Math.random() * (1000 - luck))
      console.log(probability)
      if (probability === 1) {
        return {
          addHarm: 5,
          effect: true
        }
      } else {
        return {
          addHarm: 0,
          effect: false
        }
      }
    }
  },
  e_02: function() {
    this.Id = 'e_02'
    this.Name = '毒药'
    this.Type = 'arms'
    this.Attack = 1
    this.Defense = 0
    this.MagicAttack = 0
    this.MagicDefense = 0
    this.Dexterous = 0
    this.Priority = 1
    this.EquipEffect = 'AppendHarm'
    this.Instruction = '1'
    this.EffectDescription = '追加1点伤害'
    this.effect = (physicsHarm, magicHarm, luck = 0) => {
      let probability = Math.floor(Math.random() * (1000 - luck))
      if (probability === 1) {
        return {
          addHarm: 1,
          effect: true
        }
      } else {
        return {
          addHarm: 0,
          effect: false
        }
      }
    }
  }
}

export default item
