import './assets/main.css'
import 'primeicons/primeicons.css'
import router from './router'
import ToastPlugin from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-bootstrap.css';

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.use(router);
app.use(ToastPlugin);
app.mount('#app')
