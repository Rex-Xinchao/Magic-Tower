import manual from '../manual/index'

const buildingList = [
  ['b_02', 'b_02', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_02', 'b_02'],
  ['b_02', 'b_02', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_02', 'b_02'],
  ['b_02', 'b_02', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_02', 'b_02'],
  ['b_02', 'b_02', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_02', 'b_02'],
  ['b_02', 'b_02', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_02', 'b_02'],
  ['b_02', 'b_02', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_02', 'b_02'],
  ['b_02', 'b_02', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_02', 'b_02'],
  ['b_02', 'b_02', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_02', 'b_02'],
  ['b_02', 'b_02', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_02', 'b_02'],
  ['b_02', 'b_02', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_02', 'b_02']
]

const otherList = [
  ['00', '00', 'i_01', '00', '00', '00', '00', '00', '00', '00', '00', '00'],
  ['00', '00', 'e_01', '00', '00', '00', '00', '00', '00', '00', '00', '00'],
  ['00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00'],
  ['00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00'],
  ['00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00'],
  ['00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00'],
  ['00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00'],
  ['00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00'],
  ['00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00'],
  ['00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00']
]

const floorOne = {
  name: '普通一层',
  index: 'FloorOne',
  next: 'FloorOne',
  last: null,
  originPosition: [5, 0],
  mapDoms: () => {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 12; j++) {
        const Building = manual[buildingList[i][j]]
        const Others = manual[otherList[i][j]]
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
        const tool = {
          isToolExist: false,
          toolDetail: null
        }
        if (otherList[i][j].includes('m_')) {
          const monsterDetail = new Others()
          monster.isExist = true
          monster.isDead = false
          monster.monsterDetail = monsterDetail
        }
        if (otherList[i][j].includes('c_')) {
          const npcDetail = new Others()
          npc.isNpcExist = true
          npc.npcDetail = npcDetail
        }
        if (otherList[i][j].includes('i_') || otherList[i][j].includes('e_')) {
          const toolDetail = new Others()
          tool.isToolExist = true
          tool.toolDetail = { ...toolDetail }
        }
        buildingList[i][j] = {
          ...position,
          ...building,
          ...monster,
          ...npc,
          ...tool
        }
      }
    }
    return buildingList
  }
}

export default floorOne
