import Tower from '../../../../static/dic/map/tower'

const layer = {
  state: {
    layerName: '普通一层',
    layerIndex: 'FloorOne',
    map: {},
    layerMap: {}
  },
  getters: {
    layerName: state => state.layerName,
    layerIndex: state => state.layerIndex
  },
  mutations: {
    nextFlour (state, data) {
      state.map[state.layerIndex] = data.mapList
      state.layerMap[state.layerIndex] = { originPosition: data.rolePosition }
      let nextLayer = Tower[state.layerIndex].next
      state.layerIndex = Tower[nextLayer].index
      state.layerName = Tower[nextLayer].name
    },
    lastFlour (state, data) {
      state.map[state.layerIndex] = data.mapList
      state.layerMap[state.layerIndex] = { originPosition: data.rolePosition }
      let lastLayer = Tower[state.layerIndex].last
      state.layerIndex = Tower[lastLayer].index
      state.layerName = Tower[lastLayer].name
    }
  },
  actions: {}
}

export default layer
