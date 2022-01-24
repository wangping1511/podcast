import { createApp } from 'vue'
import App from './App.vue'
import 'virtual:windi.css'
import router from '@/router'
import { setupStore } from '@/store'
import '@/utils/flexible'
import '@/styles/index.scss'

const app = createApp(App)
  .use(router)
setupStore(app)
app.mount('#app')
