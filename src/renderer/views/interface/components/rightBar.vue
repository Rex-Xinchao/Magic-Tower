<template>
    <div class="right-bar">
        <div class="container">
            <div class="equipment-bar">
                <h2>装备栏</h2>
                <ul>
                    <li class="equipment-li"
                        v-for="index in 8" :key="index"
                        :title="equipped[index - 1] ? equipped[index - 1].Instruction : ''">
                        {{equipped[index - 1] ? equipped[index - 1].Name : ''}}
                        <ul class="operate-list"
                            v-if="equipped[index - 1] ? equipped[index - 1].Name : ''">
                            <li @click="drop(equipped[index - 1])">卸下</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="equipment-box">
                <h2>道具箱</h2>
                <ul v-if="equipments.length || tools.length">
                    <li class="equipment-li"
                        v-for="item in [...equipments, ...tools]"
                        :key="item.Name"
                        :title="`${item.Instruction}， 拥有数量：${(item.sum || 1)}`">
                        {{item.Name}}
                        <ul class="operate-list" v-if="item.Name">
                            <li v-if="item.Type === 'tool'" @click="use(item)">使用</li>
                            <li v-else @click="equip(item)">装备</li>
                            <li @click="del(item)">丢弃</li>
                        </ul>
                    </li>
                </ul>
                <span class="no-item-info" v-else>暂无道具</span>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import itemEvent from '../mixins/itemEvent'

export default {
  name: 'equipment',
  mixins: [itemEvent],
  computed: {
    ...mapGetters([
      'equipments',
      'tools',
      'equipped'
    ])
  }
}
</script>

<style lang="scss" scoped>
    @import "../../../../../static/styles/coms/siderBar";
</style>
