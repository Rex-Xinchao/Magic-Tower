import buildingManual from './buildingManual'
import monsterManual from '../monster/monsterManual'

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
        const position = { x: j, y: i }
        const building = new Building()
        const monster = {
          isExist: false,
          isDead: false,
          monsterDetail: null
        }
        if (Monster) {
          const monsterDetail = new Monster()
          monster.isExist = true
          monster.isDead = false
          monster.monsterDetail = monsterDetail
        }
        buildingList[i][j] = { ...position, ...building, ...monster }
      }
    }
    return buildingList
  }
}

export default floorOne
