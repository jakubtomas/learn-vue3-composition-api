import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap";
import $ from "jquery";
import Popper from "popper.js";

createApp(App).use(router).mount("#app");

window.$ = $;
window.Popper = Popper;
