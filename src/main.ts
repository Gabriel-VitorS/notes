import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { VueFire, VueFireAuth } from 'vuefire'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
