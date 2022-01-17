import { createApp } from 'vue'
import App from './App.vue'
import 'virtual:windi.css'
import router from '@/router'
import { createPinia } from 'pinia'
import '@/utils/flexible'

createApp(App)
  .use(router)
  .use(createPinia())
  .mount('#app')
