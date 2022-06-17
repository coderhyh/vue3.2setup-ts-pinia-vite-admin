<template>
  <el-container>
    <el-aside width="200px">
      <Layout.Aside />
    </el-aside>
    <el-container>
      <el-header><Layout.Header /></el-header>
      <el-main>
        <router-view v-slot="{ Component, route }">
          <transition name="fade-transform" mode="out-in">
            <keep-alive :include="tabs.map(i => i.name.slice(1))">
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
.layout {
}
</style>
