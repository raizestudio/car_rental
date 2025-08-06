import './assets/css/main.css'

// Helpers
import { capitalize, capitalizeWords } from '@/utils/helpers/textHelper'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.config.globalProperties.$capitalize = capitalize
app.config.globalProperties.$capitalizeWords = capitalizeWords

app.use(createPinia())
app.use(router)

app.mount('#app')
