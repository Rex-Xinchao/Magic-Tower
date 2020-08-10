import manual from '../../manual/index'
const rowIndex = 10
const colIndex = 12
const getMapDom = (elementList, stairway = [], switchFance = []) => {
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
        if (eId === 'b_14' || eId === 'b_15') {
          const nextPosition = stairway[`${j}_${i}`]
          const buildDetail = new Element(nextPosition)
          element = { ...element, ...buildDetail }
        } else if (eId === 'b_04') {
          const buildDetail = new Element({ x: j, y: i })
          element = { ...element, ...buildDetail }
        } else if (eId === 'b_05') {
          const fencePosition = switchFance[`${j}_${i}`]
          const buildDetail = new Element(fencePosition)
          element = { ...element, ...buildDetail }
        } else {
          const buildDetail = new Element()
          element = { ...element, ...buildDetail }
        }
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
