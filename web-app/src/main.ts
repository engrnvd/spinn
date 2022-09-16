import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './components/U/u-core.scss'

const app = createApp(App)

app.use(router)

app.mount('#app')
