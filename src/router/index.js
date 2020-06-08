import Vue from "vue";
import VueRouter from "vue-router";
import layout from "../views/layout.vue";
import MyForm from ".././VUE/MyForm";
import Tree from ".././VUE/MyTree";
import Crumb from ".././VUE/MyCrumb";
Vue.use(VueRouter);

// 通用页面路由
export const constRoutes = [
  {
    path: "/",
    name: "home",
    redirect: "/home",
    component: layout,
    meta: [{ title: "主頁" }],
    children: [
      {
        path: "home",
        name: "home",
        component: () => import("@/views/Home"),
        meta: {
          title: "Home",
          icon: "q",
        },
      },
      {
        path: "myform",
        name: "myform",
        component: MyForm,
        meta: {
          title: "Form",
        },
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login"),
    hidden: true,
  },
];
// 需要权限的路由
export const asyncRoutes = [
  {
    path: "/about",
    component: layout,
    redirect: "/about/index",
    children: [
      {
        path: "index",
        component: () => import("@/views/about.vue"),
        name: "about",
        meta: { title: "About", roles: ["admin"] },
      },
      {
        path: "tree",
        name: "tree",
        component: Tree,
        meta: {
          title: "tree",
          roles: ["admin"],
        },
      },
      {
        path: "crumb",
        name: "crumb",
        component: Crumb,
        meta: {
          title: "crumb",
          roles: ["admin", "editor"],
        },
      },
    ],
  },
];

const router = new VueRouter({
  mode: "hash",
  routes: constRoutes,
});

export default router;
