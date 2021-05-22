import { createRouter, createWebHistory } from "vue-router";
import GameDetailes from "../Views/GameDetailes";
import Home from "../Views/Home";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/game/:id",
    name: "GameDetailes",
    component: GameDetailes,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
