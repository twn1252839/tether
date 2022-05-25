import { createApp } from "vue";
import { I18N } from "./i18n";
import App from "./App.vue";

const app = createApp(App);
app.use(I18N).mount("#app");
