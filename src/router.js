import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
const routes = [
  {
    path: "/home",
    component: Home,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("server") != null) {
        next();
      } else {
        next("/login");
      }
    },
  },
  { path: "/login", component: Login },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
