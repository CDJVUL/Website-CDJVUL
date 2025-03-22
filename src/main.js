import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import App from './App.vue';
import { createApp } from 'vue';
import router from './router';

const app = createApp(App);

app.config.productionTip = false

app.use(router);

app.mount('#app');