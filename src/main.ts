import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import 'primevue/resources/themes/md-light-indigo/theme.css';
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

let app = createApp(App);
app.config.globalProperties.$primevue = {ripple: true};
app.use(router).mount("#app");