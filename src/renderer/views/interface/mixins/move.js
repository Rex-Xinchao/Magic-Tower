// 外度调用需要设置角色初始位置和角色信息并生成地图对象
const DOOR_LIST = ['redDoor', 'greenDoor', 'blueDoor']
const STAIRWAY_LIST = ['stairway_up', 'stairway_down']
const UU_REMOVE_LIST = ['wall', 'statue']
const FANCE_LIST = ['fence']
const SWITCH_LIST = ['switch']
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
    setMapList(list) {
      this.mapDetails = list
    },
    // 角色移动
    move([x, y]) {
      let move = true
      if (x < 0 || x >= 12 || y < 0 || y >= 10) return false
      const currentMap = this.mapDetails[y][x]
      if (currentMap.monsterDetail && !currentMap.isDead) {
        // 存在活的怪物
        this.monster = { ...currentMap.monsterDetail } // 设置怪物对象
        const Health = this.role.Health
        this.battleStart() // 调用战斗模块
        if (this.role.Health) {
          this.monster.isDead = true // 怪物死亡
          currentMap.isDead = true
        } else {
          this.role.Health = Health
          this.$message.error('怪物太过强大，大侠请谨慎出击')
          move = false // 打不过，禁止移动
        }
      } else if (currentMap.npcDetail) {
        // 存在npc
        this.showDialogue(currentMap.npcDetail)
        move = false
      } else if (currentMap.toolDetail && currentMap.IsExist) {
        // 存在物品
        if (currentMap.toolDetail.Type === 'tool') {
          currentMap.toolDetail.effect(this, currentMap)
        } else {
          this.$store.commit('getEquipment', currentMap.toolDetail.Id)
        }
        currentMap.isToolExist = false
        move = true
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
          move = currentMap.func(currentMap, this)
        } else if (SWITCH_LIST.indexOf(currentMap.class) >= 0) {
          // 撞开关
          currentMap.func(this.mapList, currentMap)
          move = true
        } else if (FANCE_LIST.indexOf(currentMap.class) >= 0) {
          // 撞栏杆
          move = currentMap.func(currentMap)
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
      if (e.keyCode === 83) {
        // save
        this.$store.commit('saveData', this.rolePosition)
        this.$message.success('读存成功')
        return
      }
      if (e.keyCode === 76) {
        // load
        this.$store.commit('loadData')
        this.initMap()
        this.$message.success('读档成功')
        return
      }
      if (e.keyCode === 32) {
        // enter
        return
      }
      this.move([x, y]) && (this.rolePosition = [x, y])
    }
  }
}
export default move
