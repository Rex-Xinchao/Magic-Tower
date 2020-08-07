<template>
  <div class="map-show">
    <div class="line" v-for="(lineList, y) in mapList" :key="y">
      <div class="ceil" v-for="(item, x) in lineList" :key="x">
        <div class="map-item" :class="getBuildingClass(item)">
          <div
            class="monster"
            :class="item.monsterDetail.class"
            v-if="item.monsterDetail && !item.isDead"
            :title="getTitle(item.monsterDetail)"
          ></div>
          <div
            class="monster"
            :class="item.npcDetail.class"
            v-if="item.npcDetail"
            :title="item.npcDetail.description"
          ></div>
          <div
            class="item"
            :class="item.toolDetail.class"
            v-if="item.toolDetail"
            :title="item.toolDetail.Instruction"
          ></div>
          <div class="hero" v-if="rolePosition[0] === x && rolePosition[1] === y"></div>
        </div>
      </div>
      <div style="clear: both;"></div>
    </div>
    <Dialogue ref="dialogue"></Dialogue>
    <BattleLog ref="battleLog"></BattleLog>
  </div>
</template>

<script>
import Move from '../mixins/move' // 移动模块
import Battle from '../mixins/battle' // 战斗模块
import Tower from '@lib/dic/map/tower' // 楼层信息
import Dialogue from './dialogue'
import BattleLog from './battleLog'
import { mapGetters } from 'vuex'

export default {
  name: 'battleTest',
  data() {
    return {
      mapList: []
    }
  },
  components: { Dialogue, BattleLog },
  computed: {
    ...mapGetters(['hero', 'layerIndex', 'items', 'monsterManual'])
  },
  mixins: [Battle, Move],
  watch: {
    layerIndex(data) {
      this.initMap()
    }
  },
  methods: {
    initMap() {
      const Layer = Object.assign(Tower[this.layerIndex], this.$store.state.layer.layerMap[this.layerIndex]) // 获取当前楼层
      const originPosition = Layer.originPosition // 初始位置
      this.setRolePosition(originPosition, this.hero) // 初始化角色位置
      this.createMapList(Layer)
    },
    createMapList(Layer) {
      // 创建地图
      let mapList = this.$store.state.layer.map[this.layerIndex]
      if (mapList) {
        // 获取已经经过的map对象
        this.mapList = mapList
        this.setMapList(mapList)
      } else {
        mapList = Layer.mapDoms()
        this.mapList = mapList
        this.setMapList(mapList)
      }
    },
    getBuildingClass(item) {
      if (item.class) {
        if (item.class.indexOf('Door') >= 0) {
          return item.class + ' ' + (item.opened ? 'closeDoor' : 'openDoor')
        } else {
          return item.class
        }
      }
    },
    getTitle(monster) {
      if (monster) {
        if (this.monsterManual.includes(monster.manualNumber)) {
          return `怪物名称：${monster.Name}\n生命：${monster.Health}\n物攻：${monster.Attack}\n物防：${monster.Defense}\n魔攻：${monster.MagicAttack}\n魔防：${monster.MagicDefense}\n灵巧：${monster.Dexterous}\n幸运：${monster.Luck}\n`
        }
        return ''
      }
      return ''
    },
    showDialogue(npc) {
      this.$refs.dialogue.showDialog(npc)
    }
  },
  mounted() {
    this.initMap()
  }
}
</script>

<style lang="scss" scoped>
@import '@style/coms/map';
</style>
