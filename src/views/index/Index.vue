<template>
  <div class="index">
    <el-button>{{ name }}</el-button>
    <div class="carbon:close hover:carbon:close-filled close-icon"></div>
  </div>
</template>

<script setup lang="ts">
const { name } = useStore("user");
</script>

<style lang="less" scoped>
.index {}
</style>
