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
import VueApexCharts from "vue3-apexcharts";

import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

// Plugins
import { registerPlugins } from "@/plugins";

const app = createApp(App);
app.component("VueDatePicker", VueDatePicker);
app.use(VueApexCharts);

registerPlugins(app);

app.mount("#app");
