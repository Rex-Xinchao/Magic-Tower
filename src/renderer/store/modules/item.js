import tool from '@lib/dic/manual/item'

const item = {
  state: {
    items: {
      Money: 0, // 金钱： 可以购买属性和道具
      RedKey: 0, // 红钥匙数量，用于开启红色门
      GreenKey: 0, // 绿钥匙数量，用于开启绿色门
      BlueKey: 0 // 蓝钥匙数量，用于开启蓝色门
    },
    tools: []
  },
  getters: {
    items: (state) => state.items,
    tools: (state) => state.tools
  },
  mutations: {
    getTool(state, toolId) {
      let tools = []
      let isExist = false
      state.tools.forEach((e) => {
        if (e.Id === toolId) {
          isExist = true
          e.sum && e.sum++
          tools.push(e)
        } else {
          tools.push(e)
        }
      })
      if (isExist) {
        state.tools = tools
      } else {
        const Tool = tool[toolId]
        const equipment = new Tool()
        equipment.sum = 1
        state.tools = [...state.tools, equipment]
      }
    },
    delTool(state, toolId) {
      let tools = []
      state.tools.forEach((e) => {
        if (e.Id === toolId) {
          e.sum--
          e.sum > 0 && tools.push(e)
        } else {
          tools.push(e)
        }
      })
      state.tools = tools
    },
    setRedKey(state, num) {
      state.items.RedKey += num
    },
    setGreenKey(state, num) {
      state.items.GreenKey += num
    },
    setBlueKey(state, num) {
      state.items.BlueKey += num
    }
  },
  actions: {
    setMoney(store, Money) {
      store.state.items.Money = Money
    },
    setRedKey(store, RedKey) {
      store.state.items.RedKey += RedKey
    },
    setGreenKey(store, GreenKey) {
      store.state.items.GreenKey += GreenKey
    },
    setBlueKey(store, BlueKey) {
      store.state.items.BlueKey += BlueKey
    }
  }
}

export default item
