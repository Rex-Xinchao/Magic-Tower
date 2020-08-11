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
          >
            {{ item.monsterDetail && item.monsterDetail.Name }}
          </div>
          <div class="monster" :class="item.npcDetail.class" v-if="item.npcDetail" :title="item.npcDetail.description">
            {{ item.npcDetail && item.npcDetail.Name }}
          </div>
          <div
            class="item"
            :class="item.toolDetail.class"
            v-if="item.toolDetail && item.IsExist"
            :title="item.toolDetail.Instruction"
          >
            {{ item.toolDetail && item.toolDetail.Name }}
          </div>
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
    ...mapGetters(['hero', 'layerIndex', 'items', 'monsterManual', 'nextPosition', 'saveData'])
  },
  mixins: [Battle, Move],
  watch: {
    layerIndex(data) {
      this.initMap()
    }
  },
  methods: {
    initMap() {
      const originPosition = this.nextPosition // 初始位置
      this.setRolePosition(originPosition, this.hero) // 初始化角色位置
      this.mapList = this.$store.state.layer.map[this.layerIndex]
      this.setMapList(this.mapList)
    },
    getBuildingClass(item) {
      if (item.class) {
        if (item.opened) {
          return ''
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
    this.$store.commit('initFlour')
    this.initMap()
  }
}
</script>

<style lang="scss" scoped>
@import '@style/coms/map';
</style>
