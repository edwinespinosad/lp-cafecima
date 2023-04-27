import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '../src/sass/index.scss'

<<<<<<< HEAD
=======
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App)
>>>>>>> 808cd94719dda9a22b29f0187faad3aa6c9f32f5

const vuetify = createVuetify({
  components,
    directives,
    styles: { configFile: '../src/sass/setting.scss' }
  })

  const app = createApp(App).use(vuetify)
app.use(router)
<<<<<<< HEAD


=======
app.use(vuetify)
>>>>>>> 808cd94719dda9a22b29f0187faad3aa6c9f32f5
app.mount('#app')
