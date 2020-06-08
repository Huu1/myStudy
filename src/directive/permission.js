import store from "../store/index";

export default {
  inserted(el, binding) {
    const { value: permissonRoles } = binding;
    let roles = store.getters.roles;
    if (
      permissonRoles &&
      Array.isArray(permissonRoles) &&
      permissonRoles.length > 0
    ) {
      const hasPermisson = roles.some((role) => {
        return permissonRoles.includes(role);
      });
      if (!hasPermisson) {
        el.parentNode && el.parentNode.removeChild(el);
      }
    } else {
      throw new Error("异常");
    }
  },
};
