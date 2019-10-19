import Vue from 'vue'
import Vuex from 'vuex'
import role from './modules/role'
import equipment from './modules/equipment'
import item from './modules/item'
import skill from './modules/skill'
import layer from './modules/layer'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    role,
    equipment,
    item,
    skill,
    layer
  },
  state: {},
  mutations: {},
  actions: {}
})
