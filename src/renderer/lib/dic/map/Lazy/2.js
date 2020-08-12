import { getMapDom } from '../lib/getMapDom'

const elementList = [
  ['b_15', 'b_01', 'i_04', 'i_04', 'b_01', 'e_02', 'b_01', 'b_00', 'b_13', 'b_00', 'b_01', 'i_10'],
  ['b_00', 'b_01', 'i_05', 'm_11', 'm_16', 'i_06', 'b_01', 'b_00', 'b_01', 'm_08', 'b_12', 'm_17'],
  ['b_00', 'b_01', 'b_01', 'b_13', 'b_01', 'i_14', 'b_01', 'i_04', 'b_01', 'm_26', 'b_01', 'm_08'],
  ['m_02', 'm_06', 'm_02', 'b_00', 'b_01', 'b_01', 'b_01', 'm_26', 'b_01', 'i_04', 'b_01', 'i_09'],
  ['b_01', 'b_01', 'b_01', 'b_00', 'm_21', 'b_11', 'b_00', 'm_08', 'b_01', 'i_04', 'b_01', 'b_00'],
  ['b_00', 'b_00', 'b_00', 'b_00', 'b_01', 'b_01', 'b_01', 'b_01', 'b_01', 'b_01', 'b_01', 'b_13'],
  ['b_13', 'b_01', 'b_01', 'b_13', 'b_01', 'b_01', 'i_09', 'i_03', 'i_02', 'b_01', 'i_09', 'm_08'],
  ['m_11', 'b_01', 'i_03', 'm_06', 'i_03', 'b_01', 'e_91', 'i_09', 'm_24', 'b_12', 'm_23', 'b_00'],
  ['m_06', 'b_01', 'i_06', 'i_02', 'i_04', 'b_01', 'i_09', 'i_03', 'i_03', 'b_01', 'i_09', 'i_11'],
  ['b_14', 'b_01', 'i_08', 'i_04', 'i_02', 'b_01', 'b_01', 'b_01', 'b_01', 'b_01', 'i_13', 'e_03']
]

const stairway = {
  '0_0': [1, 0], // 上一层
  '0_9': [1, 9]// 下一层
}

const LazyTwo = {
  name: '怠惰之狱--二层',
  index: 'LazyTwo',
  next: 'LazyThree',
  last: 'LazyOne',
  mapDoms: getMapDom(elementList, stairway)
}

export default LazyTwo
