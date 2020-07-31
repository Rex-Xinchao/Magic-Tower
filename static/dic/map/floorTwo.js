import buildingManual from './buildingManual'
import monsterManual from '../monster/monsterManual'

const buildingList = [
  ['14', '00', '00', '00', '00', '00', '00', '00', '00', '00'],
  ['01', '01', '01', '01', '01', '01', '01', '01', '01', '00'],
  ['00', '00', '13', '00', '01', '00', '00', '00', '01', '00'],
  ['00', '00', '01', '00', '01', '01', '01', '13', '01', '00'],
  ['01', '13', '01', '00', '13', '00', '00', '00', '01', '00'],
  ['00', '00', '01', '00', '01', '01', '01', '01', '01', '00'],
  ['00', '00', '01', '00', '00', '00', '00', '00', '00', '00'],
  ['01', '13', '01', '01', '01', '13', '01', '01', '13', '01'],
  ['00', '00', '01', '00', '00', '00', '01', '00', '00', '00'],
  ['00', '00', '01', '15', '00', '00', '01', '00', '00', '00']
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
  ['00', '00', '00', '00', '00', '00', '00', '00', '00', '00'],
  ['00', '00', '00', '00', '00', '00', '00', '00', '00', '00']
]

const floorTwo = {
  name: '普通二层',
  index: 'FloorTwo',
  next: 'FloorOne',
  last: 'FloorOne',
  originPosition: [4, 9],
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

export default floorTwo
