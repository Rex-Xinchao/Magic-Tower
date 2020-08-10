import { getMapDom } from './lib/getMapDom'
const elementList = [
  ['b_02', 'b_02', 'b_01', 'b_03', 'b_00', 'c_01', 'b_00', 'b_00', 'b_03', 'b_01', 'b_02', 'b_02'],
  ['b_02', 'b_02', 'b_01', 'b_03', 'b_00', 'b_00', 'b_00', 'b_00', 'b_03', 'b_01', 'b_02', 'b_02'],
  ['b_02', 'b_02', 'b_01', 'b_03', 'b_00', 'b_00', 'b_00', 'b_00', 'b_03', 'b_01', 'b_02', 'b_02'],
  ['b_02', 'b_02', 'b_01', 'b_03', 'b_00', 'b_00', 'b_00', 'b_00', 'b_03', 'b_01', 'b_02', 'b_02'],
  ['b_02', 'b_02', 'b_01', 'b_03', 'b_00', 'b_00', 'b_00', 'b_00', 'b_03', 'b_01', 'b_02', 'b_02'],
  ['b_02', 'b_02', 'b_01', 'b_03', 'b_00', 'b_00', 'b_00', 'b_00', 'b_03', 'b_01', 'b_02', 'b_02'],
  ['b_02', 'b_02', 'b_01', 'b_03', 'b_00', 'b_00', 'b_00', 'b_00', 'b_03', 'b_01', 'b_02', 'b_02'],
  ['b_02', 'b_02', 'b_01', 'b_03', 'b_00', 'b_00', 'b_00', 'b_00', 'b_03', 'b_01', 'b_02', 'b_02'],
  ['b_02', 'b_02', 'b_01', 'b_03', 'b_00', 'b_00', 'b_00', 'b_00', 'b_03', 'b_01', 'b_02', 'b_02'],
  ['b_02', 'b_02', 'b_01', 'b_03', 'b_00', 'b_00', 'b_00', 'b_14', 'b_03', 'b_01', 'b_02', 'b_02']
]

const StartFloor = {
  name: '起始之地',
  index: 'StartFloor',
  next: 'LazyOne',
  last: null,
  originPosition: [6, 0],
  mapDoms: getMapDom(elementList)
}

export default StartFloor
