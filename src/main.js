import { createApp } from "vue";
import App from "./App.vue";
import MyButton from "./components/MyButton";

const app = createApp(App).component("MyButton", MyButton);
app.mount("#app");
