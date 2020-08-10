import Tower from '@lib/dic/map/tower'

const layer = {
  state: {
    layerName: '起始之地',
    layerIndex: 'StartFloor',
    map: {},
    layerMap: {}
  },
  getters: {
    layerName: (state) => state.layerName,
    layerIndex: (state) => state.layerIndex
  },
  mutations: {
    nextFlour(state, data) {
      state.map[state.layerIndex] = data.mapList
      let nextLayer = Tower[state.layerIndex].next
      state.layerIndex = Tower[nextLayer].index
      state.layerName = Tower[nextLayer].name
      Tower[nextLayer].originPosition = data.rolePosition
      state.layerMap[nextLayer] = { originPosition: data.rolePosition }
    },
    lastFlour(state, data) {
      state.map[state.layerIndex] = data.mapList
      let lastLayer = Tower[state.layerIndex].last
      state.layerIndex = Tower[lastLayer].index
      state.layerName = Tower[lastLayer].name
      Tower[lastLayer].rolePosition = data.rolePosition
      state.layerMap[lastLayer] = { originPosition: data.rolePosition }
    }
  },
  actions: {}
}

export default layer
