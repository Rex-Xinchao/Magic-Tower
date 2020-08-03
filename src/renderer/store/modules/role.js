const role = {
  state: {
    attribute: {
      Level: 1,
      Name: '勇者',
      type: 'hero',
      Designation: '菜鸟',
      Experience: 0,
      NextLevelExperience: 100,
      Health: 100, // 血量：血量归零游戏结束
      Attack: 10, // 物理攻击：造成伤害 = 物理攻击（自身）- 物理防御（对方）
      Defense: 0, // 物理防御
      MagicAttack: 0, // 魔法伤害：造成伤害 = 魔法伤害（自身）- 魔法防御（对方）
      MagicDefense: 0, // 魔法防御
      Dexterous: 1, // 灵巧：影响双方的出手顺序（灵巧高的一方先手,灵巧相同勇者优先攻击，对不起勇者就是可以为所欲为），当灵巧（自身）是灵巧（对方）的倍数时，可每回合多攻击多出倍数的次数
      Luck: 0 // 幸运：一定几率获取的道具数量翻倍，增加装备效果的生效几率
    },
    item: {
      Money: 0, // 金钱： 可以购买属性和道具
      RedKey: 0, // 红钥匙数量，用于开启红色门
      GreenKey: 0, // 绿钥匙数量，用于开启绿色门
      BlueKey: 0 // 蓝钥匙数量，用于开启蓝色门
    }
  },
  getters: {
    hero: (state) => state.attribute
  },
  mutations: {
    levelUp(state) {
      state.attribute.Level++
      state.attribute.Experience -= state.attribute.NextLevelExperience
      state.attribute.NextLevelExperience =
        state.attribute.NextLevelExperience * 2
      state.attribute.Health += 10
      state.attribute.Attack += 1
      state.attribute.Defense += 1
      state.attribute.MagicAttack += 1
      state.attribute.MagicDefense += 1
    },
    addHealth(state, Health) {
      state.attribute.Health += Health
    },
    delHealth(state, Health) {
      state.attribute.Health -= Health
    }
  },
  actions: {
    setExperience(store, Experience) {
      store.state.attribute.Experience += Experience
      if (
        store.state.attribute.Experience >=
        store.state.attribute.NextLevelExperience
      ) {
        // 升级
        store.state.attribute.Experience =
          store.state.attribute.Experience -
          store.state.attribute.NextLevelExperience
        store.state.level++
        store.state.NextLevelExperience = store.state.NextLevelExperience * 2
      }
    },
    setHealth(store, Health) {
      store.state.attribute.Health = Health
    },
    setAttack(store, Attack) {
      store.state.attribute.Attack = Attack
    },
    setDefense(store, Defense) {
      store.state.attribute.Defense = Defense
    },
    setMagicAttack(store, MagicAttack) {
      store.state.attribute.MagicAttack = MagicAttack
    },
    setMagicDefense(store, MagicDefense) {
      store.state.attribute.MagicDefense = MagicDefense
    },
    setDexterous(store, Dexterous) {
      store.state.attribute.Dexterous = Dexterous
    },
    setLuck(store, Luck) {
      store.state.attribute.Luck = Luck
    },
    setMoney(store, Money) {
      store.state.item.Money += Money
    },
    setRedKey(store, RedKey) {
      store.state.item.RedKey += RedKey
    },
    setGreenKey(store, GreenKey) {
      store.state.item.GreenKey += GreenKey
    },
    setBlueKey(store, BlueKey) {
      store.state.item.BlueKey += BlueKey
    }
  }
}

export default role
