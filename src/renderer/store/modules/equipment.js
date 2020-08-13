import item from '@lib/dic/manual/item'

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
    equipped: [],
    saveData: {}
  },
  getters: {
    equipments: (state) => state.equipments,
    equipped: (state) => state.equipped,
    addition: (state) => state.addition
  },
  mutations: {
    getEquipment(state, equipmentId) {
      const Equipment = item[equipmentId]
      const equipment = new Equipment()
      state.equipments = [...state.equipments, equipment]
      console.log(state.equipments)
    },
    delEquipment(state, equipmentId) {
      let equipments = []
      let equipped = []
      state.equipments.forEach((e) => {
        e.Id === equipmentId || equipments.push(e)
      })
      state.equipped.forEach((e) => {
        e.Id === equipmentId || equipped.push(e)
      })
      state.equipments = equipments
      state.equipped = equipped
    },
    equip(state, equipmentId) {
      const Equipment = item[equipmentId]
      const equipment = new Equipment()
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
    drop(state, equipmentId) {
      const Equipment = item[equipmentId]
      const equipment = new Equipment()
      let equipments = [...state.equipments, equipment]
      let equipped = []
      state.equipped.forEach((e) => {
        e.Id === equipment.Id || equipped.push(e)
      })
      state.equipments = equipments
      state.equipped = equipped
      this.commit('calcAddition', '')
    },
    calcAddition(state) {
      let [Attack, Defense, MagicAttack, MagicDefense, Dexterous, Luck] = [0, 0, 0, 0, 0, 0]
      state.equipped.forEach((e) => {
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
    },
    saveEquipData(state) {
      state.saveData = JSON.parse(
        JSON.stringify({
          addition: state.addition,
          equipments: state.equipments,
          equipped: state.equipped
        })
      )
    },
    loadEquipData(state) {
      state.addition = JSON.parse(JSON.stringify(state.saveData.addition))
      state.equipments = JSON.parse(JSON.stringify(state.saveData.equipments))
      state.equipped = JSON.parse(JSON.stringify(state.saveData.equipped))
    }
  },
  actions: {}
}

export default equipment
