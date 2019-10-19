const toolManual = {
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
