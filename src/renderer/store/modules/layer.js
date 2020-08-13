import Tower from '@lib/dic/map/tower'

const layer = {
  state: {
    map: {},
    layerName: null,
    layerIndex: null,
    nextPosition: [],
    saveData: {
      map: {},
      current: {
        layerName: null,
        layerIndex: null,
        nextPosition: []
      }
    }
  },
  getters: {
    layerName: (state) => state.layerName,
    layerIndex: (state) => state.layerIndex,
    nextPosition: (state) => state.nextPosition,
    saveData: (state) => state.saveData
  },
  mutations: {
    initFlour(state) {
      state.layerName = '起始之地'
      state.layerIndex = 'StartFloor'
      state.nextPosition = [6, 0]
      state.map[state.layerIndex] = Tower[state.layerIndex].mapDoms
    },
    nextFlour(state, data) {
      // 保存当前的地图状态
      state.map[state.layerIndex] = data.currentMapList
      // 加载后续的地图
      let nextLayer = Tower[state.layerIndex].next
      state.layerIndex = Tower[nextLayer].index
      state.layerName = Tower[nextLayer].name
      state.map[nextLayer] || (state.map[nextLayer] = Tower[nextLayer].mapDoms)
      state.nextPosition = data.nextPosition
    },
    lastFlour(state, data) {
      // 保存当前的地图状态
      state.map[state.layerIndex] = data.currentMapList
      // 加载后续的地图
      let lastLayer = Tower[state.layerIndex].last
      state.layerIndex = Tower[lastLayer].index
      state.layerName = Tower[lastLayer].name
      state.map[lastLayer] || (state.map[lastLayer] = Tower[lastLayer].mapDoms)
      state.nextPosition = data.nextPosition
    },
    saveData(state, nextPosition) {
      state.saveData.map = deepClone(state.map)
      state.saveData.current.layerName = state.layerName
      state.saveData.current.layerIndex = state.layerIndex
      state.saveData.current.nextPosition = nextPosition
    },
    loadData(state) {
      state.map = deepClone(state.saveData.map)
      state.layerName = state.saveData.current.layerName
      state.layerIndex = state.saveData.current.layerIndex
      state.nextPosition = state.saveData.current.nextPosition
    }
  },
  actions: {}
}

const deepClone = (obj) => {
  if (typeof obj !== 'object') return
  if (obj === null) return null
  let newObj = obj instanceof Array ? [] : {}
  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      newObj[key] = deepClone(obj[key])
    } else {
      newObj[key] = obj[key]
    }
  }
  return newObj
}

export default layer
