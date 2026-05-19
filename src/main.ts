import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { VueFire, VueFireAuth } from 'vuefire'
import {firebaseApp} from './firebase'

import Toast from "vue-toastification";
import { POSITION  } from "vue-toastification";

import "vue-toastification/dist/index.css";
import '@/css/main.css'

const app = createApp(App)

app.use(Toast,{
    transition: "Vue-Toastification__fade",
    maxToasts: 20,
    newestOnTop: true,
    position: POSITION.TOP_RIGHT,
    timeout: 5000,
    closeOnClick: true,
    pauseOnFocusLoss: false,
    pauseOnHover: false,
    draggable: false,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: true,
    closeButton: "button",
    icon: true,
    rtl: false
})

app.use(VueFire,{
    firebaseApp,
    modules:[
        VueFireAuth()
    ]
})

app.use(createPinia())
app.use(router)

app.mount('#app')
