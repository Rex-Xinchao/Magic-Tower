const role = {
  state: {
    attribute: {
      Level: 1,
      Name: '勇者',
      type: 'hero',
      Designation: '菜鸟',
      Experience: 0,
      NextLevelExperience: 100,
      Health: 1000, // 血量：血量归零游戏结束
      Attack: 10, // 物理攻击：造成伤害 = 物理攻击（自身）- 物理防御（对方）
      Defense: 10, // 物理防御
      MagicAttack: 0, // 魔法伤害：造成伤害 = 魔法伤害（自身）- 魔法防御（对方）
      MagicDefense: 10, // 魔法防御
      Dexterous: 0, // 灵巧：影响双方的出手顺序（灵巧高的一方先手,灵巧相同勇者优先攻击，对不起勇者就是可以为所欲为），当灵巧（自身）是灵巧（对方）的倍数时，可每回合多攻击多出倍数的次数
      Luck: 0, // 幸运：一定几率获取的道具数量翻倍，增加装备效果的生效几率
      MonsterManual: [],
      isSaved_DX: false
    },
    saveData: {
      Level: 1,
      Name: '勇者',
      type: 'hero',
      Designation: '菜鸟',
      Experience: 0,
      NextLevelExperience: 100,
      Health: 1000, // 血量：血量归零游戏结束
      Attack: 10, // 物理攻击：造成伤害 = 物理攻击（自身）- 物理防御（对方）
      Defense: 10, // 物理防御
      MagicAttack: 0, // 魔法伤害：造成伤害 = 魔法伤害（自身）- 魔法防御（对方）
      MagicDefense: 0, // 魔法防御
      Dexterous: 0, // 灵巧：影响双方的出手顺序（灵巧高的一方先手,灵巧相同勇者优先攻击，对不起勇者就是可以为所欲为），当灵巧（自身）是灵巧（对方）的倍数时，可每回合多攻击多出倍数的次数
      Luck: 0, // 幸运：一定几率获取的道具数量翻倍，增加装备效果的生效几率
      MonsterManual: []
    }
  },
  getters: {
    hero: (state) => state.attribute,
    monsterManual: (state) => state.attribute.MonsterManual
  },
  mutations: {
    setMonsterManual(state, num) {
      state.attribute.MonsterManual = state.attribute.MonsterManual.concat(num)
    },
    levelUp(state) {
      state.attribute.Level++
      if (state.attribute.Level % 5 === 0) {
        state.attribute.NextLevelExperience += 100
      }
      state.attribute.Experience -= state.attribute.NextLevelExperience
      state.attribute.Health += 1000
      state.attribute.Attack += 6
      state.attribute.Defense += 8
      state.attribute.MagicAttack += 4
      state.attribute.MagicDefense += 8
    },
    addHealth(state, Health) {
      state.attribute.Health += Health
    },
    delHealth(state, Health) {
      state.attribute.Health -= Health
    },
    addAttack(state, Attack) {
      state.attribute.Attack += Attack
    },
    addDefense(state, Defense) {
      state.attribute.Defense += Defense
    },
    addMagicAttack(state, MagicAttack) {
      state.attribute.MagicAttack += MagicAttack
    },
    addMagicDefense(state, MagicDefense) {
      state.attribute.MagicDefense += MagicDefense
    },
    saveRoleData(state) {
      state.saveData = JSON.parse(JSON.stringify(state.attribute))
    },
    loadRoleData(state) {
      state.attribute = JSON.parse(JSON.stringify(state.saveData))
    }
  },
  actions: {
    setExperience(store, Experience) {
      store.state.attribute.Experience += Experience
    },
    setHealth(store, Health) {
      store.state.attribute.Health += Health
    },
    setAttack(store, Attack) {
      store.state.attribute.Attack += Attack
    },
    setDefense(store, Defense) {
      store.state.attribute.Defense += Defense
    },
    setMagicAttack(store, MagicAttack) {
      store.state.attribute.MagicAttack += MagicAttack
    },
    setMagicDefense(store, MagicDefense) {
      store.state.attribute.MagicDefense += MagicDefense
    },
    setDexterous(store, Dexterous) {
      store.state.attribute.Dexterous += Dexterous
    },
    setLuck(store, Luck) {
      store.state.attribute.Luck += Luck
    }
  }
}

export default role
