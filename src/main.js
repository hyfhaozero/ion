import "./assets/main.css";
import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./router.js";
import App from "@/App.vue";

const app = createApp(App);
app.use(router);
app.use(createPinia());
console.log('App is being mounted...'); 
app.mount("#app");
