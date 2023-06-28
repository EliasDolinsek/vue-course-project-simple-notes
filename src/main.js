import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'

const pinia = createPinia()
const app = createApp(App)

// TODO: 1. Installiere den Router über "npm install vue-router@4"
// TODO: 2. Definiere eine Route für home und für notes in router/index.js
// TODO: 3. Installiere den Router in Vue

app.use(pinia)
app.mount('#app')
