import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ContactView from "../views/ContactView.vue";
import ProjectsView from "../views/ProjectsView.vue";
import LandingPage from "../views/LandingPage.vue";
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
    name: "AboutMe",
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
    path: "/lancentric",
    name: "LancentricLandingPage",
    component: LandingPage,
    meta: {
      title: "Lancentric: Master Languages Today",
    },
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
        meta: {
          title: "Let's Get Learning",
        },
      },
    ],
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
