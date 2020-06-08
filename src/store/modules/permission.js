import { asyncRoutes, constRoutes } from "@/router";

function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some((role) => route.meta.roles.includes(role));
  } else {
    return true;
  }
}
export function filterAsyncRoutes(routes, roles) {
  const res = [];
  routes.forEach((route) => {
    // 复制⼀一份
    const tmp = { ...route };

    // 如果用户有访问权则加⼊结果路由表
    if (hasPermission(roles, tmp)) {
      // 如果存在⼦子路路由则递归过滤之
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles);
      }
      res.push(tmp);
    }
  });

  return res;
}

const state = {
  routes: [], // 完整路路由表
  addRoutes: [], // 用户可访问路路由表
};
const mutations = {
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes;
    state.routes = constRoutes.concat(routes);
  },
};

const actions = {
  // 路由⽣成：在得到用户角色后会第⼀时间调用
  generateRoutes({ commit }, roles) {
    return new Promise((resolve) => {
      let accessedRoutes;
      //   ⽤用户是管理理员则拥有完整访问权限
      if (roles.includes("admin")) {
        accessedRoutes = asyncRoutes || [];
      } else {
        //   否则需要根据⻆角⾊色做过滤处理理
        accessedRoutes = filterAsyncRoutes(asyncRoutes, roles);
      }
      commit("SET_ROUTES", accessedRoutes);
      resolve(accessedRoutes);
    });
  },
};

export default { namespaced: true, state, mutations, actions };
