const toolManual = {
  RedKey: {
    Id: 'RedKey',
    Name: '红钥匙',
    Type: 'tool',
    Instruction: '红色的钥匙',
    EffectDescription: '可以打开红门',
    effect: (vm) => {
      vm.$store.commit('setRedKey', 1)
    }
  },
  GreenKey: {
    Id: 'GreenKey',
    Name: '绿钥匙',
    Type: 'tool',
    Instruction: '绿色的钥匙',
    EffectDescription: '可以打开绿门',
    effect: (vm) => {
      vm.$store.commit('setGreenKey', 1)
    }
  },
  BlueKey: {
    Id: 'BlueKey',
    Name: '蓝钥匙',
    Type: 'tool',
    Instruction: '蓝色的钥匙',
    EffectDescription: '可以打开蓝门',
    effect: (vm) => {
      vm.$store.commit('setBlueKey', 1)
    }
  },
  HealingPotion_Small: {
    Id: 'HealingPotion_Small',
    Name: '生命药水（小）',
    Type: 'tool',
    Instruction: '提升体质的药剂',
    EffectDescription: '增加少量生命上限',
    effect: (vm) => {
      vm.$store.commit('addHealth', 50)
    }
  },
  HealingPotion_Mid: {
    Id: 'HealingPotion_Mid',
    Name: '生命药水（中）',
    Type: 'tool',
    Instruction: '提升体质的药剂',
    EffectDescription: '增加中等生命上限',
    effect: (vm) => {
      vm.$store.commit('addHealth', 100)
    }
  }
}

export default toolManual
