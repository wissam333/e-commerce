import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

/* import Bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

/* import bootstrap icons */
import 'bootstrap-icons/font/bootstrap-icons.css'

/* import mdb */
import 'mdb-vue-ui-kit/css/mdb.min.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
if (history.scrollRestoration) {
  history.scrollRestoration = 'manual'
}
