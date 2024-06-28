import { createApp } from 'vue'
// import App from './App.vue'
// import App from './AppRoutes.vue'
import App from './AppApi.vue'

import router from './routes'

createApp(App).use(router).mount('#app')
