<template>
  <div class="Aside">
    <h2 class="Aside-title">vue-ts-vite-pinia-admin</h2>
    <el-menu router :default-active="route.path" :collapse="false" background-color="#304156" text-color="#bfcbd9"
      active-text-color="#409EFF">
      <TreeMenu :menuList="menuList"></TreeMenu>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { routes } from '~/router/routes'
const menuList = ref(routes[0].children)
const route = useRoute()
const menuList1 = ref<Menu[]>([
  {
    parent: 0,
    name: "控制台",
    id: 13,
    url: "/",
    icon: "clarity:dashboard-solid"
  },
  {
    parent: 0,
    name: "文档",
    id: 8,
    url: "/documentation",
    icon: 'ri:treasure-map-fill'
  },
  {
    parent: 0,
    name: "管理",
    id: 15,
    url: "",
    icon: 'ic:baseline-support-agent',
    children: [
      {
        parent: 15,
        name: "角色管理",
        id: 16,
        url: "/manage",
        icon: 'ic:round-import-contacts'
      }
    ]
  },
  {
    parent: 0,
    name: "信息",
    id: 9,
    url: "xinxi",
    icon: 'carbon:shopping-cart',
    children: [
      {
        parent: 0,
        name: "人员信息",
        id: 10,
        url: "/pricing",
        icon: 'carbon:shopping-cart',
      }
    ]
  }
]
)
</script>

<style lang="less" scoped>
.Aside {
  height: 100vh;
  background: #304156;

  &-title {
    line-height: 60px;
    text-align: center;
    font-size: 21px;
    background: #EBAA4B;
    color: white;
  }
}
</style>
