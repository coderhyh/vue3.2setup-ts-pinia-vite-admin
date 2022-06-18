<template>
  <div class="index">
    <el-button>{{ name }}</el-button>
  </div>
</template>

<script setup lang="ts">
const { name } = useStore("user");
</script>

<style lang="less" scoped>
.index {
  background: #FAFAFA;
}
</style>
