import { getMapDom } from '../lib/getMapDom'

const elementList = [
  ['b_14', 'b_00', 'b_00', 'm_21', 'i_09', 'b_01', 'b_00', 'b_13', 'i_09', 'b_01', 'i_03', 'i_10'],
  ['b_02', 'b_02', 'b_00', 'b_02', 'b_02', 'b_01', 'b_00', 'b_01', 'i_08', 'b_01', 'i_09', 'i_09'],
  ['b_02', 'b_02', 'm_21', 'b_02', 'b_02', 'b_01', 'b_00', 'b_01', 'm_08', 'b_12', 'm_22', 'e_03'],
  ['b_02', 'b_00', 'b_00', 'b_00', 'b_02', 'b_01', 'm_17', 'b_01', 'm_17', 'b_01', 'i_09', 'i_03'],
  ['i_06', 'm_32', 'b_00', 'm_32', 'i_08', 'b_01', 'm_08', 'b_01', 'b_00', 'b_01', 'i_03', 'i_12'],
  ['m_21', 'i_04', 'm_08', 'i_04', 'm_21', 'b_01', 'b_00', 'b_01', 'b_00', 'b_01', 'b_01', 'b_01'],
  ['b_00', 'm_08', 'i_04', 'm_08', 'b_00', 'b_01', 'b_13', 'b_01', 'b_00', 'b_01', 'b_15', 'b_00'],
  ['b_02', 'i_04', 'm_05', 'i_04', 'b_02', 'b_01', 'b_00', 'b_01', 'm_17', 'b_13', 'b_00', 'i_08'],
  ['b_02', 'b_02', 'b_00', 'b_02', 'b_02', 'b_01', 'i_09', 'b_01', 'i_04', 'b_01', 'i_05', 'i_04'],
  ['b_02', 'b_02', 'c_04', 'b_02', 'b_02', 'b_14', 'i_06', 'b_01', 'i_06', 'b_01', 'i_04', 'i_04']
]

const stairway = {
  '10_6': [10, 7], // 上一层
  '0_0': [0, 1], // 下一层
  '5_9': [6, 9] // 下一层
}

const LazyTwo = {
  name: '怠惰之狱--四层',
  index: 'LazyFour',
  next: 'LazyLast',
  last: 'LazyThree',
  mapDoms: getMapDom(elementList, stairway)
}

export default LazyTwo
