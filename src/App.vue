<template>
  <el-config-provider :locale="zhCn">
    <router-view />
  </el-config-provider>
</template>

<script lang="ts" setup>
import zhCn from 'element-plus/lib/locale/lang/zh-cn'

import echarts from '~/common/initEcharts'
provide('echarts', echarts)
</script>

<style lang="less" scoped>
// .App {}
</style>
<style lang="less">
html {
  overflow: hidden;
}
</style>
