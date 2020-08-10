import manual from '../../manual/index'
const rowIndex = 10
const colIndex = 12
const getMapDom = (elementList) => {
  for (let i = 0; i < rowIndex; i++) {
    for (let j = 0; j < colIndex; j++) {
      const eId = elementList[i][j]
      const Element = manual[eId]
      let element = {
        isDead: false,
        IsExist: false,
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
        element.IsExist = true
        element.toolDetail = { ...toolDetail }
      }
      elementList[i][j] = element
    }
  }
  return elementList
}

export { getMapDom }
