import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./views/HomeView.vue";
import MainView from "./views/MainView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/main",
    name: "main",
    component: MainView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition || { top: 0 };
    } else {
      return { top: 0 };
    }
  },
});

export default router;
