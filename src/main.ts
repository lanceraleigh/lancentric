import { createApp } from "vue";
import { createAuth0 } from "@auth0/auth0-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

const app = createApp(App);
app
  .use(
    createAuth0({
      domain: "dev-csmlbd3j.us.auth0.com",
      client_id: "ezlZKqkMrAXhUrtA96diwwYKHAPwqVgu",
      redirect_uri: "https://lanceraleigh.com/lancentric",
    })
  )
  .use(store)
  .use(router)
  .mount("#app");
