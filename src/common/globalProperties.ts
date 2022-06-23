import { App } from 'vue'

import { $alert, $message } from './utils'
interface GlobalProperties {
  $message(message: string, type: any): () => any
  $alert(text: string, title: string, callback: () => any): () => any
  [k: string]: unknown
}
const globalProperties: GlobalProperties = {
  $message,
  $alert,
}
export default {
  install(Vue: App) {
    for (const key in globalProperties) {
      Vue.config.globalProperties[key] = globalProperties[key]
    }
  },
}
