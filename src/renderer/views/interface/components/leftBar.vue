<template>
    <div class="left-bar">
        <div class="container">
            <div class="tower-information">
                <h1>{{layerName}}</h1>
            </div>
            <ul class="role-information">
                <li>
                    <span class="label">等级</span>
                    <span class="value">{{hero.Level}}</span>
                </li>
                <li>
                    <span class="label">经验</span>
                    <span class="value">{{`${hero.Experience} / ${hero.NextLevelExperience}`}}</span>
                </li>
            </ul>
            <ul class="attribute-list">
                <li v-for="(attr, index) in attributeList" :key="index">
                    <span class="label">{{attr.key}}</span>
                    <span class="value">
                        {{hero[attr.value]}}
                        <b v-if="attr.value !== 'Health'" class="addition" title="装备加成">{{` +(${addition[attr.value] || 0})`}}</b>
                    </span>
                </li>
            </ul>
            <ul class="item-list">
                <li v-for="(item, index) in itemList" :key="index">
                    <span class="label">{{item.key}}</span>
                    <span class="value">{{items[item.value]}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'role',
  props: [],
  data () {
    return {
      attributeList: [
        { key: '生命', value: 'Health' },
        { key: '物攻', value: 'Attack' },
        { key: '物防', value: 'Defense' },
        { key: '魔攻', value: 'MagicAttack' },
        { key: '魔防', value: 'MagicDefense' },
        { key: '灵巧', value: 'Dexterous' },
        { key: '幸运', value: 'Luck' }
      ],
      itemList: [
        { key: '金币', value: 'Money' },
        { key: '红钥匙', value: 'RedKey' },
        { key: '绿钥匙', value: 'GreenKey' },
        { key: '蓝钥匙', value: 'BlueKey' }
      ]
    }
  },
  computed: {
    ...mapGetters([
      'hero',
      'addition',
      'items',
      'layerName'
    ])
  }
}
</script>

<style lang="scss" scoped>
    @import "@style/coms/siderBar";
</style>
