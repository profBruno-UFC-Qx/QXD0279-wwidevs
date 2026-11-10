import { createApp } from 'vue'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import './style.css'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import {createPinia} from "pinia";
import router from "./routes";

createApp(App)
    .use(vuetify)
    .use(createPinia())
    .use(router)
    .mount('#app')
