import Tower from '@lib/dic/map/tower'

const layer = {
  state: {
    map: {},
    layerName: null,
    layerIndex: null,
    nextPosition: []
  },
  getters: {
    layerName: (state) => state.layerName,
    layerIndex: (state) => state.layerIndex,
    nextPosition: (state) => state.nextPosition
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
    }
  },
  actions: {}
}

export default layer
