const defaultTab: App.Tab = { title: '控制台', path: '/' }

export default defineStore({
  id: 'app',
  persist: {
    // 开启持久化
    enabled: true,
  },
  state: () => {
    return {
      isCollapse: false,
      tabs: [defaultTab],
    }
  },
  actions: {
    updateCollapse() {
      this.isCollapse = !this.isCollapse
    },
    addTab(tab: App.Tab = defaultTab) {
      if (this.tabs.some((t) => t.path === tab.path)) return
      this.tabs.push(tab)
    },
    removeTab(path: string) {
      this.tabs = this.tabs.filter((t) => t.path !== path)
      if (this.tabs.length === 0) this.addTab()
    },
    removeOtherTab(path: string) {
      this.tabs = this.tabs.filter((t) => t.path === path)
    },
    removeRightTab(path: string) {
      const index = this.tabs.findIndex((i) => i.path === path)
      this.tabs = this.tabs.slice(0, index + 1)
    },
    removeAllTab() {
      this.tabs = [defaultTab]
    },
  },
})
