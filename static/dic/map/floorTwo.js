const floorTwo = {
  mapDoms: getDoms(),
  name: '普通二层',
  index: 'FloorTwo',
  next: 'FloorOne',
  last: 'FloorOne',
  originPosition: 94
}

function getDoms () {
  let list = []
  const wallMap = {
    0: [],
    1: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    2: [4, 8],
    3: [2, 4, 5, 6, 8],
    4: [0, 2, 8],
    5: [2, 4, 5, 6, 7, 8],
    6: [2],
    7: [0, 2, 3, 4, 6, 7, 9],
    8: [2, 6],
    9: [2, 6]
  }
  const blueDoorMap = {
    0: [],
    1: [],
    2: [2],
    3: [7],
    4: [1, 4],
    5: [],
    6: [],
    7: [1, 5, 8],
    8: [],
    9: []
  }
  const stairwayDownMap = {
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: [],
    9: [3]
  }
  const stairwayUpMap = {
    0: [0],
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: [],
    9: [3]
  }
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      let obj = { x: i, y: j, type: 'building', id: 0 }
      if (wallMap[i].indexOf(j) >= 0) {
        obj.type = 'building'
        obj.id = 1 // 墙
      }
      if (blueDoorMap[i].indexOf(j) >= 0) {
        obj.type = 'building'
        obj.id = 13 // 蓝门
      }
      if (stairwayDownMap[i].indexOf(j) >= 0) {
        obj.type = 'building'
        obj.id = 15 // 楼梯
      }
      if (stairwayUpMap[i].indexOf(j) >= 0) {
        obj.type = 'building'
        obj.id = 14 // 楼梯
      }
      list.push(obj)
    }
  }
  return list
}

export default floorTwo
