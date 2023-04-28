import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '../src/sass/index.scss'

import 'vuetify/styles';




const vuetify = createVuetify({
  components,
    directives,
    styles: { configFile: '../src/sass/setting.scss' }
  })

  const app = createApp(App).use(vuetify)
app.use(router)
app.use(vuetify)
app.mount('#app')
