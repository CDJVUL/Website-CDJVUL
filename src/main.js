import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.min.css";
import App from './App.vue';
import { VueCompareImage } from "vue3-compare-image";
import { createApp } from 'vue';
import router from './router';

const app = createApp(App);

app.config.productionTip = false

app.use(router);
app.use(VueCompareImage)

app.mount('#app');