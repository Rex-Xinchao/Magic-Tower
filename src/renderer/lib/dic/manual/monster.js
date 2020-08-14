const monster = {
  m_01: function() {
    this.Name = '史莱姆(蓝)'
    this.manualNumber = 1
    this.Health = 50
    this.Attack = 20
    this.Defense = 1
    this.MagicAttack = 0
    this.MagicDefense = 1
    this.Dexterous = 0
    this.Luck = 0
    this.Experience = 2
    this.Money = 1
    this.isDead = false
  },
  m_02: function() {
    this.Name = '史莱姆(绿)'
    this.manualNumber = 1
    this.Health = 70
    this.Attack = 15
    this.Defense = 2
    this.MagicAttack = 0
    this.MagicDefense = 1
    this.Dexterous = 0
    this.Luck = 0
    this.Money = 1
    this.Experience = 2
    this.isDead = false
  },
  m_03: function() {
    this.Name = '史莱姆(红)'
    this.manualNumber = 1
    this.Health = 200
    this.Attack = 35
    this.Defense = 10
    this.MagicAttack = 0
    this.MagicDefense = 2
    this.Dexterous = 0
    this.Luck = 0
    this.Money = 4
    this.Experience = 8
    this.isDead = false
  },
  m_04: function() {
    this.Name = '史莱姆(黑)'
    this.manualNumber = 1
    this.Health = 350
    this.Attack = 50
    this.Defense = 20
    this.MagicAttack = 0
    this.MagicDefense = 4
    this.Dexterous = 0
    this.Luck = 0
    this.Money = 7
    this.Experience = 11
    this.isDead = false
  },
  m_05: function() {
    this.Name = '史莱姆(精英)'
    // 特殊效果 恢复
    // 回合结束恢复1点生命
    this.manualNumber = 1
    this.Health = 800
    this.Attack = 90
    this.Defense = 60
    this.MagicAttack = 0
    this.MagicDefense = 15
    this.Dexterous = 0
    this.Luck = 0
    this.Money = 50
    this.Experience = 40
    this.isDead = false
    this.skillType = 'afterBattle'
    this.skill = (hero, monster) => {
      if (monster.Health <= 0) return `${monster.Name}特殊技能发动失败`
      const effectType = 'Health'
      const effectNum = 8
      const effectLog = `${monster.Name}特殊技能生效，恢复了${effectNum}点生命`
      monster[effectType] += effectNum
      return effectLog
    }
  },
  m_06: function() {
    this.Name = '小蝙蝠'
    this.manualNumber = 1
    this.Health = 100
    this.Attack = 20
    this.Defense = 5
    this.MagicAttack = 0
    this.MagicDefense = 5
    this.Dexterous = 0
    this.Luck = 0
    this.Money = 2
    this.Experience = 4
    this.isDead = false
  },
  m_07: function() {
    this.Name = '大蝙蝠'
    this.manualNumber = 1
    this.Health = 150
    this.Attack = 35
    this.Defense = 28
    this.MagicAttack = 0
    this.MagicDefense = 15
    this.Dexterous = 0
    this.Luck = 0
    this.Money = 8
    this.Experience = 16
    this.isDead = false
  },
  m_08: function() {
    this.Name = '红蝙蝠'
    this.manualNumber = 1
    this.Health = 260
    this.Attack = 120
    this.Defense = 40
    this.MagicAttack = 0
    this.MagicDefense = 20
    this.Dexterous = 0
    this.Luck = 0
    this.Money = 12
    this.Experience = 22
    this.isDead = false
  },
  m_09: function() {
    this.Name = '黑蝙蝠'
    this.manualNumber = 1
    this.Health = 550
    this.Attack = 170
    this.Defense = 100
    this.MagicAttack = 0
    this.MagicDefense = 50
    this.Dexterous = 0
    this.Luck = 0
    this.Money = 20
    this.Experience = 28
    this.isDead = false
  },
  m_10: function() {
    this.Name = '蝙蝠(精英)'
    // 特殊效果 吸血
  },
  m_11: function() {
    this.Name = '骷髅小兵'
    this.manualNumber = 1
    this.Health = 110
    this.Attack = 25
    this.Defense = 5
    this.MagicAttack = 0
    this.MagicDefense = 0
    this.Dexterous = 0
    this.Luck = 0
    this.Money = 4
    this.Experience = 9
    this.isDead = false
  },
  m_12: function() {
    this.Name = '骷髅士兵'
    this.manualNumber = 1
    this.Health = 150
    this.Attack = 33
    this.Defense = 18
    this.MagicAttack = 0
    this.MagicDefense = 0
    this.Dexterous = 0
    this.Luck = 0
    this.Money = 9
    this.Experience = 18
    this.isDead = false
  },
  m_13: function() {
    this.Name = '持盾骷髅'
    this.manualNumber = 1
    this.Health = 400
    this.Attack = 90
    this.Defense = 50
    this.MagicAttack = 0
    this.MagicDefense = 10
    this.Dexterous = 0
    this.Luck = 0
    this.Money = 14
    this.Experience = 20
    this.isDead = false
  },
  m_14: function() {
    this.Name = '骷髅队长'
    this.manualNumber = 1
  },
  m_15: function() {
    this.Name = '骷髅(精英)'
    // 特殊效果 重生
  },
  m_16: function() {
    this.Name = '初级法师'
    this.manualNumber = 1
    this.Health = 125
    this.Attack = 0
    this.Defense = 10
    this.MagicAttack = 50
    this.MagicDefense = 25
    this.Dexterous = 0
    this.Luck = 0
    this.Money = 15
    this.Experience = 24
    this.isDead = false
  },
  m_17: function() {
    this.Name = '高级法师'
    this.manualNumber = 1
    this.Health = 100
    this.Attack = 0
    this.Defense = 35
    this.MagicAttack = 120
    this.MagicDefense = 110
    this.Dexterous = 0
    this.Luck = 0
    this.Money = 20
    this.Experience = 28
    this.isDead = false
  },
  m_21: function() {
    this.Name = '兽面人(蓝)'
    this.manualNumber = 1
    this.Health = 300
    this.Attack = 75
    this.Defense = 45
    this.MagicAttack = 0
    this.MagicDefense = 35
    this.Dexterous = 0
    this.Luck = 0
    this.Money = 15
    this.Experience = 15
    this.isDead = false
  },
  m_22: function() {
    this.Name = '兽面人(绿)'
    this.manualNumber = 1
    this.Health = 500
    this.Attack = 115
    this.Defense = 65
    this.MagicAttack = 0
    this.MagicDefense = 55
    this.Dexterous = 0
    this.Luck = 0
    this.Money = 20
    this.Experience = 20
    this.isDead = false
  },
  m_23: function() {
    this.Name = '兽面人(红)'
    this.manualNumber = 1
    this.Health = 700
    this.Attack = 250
    this.Defense = 125
    this.MagicAttack = 0
    this.MagicDefense = 100
    this.Dexterous = 0
    this.Luck = 0
    this.Money = 32
    this.Experience = 25
    this.isDead = false
  },
  m_24: function() {
    this.Name = '兽面武士'
    this.manualNumber = 1
    this.Health = 900
    this.Attack = 450
    this.Defense = 300
    this.MagicAttack = 0
    this.MagicDefense = 200
    this.Dexterous = 0
    this.Luck = 0
    this.Money = 50
    this.Experience = 40
    this.isDead = false
  },
  m_25: function() {
    this.Name = '兽面武士(精英)'
  },
  m_26: function() {
    this.Name = '初级卫兵'
    this.manualNumber = 1
    this.Health = 450
    this.Attack = 150
    this.Defense = 90
    this.MagicAttack = 0
    this.MagicDefense = 0
    this.Dexterous = 0
    this.Luck = 0
    this.Money = 22
    this.Experience = 19
    this.isDead = false
  },
  m_27: function() {
    this.Name = '中级卫兵'
    this.manualNumber = 1
    this.Health = 850
    this.Attack = 350
    this.Defense = 200
    this.MagicAttack = 0
    this.MagicDefense = 0
    this.Dexterous = 0
    this.Luck = 0
    this.Money = 45
    this.Experience = 35
    this.isDead = false
  },
  m_28: function() {
    this.Name = '高级卫兵'
    this.manualNumber = 1
    this.Health = 1500
    this.Attack = 560
    this.Defense = 460
    this.MagicAttack = 0
    this.MagicDefense = 0
    this.Dexterous = 0
    this.Luck = 0
    this.Money = 60
    this.Experience = 50
    this.isDead = false
  },
  m_29: function() {
    this.Name = '卫兵长'
    this.Health = 2000
    this.Attack = 680
    this.Defense = 590
    this.MagicAttack = 0
    this.MagicDefense = 0
    this.Dexterous = 0
    this.Luck = 0
    this.Money = 70
    this.Experience = 55
    this.isDead = false
  },
  m_30: function() {
    this.Name = '卫兵首领(精英)'
    // 特殊技能 百分比免伤
  },
  m_31: function() {
    this.Name = '石像守卫'
    this.manualNumber = 1
    this.Health = 500
    this.Attack = 70
    this.Defense = 100
    this.MagicAttack = 0
    this.MagicDefense = 0
    this.Dexterous = 0
    this.Luck = 0
    this.Money = 10
    this.Experience = 18
    this.isDead = false
  },
  m_32: function() {
    this.Name = '石像法师'
    this.manualNumber = 1
    this.Health = 300
    this.Attack = 10
    this.Defense = 100
    this.MagicAttack = 95
    this.MagicDefense = 0
    this.Dexterous = 0
    this.Luck = 0
    this.Money = 12
    this.Experience = 22
    this.isDead = false
  },
  m_36: function() {
    this.Name = '蓝武士'
    this.Health = 1200
    this.Attack = 980
    this.Defense = 900
    this.MagicAttack = 0
    this.MagicDefense = 0
    this.Dexterous = 0
    this.Luck = 0
    this.Money = 88
    this.Experience = 75
    this.isDead = false
  },
  m_37: function() {
    this.Name = '绿武士'
    this.Health = 2500
    this.Attack = 900
    this.Defense = 850
    this.MagicAttack = 0
    this.MagicDefense = 0
    this.Dexterous = 0
    this.Luck = 0
    this.Money = 84
    this.Experience = 70
    this.isDead = false
  },
  m_41: function() {
    this.Name = '冥卫兵'
    this.Health = 1250
    this.Attack = 500
    this.Defense = 400
    this.MagicAttack = 0
    this.MagicDefense = 0
    this.Dexterous = 0
    this.Luck = 0
    this.Money = 55
    this.Experience = 45
    this.isDead = false
  },
  m_42: function() {
    this.Name = '双手剑士'
    this.Health = 1200
    this.Attack = 620
    this.Defense = 520
    this.MagicAttack = 0
    this.MagicDefense = 0
    this.Dexterous = 0
    this.Luck = 0
    this.Money = 65
    this.Experience = 50
    this.isDead = false
  },
  m_43: function() {
    this.Name = '金队长'
    this.Health = 900
    this.Attack = 750
    this.Defense = 650
    this.MagicAttack = 0
    this.MagicDefense = 0
    this.Dexterous = 0
    this.Luck = 0
    this.Money = 77
    this.Experience = 60
    this.isDead = false
  },
  m_44: function() {
    this.Name = '红衣魔王'
    this.Health = 15000
    this.Attack = 1000
    this.Defense = 1000
    this.MagicAttack = 0
    this.MagicDefense = 0
    this.Dexterous = 0
    this.Luck = 0
    this.Money = 100
    this.Experience = 100
    this.isDead = false
  },
  m_51: function() {
    this.Name = '麻衣法师'
    this.Health = 220
    this.Attack = 120
    this.Defense = 70
    this.MagicAttack = 0
    this.MagicDefense = 0
    this.Dexterous = 0
    this.Luck = 0
    this.Money = 20
    this.Experience = 15
    this.isDead = false
    // 特殊能力 减少敌人100hp
    this.skillType = 'beforeBattle'
    this.skill = (hero) => {
      const effectType = 'Health'
      const effectNum = -100
      const effectLog = `${this.Name}特殊技能生效，对${hero.Name}造成了100点伤害`
      hero[effectType] += effectNum
      return effectLog
    }
  },
  m_52: function() {
    this.Name = '红衣法师'
    this.Health = 500
    this.Attack = 400
    this.Defense = 260
    this.MagicAttack = 0
    this.MagicDefense = 0
    this.Dexterous = 0
    this.Luck = 0
    this.Money = 47
    this.Experience = 35
    this.isDead = false
    // 减少敌人300hp
    this.skillType = 'beforeBattle'
    this.skill = (hero) => {
      const effectType = 'Health'
      const effectNum = -300
      const effectLog = `${this.Name}特殊技能生效，对${hero.Name}造成了300点伤害`
      hero[effectType] += effectNum
      return effectLog
    }
  },
  m_53: function() {
    this.Name = '黑衣法师'
    this.Health = 1300
    this.Attack = 300
    this.Defense = 150
    this.MagicAttack = 0
    this.MagicDefense = 0
    this.Dexterous = 0
    this.Luck = 0
    this.Money = 40
    this.Experience = 30
    this.isDead = false
    // 减少敌人1/4hp
    this.skillType = 'beforeBattle'
    this.skill = (hero) => {
      const effectType = 'Health'
      const effectNum = -1 * Math.floor(hero.Health / 4)
      const effectLog = `${this.Name}特殊技能生效，对${hero.Name}造成了${effectNum}点伤害`
      hero[effectType] += effectNum
      return effectLog
    }
  },
  m_54: function() {
    this.Name = '灵法师'
    this.Health = 1500
    this.Attack = 830
    this.Defense = 730
    this.MagicAttack = 0
    this.MagicDefense = 0
    this.Dexterous = 0
    this.Luck = 0
    this.Money = 80
    this.Experience = 65
    this.isDead = false
    // 减少敌人1/3hp
    this.skillType = 'beforeBattle'
    this.skill = (hero) => {
      const effectType = 'Health'
      const effectNum = -1 * Math.floor(hero.Health / 3)
      const effectLog = `${this.Name}特殊技能生效，对${hero.Name}造成了${effectNum}点伤害`
      hero[effectType] += effectNum
      return effectLog
    }
  }
}

export default monster
