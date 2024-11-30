import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

createApp(App).mount('#app')

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';  // Mengimpor router yang sudah kita buat

createApp(App)
  .use(router)  // Menyertakan router ke aplikasi Vue
  .mount('#app');
