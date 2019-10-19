const equipmentManual = {
  brokenSword: {
    Id: 'brokenSword',
    Name: '破烂的剑',
    Type: 'arms',
    Attack: 1,
    Defense: 0,
    MagicAttack: 0,
    MagicDefense: 0,
    Dexterous: 0,
    Priority: 1,
    EquipEffect: 'AppendHarm',
    Instruction: '一把破烂的武器，有极小几率追加5点伤害',
    EffectDescription: '追加5点伤害',
    effect: (physicsHarm, magicHarm, luck = 0) => {
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
  stone: {
    Id: 'stone',
    Name: '石头',
    Type: 'arms',
    Attack: 1,
    Defense: 0,
    MagicAttack: 0,
    MagicDefense: 0,
    Dexterous: 0,
    Priority: 1,
    EquipEffect: 'AppendHarm',
    Instruction: '1',
    EffectDescription: '追加1点伤害',
    effect: (physicsHarm, magicHarm, luck = 0) => {
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

export default equipmentManual
