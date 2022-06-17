export default defineStore({
  id: 'user',
  persist: {
    // 开启持久化
    enabled: true,
  },
  state: () => ({ name: '黄玉豪' }),
  getters: {},
  actions: {},
})
