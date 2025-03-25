import { createApp } from 'vue'
import { createPinia } from 'pinia'

import 'reset-css'
import '@fontsource/source-sans-pro';

import './main.css'

import App from './App.vue'

const app = createApp(App)

app.use(createPinia())

app.mount('#root')
