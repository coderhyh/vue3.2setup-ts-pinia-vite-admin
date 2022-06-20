import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import pinia from "./store";
// import second from './common/'
import "~/assets/css/base.css";
import "uno.css";
import 'animate.css';

const app = createApp(App);
app.use(router);
app.use(pinia);
app.mount("#app");
