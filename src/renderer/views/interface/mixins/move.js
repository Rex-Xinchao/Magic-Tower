// 外度调用需要设置角色初始位置和角色信息并生成地图对象
const DOOR_LIST = ['redDoor', 'greenDoor', 'BlueDoor']
const STAIRWAY_LIST = ['stairway_up', 'stairway_down']
const UU_REMOVE_LIST = ['wall', 'statue']
const move = {
  data () {
    return {
      mapLength: 99,
      rowIndex: 10, // 跨行
      colIndex: 1, // 跨列
      rolePosition: 0, // 当前角色位置
      mapDetails: [], // 地图详情
      role: null, // 游戏角色
      monster: null // 当前遭遇怪物
    }
  },
  methods: {
    // 设置角色初始位置
    setRolePosition (positiom, role) {
      this.rolePosition = positiom
      this.role = role
    },
    // 设置地图对象
    setMapList (list, layer) {
      this.mapDetails = list
    },
    // 角色移动
    move (nextPosition) {
      let move = true
      console.log(nextPosition)
      if (nextPosition < 0 || nextPosition > this.mapLength) { // 超出范围
        move = false
      } else if (this.mapDetails[nextPosition].type === 'building') { // 存在建筑物
        if (UU_REMOVE_LIST.indexOf(this.mapDetails[nextPosition].class) >= 0) { // 撞墙
          move = false
        } else if (DOOR_LIST.indexOf(this.mapDetails[nextPosition].class) >= 0) { // 撞门
          move = this.mapDetails[nextPosition].func(this.items, this.mapDetails[nextPosition])
        } else if (STAIRWAY_LIST.indexOf(this.mapDetails[nextPosition].class) >= 0) { // 撞楼梯
          move = this.mapDetails[nextPosition].func(this.items, this.mapDetails[nextPosition], this)
        } else {
          move = true
        }
      } else if (this.mapDetails[nextPosition].type === 'monster' && this.mapDetails[nextPosition].IsDead === false) { // 存在活的怪物
        this.monster = this.mapDetails[nextPosition] // 设置怪物对象
        this.battleStart() // 调用战斗模块
        if (this.role.Health) {
          this.monster.IsDead = true // 怪物死亡
        } else {
          move = false // 打不过，禁止移动
        }
      }
      return move
    }
  },
  mounted () {
    document.onkeydown = e => { // 全局监听键盘事件移动角色
      if (e.keyCode === 38) { // 向上
        let nextPosition = this.rolePosition - this.rowIndex
        this.move(nextPosition) && (this.rolePosition = nextPosition)
      }
      if (e.keyCode === 40) { // 向下
        let nextPosition = this.rolePosition + this.rowIndex
        this.move(nextPosition) && (this.rolePosition = nextPosition)
      }
      if (e.keyCode === 37 && this.rolePosition % 10 !== 0) { // 向左
        let nextPosition = this.rolePosition - this.colIndex
        this.move(nextPosition) && (this.rolePosition = nextPosition)
      }
      if (e.keyCode === 39 && this.rolePosition % 10 !== 9) { // 向右
        let nextPosition = this.rolePosition + this.colIndex
        this.move(nextPosition) && (this.rolePosition = nextPosition)
      }
    }
  }
}
export default move
