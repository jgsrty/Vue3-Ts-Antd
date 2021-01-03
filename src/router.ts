import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";

import Login from "./pages/Login.vue";
import Admin from "./pages/Admin.vue";
import Alarm from "./pages/Alarm.vue";
import Home from "./pages/Home.vue";
import Keywords from "./pages/Keywords.vue";
import Report from "./pages/Report.vue";

const router = createRouter({
  history: createWebHistory(),
  // history: createWebHashHistory(),
  routes: [
    { path: "/login", component: Login },
    {
      path: "/",
      component: Admin,
      redirect: "home",
      children: [
        { path: "home", component: Home },
        { path: "alarm", component: Alarm },
        { path: "keywords", component: Keywords },
        { path: "report", component: Report },
      ],
    },
  ],
});

export default router;
