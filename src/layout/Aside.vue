<template>
  <div class="Aside">
    <el-menu
      router
      :default-active="route.path"
      :collapse="isCollapse"
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#409EFF"
    >
      <TreeMenu :menuList="menuList"></TreeMenu>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { routes } from '~/router/routes'
const menuList = ref(routes[0].children)
const { isCollapse } = useStore('app')

const route = useRoute()
</script>

<style lang="less" scoped>
.Aside {
  overflow: hidden;
  width: auto;
  height: 100vh;
  background: #304156;
  :deep(.el-menu--vertical) {
    margin-top: 60px;
    border: 0 !important;
    width: 250px;
  }
  :deep(.el-menu--collapse) {
    width: 70px;
  }
}
</style>
