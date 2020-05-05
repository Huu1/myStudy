<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <router-link to="/myform" tag="a">表单</router-link>
    <br>
    <router-link to="/tree" tag="a">tree</router-link>
    <router-link to="/crumb" tag="a">Crumb</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {}
};
</script>
