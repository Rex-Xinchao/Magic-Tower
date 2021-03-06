import { getMapDom } from '../lib/getMapDom'

const elementList = [
  ['b_01', 'b_00', 'c_03', 'b_00', 'b_01', 'i_04', 'i_05', 'b_01', 'e_03', 'i_04', 'i_03', 'i_08'],
  ['b_01', 'b_00', 'b_00', 'b_00', 'b_01', 'i_07', 'm_16', 'b_01', 'i_04', 'i_02', 'm_17', 'i_03'],
  ['b_01', 'b_01', 'b_11', 'b_01', 'b_01', 'b_01', 'b_13', 'b_01', 'b_01', 'b_01', 'b_12', 'b_01'],
  ['i_06', 'b_13', 'm_07', 'b_00', 'b_00', 'b_00', 'b_00', 'b_13', 'm_07', 'b_00', 'm_07', 'b_01'],
  ['b_01', 'b_01', 'b_00', 'm_04', 'b_01', 'b_01', 'b_01', 'b_01', 'b_01', 'b_01', 'i_04', 'b_01'],
  ['i_02', 'b_01', 'b_01', 'm_03', 'b_01', 'i_01', 'i_04', 'm_07', 'i_04', 'b_01', 'b_01', 'b_01'],
  ['m_13', 'i_03', 'b_01', 'm_04', 'b_01', 'i_05', 'b_01', 'i_03', 'm_16', 'b_01', 'b_14', 'b_00'],
  ['i_03', 'm_12', 'b_13', 'b_00', 'b_01', 'b_01', 'b_01', 'b_01', 'b_12', 'b_01', 'b_00', 'b_00'],
  ['b_01', 'b_01', 'b_01', 'b_00', 'b_00', 'm_03', 'b_00', 'm_03', 'b_00', 'b_12', 'm_12', 'b_00'],
  ['b_15', 'b_00', 'b_00', 'b_00', 'b_00', 'b_01', 'i_04', 'b_01', 'i_04', 'b_01', 'b_01', 'b_01']
]

const stairway = {
  '0_9': [0, 8], // 上一层
  '10_6': [10, 7] // 下一层
}

const LazyTwo = {
  name: '怠惰之狱--三层',
  index: 'LazyThree',
  next: 'LazyFour',
  last: 'LazyTwo',
  mapDoms: getMapDom(elementList, stairway)
}

export default LazyTwo
