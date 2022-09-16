import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import lodash from "lodash";

const app = createApp(App);
app.config.globalProperties.$_ = lodash;
app.use(store).use(router).mount("#app");
