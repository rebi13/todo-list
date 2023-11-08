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

// Plugins
import { registerPlugins } from "@/plugins";

const app = createApp(App);

app.use(VueApexCharts);

registerPlugins(app);

app.mount("#app");
