import Equipment from '@static/dic/item/equipmentManual'

const equipment = {
  state: {
    addition: {
      Attack: 0,
      Defense: 0,
      MagicAttack: 0,
      MagicDefense: 0,
      Dexterous: 0,
      Luck: 0
    },
    equipments: [],
    equipped: []
  },
  getters: {
    equipments: state => state.equipments,
    equipped: state => state.equipped,
    addition: state => state.addition
  },
  mutations: {
    getEquipment (state, equipmentId) {
      const equipment = Equipment[equipmentId]
      state.equipments = [...state.equipments, equipment]
    },
    delEquipment (state, equipmentId) {
      let equipments = []
      let equipped = []
      state.equipments.forEach(e => {
        e.Id === equipmentId || equipments.push(e)
      })
      state.equipped.forEach(e => {
        e.Id === equipmentId || equipped.push(e)
      })
      state.equipments = equipments
      state.equipped = equipped
    },
    equip (state, equipmentId) {
      const equipment = Equipment[equipmentId]
      if (state.equipped.length <= 6 && state.equipments.length > 0) {
        let equipments = []
        let equipped = [...state.equipped, equipment]
        for (let i = 0; i < state.equipments.length; i++) {
          state.equipments[i].Id === equipment.Id || equipments.push(state.equipments[i])
        }
        state.equipped = equipped
        state.equipments = equipments
        this.commit('calcAddition', '')
      }
    },
    drop (state, equipmentId) {
      const equipment = Equipment[equipmentId]
      let equipments = [...state.equipments, equipment]
      let equipped = []
      state.equipped.forEach(e => {
        e.Id === equipment.Id || equipped.push(e)
      })
      state.equipments = equipments
      state.equipped = equipped
      this.commit('calcAddition', '')
    },
    calcAddition (state) {
      let [Attack, Defense, MagicAttack, MagicDefense, Dexterous, Luck] = [0, 0, 0, 0, 0, 0]
      state.equipped.forEach(e => {
        e.Attack && (Attack += e.Attack)
        e.Defense && (Attack += e.Defense)
        e.MagicAttack && (Attack += e.MagicAttack)
        e.MagicDefense && (Attack += e.MagicDefense)
        e.Dexterous && (Attack += e.Dexterous)
        e.Luck && (Attack += e.Luck)
      })
      state.addition = {
        Attack: Attack,
        Defense: Defense,
        MagicAttack: MagicAttack,
        MagicDefense: MagicDefense,
        Dexterous: Dexterous,
        Luck: Luck
      }
    }
  },
  actions: {}
}

export default equipment
