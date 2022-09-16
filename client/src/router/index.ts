import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CurrentLanguageHomeView from "../views/CurrentLanguageHomeView.vue";
import LandingPage from "../views/LandingPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  // {
  //   path: "/about",
  //   name: "AboutMe",
  //   component: AboutView,
  // },
  // {
  //   path: "/projects",
  //   name: "Projects",
  //   component: ProjectsView,
  // },
  // {
  //   path: "/contact",
  //   name: "Contact",
  //   component: ContactView,
  // },
  {
    path: "/lancentric",
    name: "LancentricLandingPage",
    component: LandingPage,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/LandingPage.vue"),
    children: [
      {
        path: "/letslearn",
        name: "Learning",
        component: CurrentLanguageHomeView,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
