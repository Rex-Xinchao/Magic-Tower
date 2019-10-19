const floorOne = {
  mapDoms: getDoms(),
  name: '普通一层',
  index: 'FloorOne',
  next: 'FloorTwo',
  last: null,
  originPosition: 5
}

function getDoms () {
  let list = []
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      let obj = { x: i, y: j, type: 'building', id: 0 }
      if (j === 2 || j === 7) {
        obj.type = 'building'
        obj.id = 1 // 墙
      } else if (j === 3 || j === 6) {
        obj.type = 'building'
        obj.id = 3 // 雕像
      } else if (i === 9 && j === 5) {
        obj.type = 'building'
        obj.id = 14 // 楼梯
      }
      list.push(obj)
    }
  }
  return list
}

export default floorOne
