import { createApp } from "vue";
import { createAuth0 } from "@auth0/auth0-vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

const app = createApp(App);
app
  .use(
    createAuth0({
      domain: "domain",
      client_id: "id",
      redirect_uri: "redirect",
    })
  )
  .use(store)
  .use(router)
  .mount("#app");
