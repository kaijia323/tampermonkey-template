import { createApp, version } from "vue";
import App from "./App.vue";
import "./style.scss";

console.log(`Vue version: ${version}`);

const app = createApp(App);

const div = document.createElement("div");
div.id = "tampermonkey-app";
document.body.appendChild(div);
app.mount(div);

console.log(app);
