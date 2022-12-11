import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/style.css'
import '../node_modules/aos/dist/aos.css'
import AOS from 'aos'
AOS.init();
const app = createApp(App)

app.use(router)

app.mount('#app')
