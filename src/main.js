import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import './assets/style/main.scss';

const app = createApp(App)
app.mount('#app')
app.use(VueAxios, axios)
