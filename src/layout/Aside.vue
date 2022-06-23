<template>
  <div class="Aside">
    <section>
      <img src="https://coderhyh.top/logo.png" alt="logo" />
      <h2 v-if="!isCollapse" class="title snh">coderhyh</h2>
    </section>
    <el-menu
      router
      :default-active="route.path"
      :collapse="isCollapse"
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#409EFF"
    >
      <TreeMenu :menu-list="menuList"></TreeMenu>
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
  position: relative;
  width: auto;
  height: 100vh;
  background: #304156;
  section {
    display: flex;
    position: absolute;
    top: 6px;
    z-index: 999;
    justify-content: center;
    align-items: center;
    width: 100%;
    user-select: none;
    .title {
      text-align: center;
      font-size: 25px;
      color: white;
    }
    img {
      margin-right: 5px;
      border-radius: 5px;
      width: 34px;
      height: 34px;
    }
  }
  :deep(.el-menu--vertical) {
    margin-top: 40px;
    border: 0 !important;
    width: 250px;
  }
  :deep(.el-menu--collapse) {
    width: 70px;
  }
}
</style>
