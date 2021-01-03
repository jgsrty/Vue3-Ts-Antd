import { createApp } from "vue";
import App from "./App.vue";
import routes from "./router";
// antd
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

// createApp(App).mount("#app");
let app = createApp(App);
app.use(routes);
app.use(Antd);
app.mount("#app");