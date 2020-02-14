import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/auth/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue")
  },
  {
    path: "/",
    redirect: "/dashboard",
    name: "Layout",
    component: () => import(/* webpackChunkName: "layout" */ "../components/Layout.vue"),
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: () => import(/* webpackChunkName: "dashboard" */ "../views/Dashboard.vue")
      },
      {
        path: "users",
        name: "Users",
        component: () => import(/* webpackChunkName: "users" */ "../views/Users.vue")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
