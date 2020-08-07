import manual from '../manual/index'

const elementList = [
  ['b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00'],
  ['b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00'],
  ['b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00'],
  ['b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00'],
  ['b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00'],
  ['b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00'],
  ['b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00'],
  ['b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00'],
  ['b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00'],
  ['b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00', 'b_00']
]

const floorOne = {
  name: '怠惰之狱--三层',
  index: 'FloorTwo',
  next: 'FloorOne',
  last: null,
  originPosition: [6, 8],
  mapDoms: () => {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 12; j++) {
        const eId = elementList[i][j]
        const Element = manual[eId]
        let element = {
          isDead: false,
          monsterDetail: null,
          npcDetail: null,
          toolDetail: null,
          x: j,
          y: i
        }
        if (eId.includes('b_')) {
          const buildDetail = new Element()
          element = { ...element, ...buildDetail }
        }
        if (eId.includes('m_')) {
          const monsterDetail = new Element()
          element.isDead = false
          element.monsterDetail = monsterDetail
        }
        if (eId.includes('c_')) {
          const npcDetail = new Element()
          element.npcDetail = npcDetail
        }
        if (eId.includes('i_') || eId.includes('e_')) {
          const toolDetail = new Element()
          element.toolDetail = { ...toolDetail }
        }
        elementList[i][j] = element
      }
    }
    return elementList
  }
}

export default floorOne
