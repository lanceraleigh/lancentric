import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Custom404Page from "../views/Custom404Page.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
    meta: {
      title: "Lance Raleigh: Dev and Polyglot",
    },
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/AboutView.vue"),
    meta: {
      title: "About",
    },
  },
  {
    path: "/projects",
    name: "Projects",
    component: () => import("../views/ProjectsView.vue"),
    meta: {
      title: "Projects",
    },
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/ContactView.vue"),
    meta: {
      title: "Contact",
    },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/LoginPage.vue"),
    meta: {
      title: "Log-In to Lancentric",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () =>
      //   import(/* webpackChunkName: "about" */ "../views/LandingPage.vue"),
    },
  },
  {
    path: "/lancentric",
    name: "LancentricLandingPage",
    component: () => import("../views/LandingPage.vue"),
    meta: {
      title: "Lancentric: Master Languages Today",
    },
  },
  {
    path: "/lancentric/profile",
    name: "UserProfile",
    component: () => import("../views/ProfileView.vue"),
    meta: {
      title: "User Account Information",
    },
  },
  {
    path: "/lancentric/letslearn",
    name: "Learning",
    component: () => import("../views/CurrentLanguageHomeView.vue"),
    meta: {
      title: "Let's Get Learning",
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "PageNotFound",
    component: Custom404Page,
    meta: {
      title: "404: Page Not Found",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to) => {
  document.title = `${to.meta.title}`;
});

export default router;
