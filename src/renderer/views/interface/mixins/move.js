// 外度调用需要设置角色初始位置和角色信息并生成地图对象
const DOOR_LIST = ['redDoor', 'greenDoor', 'blueDoor']
const STAIRWAY_LIST = ['stairway_up', 'stairway_down']
const UU_REMOVE_LIST = ['wall', 'statue']
const move = {
  data() {
    return {
      rolePosition: [0, 0], // 当前角色位置
      mapDetails: [], // 地图详情
      role: null, // 游戏角色
      monster: null // 当前遭遇怪物
    }
  },
  methods: {
    // 设置角色初始位置
    setRolePosition(position, role) {
      this.rolePosition = position
      this.role = role
    },
    // 设置地图对象
    setMapList(list, layer) {
      this.mapDetails = list
    },
    // 角色移动
    move([x, y]) {
      let move = true
      if (x < 0 || x >= 10 || y < 0 || y >= 10) return false
      const currentMap = this.mapDetails[y][x]
      if (currentMap.isExist && !currentMap.isDead) {
        // 存在活的怪物
        this.monster = { ...currentMap.monsterDetail } // 设置怪物对象
        const Health = this.role.Health
        this.battleStart() // 调用战斗模块
        if (this.role.Health) {
          this.monster.isDead = true // 怪物死亡
          currentMap.isDead = true
        } else {
          this.role.Health = Health
          move = false // 打不过，禁止移动
        }
      } else if (currentMap.isNpcExist) {
        // 存在npc
        this.showDialogue(currentMap.npcDetail)
        move = false
      } else {
        // 存在建筑物
        if (UU_REMOVE_LIST.indexOf(currentMap.class) >= 0) {
          // 撞墙
          move = false
        } else if (DOOR_LIST.indexOf(currentMap.class) >= 0) {
          // 撞门
          move = currentMap.func(this.items, currentMap)
        } else if (STAIRWAY_LIST.indexOf(currentMap.class) >= 0) {
          // 撞楼梯
          move = currentMap.func(this.items, currentMap, this)
        } else {
          move = true
        }
      }
      return move
    }
  },
  mounted() {
    document.onkeydown = (e) => {
      // 全局监听键盘事件移动角色
      let x = this.rolePosition[0]
      let y = this.rolePosition[1]
      if (e.keyCode === 38) {
        // 向上
        y -= 1
      }
      if (e.keyCode === 40) {
        // 向下
        y += 1
      }
      if (e.keyCode === 37) {
        // 向左
        x -= 1
      }
      if (e.keyCode === 39) {
        // 向右
        x += 1
      }
      this.move([x, y]) && (this.rolePosition = [x, y])
    }
  }
}
export default move
