import router from "./router";
import store from "./store";
import { getToken } from "./utils/auth";

// 白名单
const whiteList = ["/login"];

router.beforeEach(async (to, from, next) => {
  // 1.获取令牌
  const hasToken = getToken();
  //   已登陆
  if (hasToken) {
    //   还去登录页 重定向至首页
    if (to.path === "/login") {
      next({ path: "/" });
    } else {
      // 已经获得角色权限
      const hasRoles = store.getters.roles && store.getters.roles.length > 0;
      if (hasRoles) {
        //   走
        next();
      } else {
        // 1.先获取角色信息
        const { roles } = await store.dispatch("user/getInfo");
        // 2.根据角色信息获取对应的路由权限
        const accessRoutes = await store.dispatch(
          "permission/generateRoutes",
          roles
        );
        // 3.添加路由
        router.addRoutes(accessRoutes);
        next({ ...to, replace: true });
      }
    }
  } else {
    //   未登录
    // 白名单放行
    if (whiteList.indexOf(to.path) !== -1) {
      next();
    } else {
      next(`/login?redirect=${to.path}`);
    }
  }
});
