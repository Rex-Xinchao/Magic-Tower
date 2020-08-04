const monsterManual = {
  '01': function() {
    this.Name = '史莱姆(绿)'
    this.Health = 50
    this.Attack = 20
    this.Defense = 1
    this.MagicAttack = 0
    this.MagicDefense = 0
    this.Dexterous = 0
    this.Luck = 0
    this.Experience = 1
    this.Money = 1
    this.isDead = false
    // 回合结束恢复1点生命
    this.skillType = 'afterBattle'
    this.skill = (hero, monster) => {
      if (monster.Health <= 0) return `${monster.Name}特殊技能发动失败`
      const effectType = 'Health'
      const effectNum = 1
      const effectLog = `${monster.Name}特殊技能生效，恢复了${effectNum}点生命`
      monster[effectType] += effectNum
      return effectLog
    }
  },
  '02': function() {
    this.Name = '史莱姆(红)'
    this.Health = 70
    this.Attack = 15
    this.Defense = 2
    this.MagicAttack = 0
    this.MagicDefense = 0
    this.Dexterous = 0
    this.Luck = 0
    this.Money = 2
    this.Experience = 1
    this.isDead = false
  },
  '03': function() {
    this.Name = '小蝙蝠'
    this.Health = 100
    this.Attack = 20
    this.Defense = 5
    this.MagicAttack = 0
    this.MagicDefense = 0
    this.Dexterous = 0
    this.Luck = 0
    this.Money = 3
    this.Experience = 2
    this.isDead = false
  },
  '04': function() {
    this.Name = '骷髅小兵'
    this.Health = 110
    this.Attack = 25
    this.Defense = 5
    this.MagicAttack = 0
    this.MagicDefense = 0
    this.Dexterous = 0
    this.Luck = 0
    this.Money = 5
    this.Experience = 4
    this.isDead = false
  },
  '05': function() {
    this.Name = '青头怪'
    this.Health = 200
    this.Attack = 35
    this.Defense = 10
    this.MagicAttack = 0
    this.MagicDefense = 0
    this.Dexterous = 0
    this.Luck = 0
    this.Money = 5
    this.Experience = 3
    this.isDead = false
  },
  '06': function() {
    this.Name = '骷髅士兵'
    this.Health = 150
    this.Attack = 40
    this.Defense = 20
    this.MagicAttack = 0
    this.MagicDefense = 0
    this.Dexterous = 0
    this.Luck = 0
    this.Money = 8
    this.Experience = 5
    this.isDead = false
  },
  '07': function() {
    this.Name = '初级法师'
    this.Health = 125
    this.Attack = 50
    this.Defense = 25
    this.MagicAttack = 0
    this.MagicDefense = 0
    this.Dexterous = 0
    this.Luck = 0
    this.Money = 10
    this.Experience = 7
    this.isDead = false
  },
  '08': function() {
    this.Name = '大蝙蝠'
    this.Health = 150
    this.Attack = 35
    this.Defense = 30
    this.MagicAttack = 0
    this.MagicDefense = 0
    this.Dexterous = 0
    this.Luck = 0
    this.Money = 10
    this.Experience = 8
    this.isDead = false
  },
  '09': function() {
    this.Name = '兽面人'
    this.Health = 300
    this.Attack = 75
    this.Defense = 45
    this.MagicAttack = 0
    this.MagicDefense = 0
    this.Dexterous = 0
    this.Luck = 0
    this.Money = 13
    this.Experience = 10
    this.isDead = false
  },
  '10': function() {
    this.Name = '骷髅队长'
    this.Health = 400
    this.Attack = 90
    this.Defense = 50
    this.MagicAttack = 0
    this.MagicDefense = 0
    this.Dexterous = 0
    this.Luck = 0
    this.Money = 15
    this.Experience = 12
    this.isDead = false
  },
  '11': function() {
    this.Name = '初级卫兵'
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
  '12': function() {
    this.Name = '红蝙蝠'
    this.Health = 550
    this.Attack = 170
    this.Defense = 100
    this.MagicAttack = 0
    this.MagicDefense = 0
    this.Dexterous = 0
    this.Luck = 0
    this.Money = 25
    this.Experience = 20
    this.isDead = false
  },
  '13': function() {
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
      const effectLog = `${this.Name}特殊技能生效，对${
        hero.Name
      }造成了100点伤害`
      hero[effectType] += effectNum
      return effectLog
    }
  },
  '14': function() {
    this.Name = '高级法师'
    this.Health = 100
    this.Attack = 200
    this.Defense = 110
    this.MagicAttack = 0
    this.MagicDefense = 0
    this.Dexterous = 0
    this.Luck = 0
    this.Money = 30
    this.Experience = 25
    this.isDead = false
  },
  '15': function() {
    this.Name = '石头怪人'
    this.Health = 500
    this.Attack = 115
    this.Defense = 65
    this.MagicAttack = 0
    this.MagicDefense = 0
    this.Dexterous = 0
    this.Luck = 0
    this.Money = 15
    this.Experience = 15
    this.isDead = false
  },
  '16': function() {
    this.Name = '怪王'
    this.Health = 700
    this.Attack = 250
    this.Defense = 125
    this.MagicAttack = 0
    this.MagicDefense = 0
    this.Dexterous = 0
    this.Luck = 0
    this.Money = 32
    this.Experience = 25
    this.isDead = false
  },
  '17': function() {
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
      const effectLog = `${this.Name}特殊技能生效，对${
        hero.Name
      }造成了300点伤害`
      hero[effectType] += effectNum
      return effectLog
    }
  },
  '18': function() {
    this.Name = '兽面武士'
    this.Health = 900
    this.Attack = 450
    this.Defense = 300
    this.MagicAttack = 0
    this.MagicDefense = 0
    this.Dexterous = 0
    this.Luck = 0
    this.Money = 50
    this.Experience = 40
    this.isDead = false
  },
  '19': function() {
    this.Name = '白衣武士'
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
      const effectLog = `${this.Name}特殊技能生效，对${
        hero.Name
      }造成了${effectNum}点伤害`
      hero[effectType] += effectNum
      return effectLog
    }
  },
  '20': function() {
    this.Name = '金卫士'
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
  '21': function() {
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
  '22': function() {
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
  '23': function() {
    this.Name = '冥战士'
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
  '24': function() {
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
  '25': function() {
    this.Name = '高级卫兵'
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
  '26': function() {
    this.Name = '灵武士'
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
  '27': function() {
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
      const effectLog = `${this.Name}特殊技能生效，对${
        hero.Name
      }造成了${effectNum}点伤害`
      hero[effectType] += effectNum
      return effectLog
    }
  },
  '28': function() {
    this.Name = '冥队长'
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
  '29': function() {
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
  }
}

export default monsterManual
