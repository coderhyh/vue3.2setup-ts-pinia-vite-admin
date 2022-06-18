<template>
  <el-icon :size="size">
    <div :class="className"></div>
  </el-icon>
</template>

<script setup lang="ts">
const props = defineProps<{
  icon?: string | unknown
  size?: string
}>()

const className = computed(() => {
  const { icon } = props
  return [icon || 'carbon:unknown']
})
</script>

<style scoped>
</style>
