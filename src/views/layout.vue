<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png" />
    <Aside />
    <router-view></router-view>
  </div>
</template>

<script>
import Aside from "./AsideBar";
// import Aside from "./sAsideBar";
export default {
  components: { Aside },
  data() {
    return {};
  },
};
</script>

<style></style>
