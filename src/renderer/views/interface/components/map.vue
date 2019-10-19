<template>
    <div class="map-show">
        <div class="ceil"
             v-for="(item, index) in mapList"
             :key="index"
             :class="getClass(item)">
            <div class="monster"
                 v-if="item.type === 'monster' && !item.IsDead">
                {{item.Name}}
            </div>
            <div v-if="index === rolePosition">Hero</div>
        </div>
    </div>
</template>

<script>
import Move from '../mixins/move' // 移动模块
import Battle from '../mixins/battle' // 战斗模块
import MonsterManual from '../../../../../static/dic/monster/monsterManual' // 怪物图鉴
import BuildingManual from '../../../../../static/dic/map/buildingManual' // 建筑物模块
import Tower from '../../../../../static/dic/map/tower' // 楼层信息
import { mapGetters } from 'vuex'
// import layer from "../../../store/modules/layer"

export default {
  name: 'battleTest',
  data () {
    return {
      mapList: []
    }
  },
  computed: {
    ...mapGetters([
      'hero',
      'layerIndex',
      'items'
    ])
  },
  mixins: [Battle, Move],
  watch: {
    layerIndex (data) {
      this.initMap()
    }
  },
  methods: {
    initMap () {
      const Layer = Object.assign(Tower[this.layerIndex], this.$store.state.layer.layerMap[this.layerIndex]) // 获取当前楼层
      const originPosition = Layer.originPosition // 初始位置
      this.setRolePosition(originPosition, this.hero) // 初始化角色位置
      this.createMapList(Layer)
    },
    createMapList (Layer) { // 创建地图
      if (this.$store.state.layer.map[this.layerIndex]) { // 获取已经经过的map对象
        this.mapList = this.$store.state.layer.map[this.layerIndex]
        this.setMapList(this.$store.state.layer.map[this.layerIndex])
      } else {
        let list = []
        Layer.mapDoms.forEach(dom => {
          let obj = {} // 地图元素
          if (dom.type === 'monster') { // 生成怪物
            let Monster = MonsterManual[dom.id]
            obj = Object.assign({}, dom, new Monster())
          } else { // 生成建筑信息
            let Building = BuildingManual[dom.id]
            obj = Object.assign({}, dom, new Building())
          }
          // todo 未来考虑添加npc
          list.push(obj)
        })
        this.mapList = list
        this.setMapList(list)
      }
    },
    getClass (item) {
      if (item.class) {
        if (item.class.indexOf('Door') >= 0) {
          return item.class + ' ' + (item.opened ? 'openDoor' : 'closeDoor')
        } else {
          return item.class
        }
      }
    }
  },
  mounted () {
    this.initMap()
    // todo 测试使用，需要删除
    this.$store.commit('getEquipment', 'brokenSword')
    this.$store.commit('getTool', 'HealingPotion_Small')
    this.$store.commit('getTool', 'HealingPotion_Small')
    this.$store.commit('getEquipment', 'stone')
    this.$store.commit('equip', 'brokenSword')
    this.$store.commit('equip', 'stone')
  }
}
</script>

<style lang="scss" scoped>
    @import "../../../../../static/styles/coms/map";
</style>
