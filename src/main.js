import { createApp } from "vue";
import { createPinia } from "pinia";
import VueAxios from "vue-axios";


import App from "./App.vue";
import router from "./router";
import axios from "axios";

import "./assets/main.css";

// Vuetify
import "vuetify/styles";

import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";


const app = createApp(App);
const vuetify = createVuetify({
  components,
  directives,
});

app.use(VueAxios, axios);
app.use(createPinia());
app.use(router);
app.use(vuetify);

app.mount("#app");
