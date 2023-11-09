/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";

// Libaries
import axios from "axios";
import VueApexCharts from "vue3-apexcharts";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

// Plugins
import { registerPlugins } from "@/plugins";

const app = createApp(App);
app.component("VueDatePicker", VueDatePicker);
app.use(VueApexCharts);

// [axios / http 통신]
app.config.globalProperties.$axios = axios;

registerPlugins(app);

app.mount("#app");
