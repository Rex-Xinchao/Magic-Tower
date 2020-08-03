import buildingManual from '../item/buildingManual'
import monsterManual from '../npc/monsterManual'
import npcManual from '../npc/characterManual'

const buildingList = [
  ['02', '02', '01', '03', '00', '00', '03', '01', '02', '02'],
  ['02', '02', '01', '03', '00', '00', '03', '01', '02', '02'],
  ['02', '02', '01', '03', '00', '00', '03', '01', '02', '02'],
  ['02', '02', '01', '03', '00', '00', '03', '01', '02', '02'],
  ['02', '02', '01', '03', '00', '00', '03', '01', '02', '02'],
  ['02', '02', '01', '03', '00', '00', '03', '01', '02', '02'],
  ['02', '02', '01', '03', '00', '00', '03', '01', '02', '02'],
  ['02', '02', '01', '03', '00', '00', '03', '01', '02', '02'],
  ['02', '02', '01', '03', '00', '00', '03', '01', '02', '02'],
  ['02', '02', '01', '03', '00', '14', '03', '01', '02', '02']
]

const monsterList = [
  ['00', '00', '00', '00', '00', '00', '00', '00', '00', '00'],
  ['00', '00', '00', '00', '00', '00', '00', '00', '00', '00'],
  ['00', '00', '00', '00', '00', '00', '00', '00', '00', '00'],
  ['00', '00', '00', '00', '00', '00', '00', '00', '00', '00'],
  ['00', '00', '00', '00', '00', '00', '00', '00', '00', '00'],
  ['00', '00', '00', '00', '00', '00', '00', '00', '00', '00'],
  ['00', '00', '00', '00', '00', '00', '00', '00', '00', '00'],
  ['00', '00', '00', '00', '00', '00', '00', '00', '00', '00'],
  ['00', '00', '00', '00', '00', '01', '00', '00', '00', '00'],
  ['00', '00', '00', '00', '99', '00', '00', '00', '00', '00']
]

const npcList = [
  ['00', '00', '00', '00', '00', '00', '00', '00', '00', '00'],
  ['00', '00', '00', '00', '00', '00', '00', '00', '00', '00'],
  ['00', '00', '00', '00', '00', '00', '00', '00', '00', '00'],
  ['00', '00', '00', '00', '02', '00', '00', '00', '00', '00'],
  ['00', '00', '00', '00', '00', '00', '00', '00', '00', '00'],
  ['00', '00', '00', '00', '01', '00', '00', '00', '00', '00'],
  ['00', '00', '00', '00', '00', '00', '00', '00', '00', '00'],
  ['00', '00', '00', '00', '00', '00', '00', '00', '00', '00'],
  ['00', '00', '00', '00', '00', '00', '00', '00', '00', '00'],
  ['00', '00', '00', '00', '00', '00', '00', '00', '00', '00']
]

const floorOne = {
  name: '普通一层',
  index: 'FloorOne',
  next: 'FloorTwo',
  last: null,
  originPosition: [5, 0],
  mapDoms: () => {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        const Building = buildingManual[buildingList[i][j]]
        const Monster = monsterManual[monsterList[i][j]]
        const Npc = npcManual[npcList[i][j]]
        const position = { x: j, y: i }
        const building = new Building()
        const monster = {
          isExist: false,
          isDead: false,
          monsterDetail: null
        }
        const npc = {
          isNpcExist: false,
          npcDetail: null
        }
        if (Monster) {
          const monsterDetail = new Monster()
          monster.isExist = true
          monster.isDead = false
          monster.monsterDetail = monsterDetail
        }
        if (Npc) {
          const npcDetail = new Npc()
          npc.isNpcExist = true
          npc.npcDetail = npcDetail
        }
        buildingList[i][j] = { ...position, ...building, ...monster, ...npc }
      }
    }
    return buildingList
  }
}

export default floorOne
