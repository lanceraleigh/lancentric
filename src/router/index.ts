import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ContactView from "../views/ContactView.vue";
import ProjectsView from "../views/ProjectsView.vue";
import LoginPage from "../components/login/LoginPage.vue";
import LandingPage from "../views/LandingPage.vue";
import Custom404Page from "../views/Custom404Page.vue";
import CurrentLanguageHomeView from "../views/CurrentLanguageHomeView.vue";

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
    component: AboutView,
    meta: {
      title: "About",
    },
  },
  {
    path: "/projects",
    name: "Projects",
    component: ProjectsView,
    meta: {
      title: "Projects",
    },
  },
  {
    path: "/contact",
    name: "Contact",
    component: ContactView,
    meta: {
      title: "Contact",
    },
  },
  {
    path: "/login",
    name: "Login",
    component: LoginPage,
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
    component: LandingPage,
    meta: {
      title: "Lancentric: Master Languages Today",
    },
  },
  {
    path: "/lancentric/letslearn",
    name: "Learning",
    component: CurrentLanguageHomeView,
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
