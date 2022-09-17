import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import Functions from "./helpers/utilities/Functions";

const app = createApp(App);
app.config.globalProperties.$_ = Functions;
app.use(store).use(router).mount("#app");
