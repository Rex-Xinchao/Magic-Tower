<template>
    <div class="interface-container">
        <LeftBar></LeftBar>
        <div class="storey-container">
            <Map></Map>
        </div>
        <RightBar></RightBar>
    </div>
</template>

<script>
import LeftBar from './components/leftBar'
import RightBar from './components/rightBar'
import Map from './components/map'

export default {
  name: 'interface',
  components: { LeftBar, RightBar, Map }
}
</script>

<style lang="scss" scoped>
    @import "../../../../static/styles/interface";
</style>
