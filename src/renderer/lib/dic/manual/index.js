import building from './building'
import npc from './npc'
import monster from './monster'
import item from './item'

const manual = { ...building, ...npc, ...monster, ...item }

export default manual
