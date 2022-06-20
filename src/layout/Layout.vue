<template>
  <el-container>
    <el-aside width="250px">
      <Layout.Aside />
    </el-aside>
    <el-container>
      <el-header>
        <Layout.Header />
      </el-header>
      <el-main>
        <router-view v-slot="{ Component, route }">
          <transition name="fade-transform" mode="out-in">
            <keep-alive :include="tabs.map(i => i.path.slice(1))">
              <component :is="Component" :key="route.name"></component>
            </keep-alive>
          </transition>
        </router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import * as Layout from '~/layout'
const { tabs } = useStore('app')
</script>

<style lang="less" scoped>
:deep(.el-container) {
  .el-header {
    background: white;
    padding: 0;
    height: 100px;
  }

  .el-main {
    overflow-x: hidden;
    background: #FAFAFA;
  }
}
</style>
