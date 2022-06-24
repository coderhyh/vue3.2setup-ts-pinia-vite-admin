<template>
  <div class="index">
    <!-- <Graph />
    <Earth /> -->
    <p v-for="item in 300" :key="item">{{ item }}</p>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.index {
  // display: flex;
  // flex-wrap: wrap;
  background: #fafafa;
}
</style>
