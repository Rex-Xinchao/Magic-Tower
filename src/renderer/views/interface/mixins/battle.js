// 调用的外部参数：this.hero 游戏人物信息 && this.monster 遭遇的怪物信息
import { mapGetters } from 'vuex'

const Battle = {
  // 战斗系统
  data() {
    return {
      log: [], // 战斗日志
      turn: 1 // 回合数
    }
  },
  computed: {
    ...mapGetters(['addition', 'equipped', 'skill'])
  },
  methods: {
    // 战斗
    battleStart() {
      this.reset()
      if (this.monster.skill && this.monster.skillType === 'beforeBattle') {
        this.log.push(this.monster.skill(this.hero, this.monster))
        this.$refs.battleLog.showDialog(this.log)
      }
      while (this.hero.Health > 0 && this.monster.Health > 0) {
        // 双方血量归零前持续战斗
        this.turnLogging()
        this.battle()
        this.$refs.battleLog.showDialog(this.log)
      }
      this.resultLogging()
      this.$refs.battleLog.showDialog(this.log)
      this.battleEnd()
    },
    reset() {
      // 重置
      this.log = []
      this.turn = 1
    },
    battle() {
      let isContinue = true // 双方有一方血量为0，置为false
      let hero = {
        attribute: this.hero,
        addition: this.addition,
        equipped: this.equipped,
        skill: this.skill
      }
      let monster = {
        attribute: this.monster,
        addition: null,
        equipped: null,
        skill: null
      }
      if (this.hero.Dexterous >= this.monster.Dexterous) {
        // 判断灵巧，决定谁先手
        isContinue && (isContinue = this.attack(hero, monster))
        isContinue && (isContinue = this.attack(monster, hero))
      } else {
        isContinue && (isContinue = this.attack(monster, hero))
        isContinue && (isContinue = this.attack(hero, monster))
      }
      if (this.monster.skill && this.monster.skillType === 'afterBattle') {
        this.log.push(this.monster.skill(this.hero, this.monster))
        this.$refs.battleLog.showDialog(this.log)
      }
    },
    attack(self, enemy) {
      // 计算伤害
      let physicsAttack = this.getValue(self, 'Attack')
      let magicAttack = this.getValue(self, 'MagicAttack')
      let physicsDefense = this.getValue(enemy, 'Defense')
      let magicDefense = this.getValue(enemy, 'MagicDefense')
      let physicsHarm =
        physicsAttack - physicsDefense > 0 ? physicsAttack - physicsDefense : 0
      let magicHarm =
        magicAttack - magicDefense > 0 ? magicAttack - magicDefense : 0
      let frequency =
        parseInt(self.Dexterous / enemy.Dexterous) > 0
          ? parseInt(self.Dexterous / enemy.Dexterous)
          : 1
      for (let i = 0; i < frequency; i++) {
        let harm = this.getEquipmentEffect(physicsHarm, magicHarm, self, enemy)
        enemy.attribute.Health -= harm
        enemy.attribute.Health =
          enemy.attribute.Health < 0 ? 0 : enemy.attribute.Health
        this.attackLogging(self.attribute, enemy.attribute, harm) // 记录攻击日志
      }
      return enemy.attribute.Health > 0
    },
    getValue(self, key) {
      let value = self.attribute[key]
      for (let k in self.addition) {
        value += self.addition[k]
      }
      return value
    },
    getEquipmentEffect(physicsHarm, magicHarm, self, enemy) {
      let harm = physicsHarm + magicHarm
      if (self.equipped) {
        self.equipped.length > 1 &&
          self.equipped.sort((a, b) => {
            return a.Priority - b.Priority
          })
        self.equipped.forEach((e) => {
          if (e.effect && e.Type === 'arms') {
            let { addHarm, effect } = e.effect(physicsHarm, magicHarm, 998)
            harm += addHarm
            effect && this.addEquipmentEffectLog(e.Name, e.EffectDescription)
          }
        })
      } else if (enemy.equipped) {
        enemy.equipped.length > 1 &&
          enemy.equipped.sort((a, b) => {
            return a.Priority - b.Priority
          })
        enemy.equipped.length > 1 &&
          enemy.equipped.forEach((e) => {
            if (e.effect && e.Type === 'armor') {
              let { addHarm, effect } = e.effect(physicsHarm, magicHarm, 998)
              harm += addHarm
              effect && this.addEquipmentEffectLog(e.Name, e.EffectDescription)
            }
          })
      }
      return harm
    },
    battleEnd() {
      // 结算战斗
      if (this.hero.Health <= 0 || this.hero.Level >= 100) {
        return
      }
      this.hero.Experience += this.monster.Experience
      if (this.hero.Experience >= this.hero.NextLevelExperience) {
        this.$store.commit('levelUp', '')
      }
    },
    // 日志记录
    turnLogging() {
      this.log.push(`第${this.turn}回合：\n`)
      this.turn++
    },
    attackLogging(RoleOne, RoleTwo, harm) {
      let txt =
        RoleTwo.Health > 0
          ? `${RoleTwo.Name} 还剩下${RoleTwo.Health}点生命。\n`
          : `${RoleTwo.Name} 死亡。\n`
      this.log.push(
        `${RoleOne.Name} 攻击了 ${RoleTwo.Name} 1下，造成了${harm}点伤害,${txt}`
      )
    },
    addEquipmentEffectLog(name, effect) {
      this.log.push(`${name}效果发动成功，${effect}。\n`)
    },
    resultLogging() {
      if (this.monster.Health <= 0) {
        this.log.push(`${this.hero.Name}战胜了${this.monster.Name},勇者获胜。`)
      }
      if (this.hero.Health <= 0) {
        this.log.push(`${this.monster.Name}击败了${this.hero.Name}，游戏结束。`)
      }
    }
  }
}

export default Battle
