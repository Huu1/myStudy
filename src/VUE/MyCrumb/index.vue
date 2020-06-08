<template>
  <div>
    <div class="index">
      <div v-for="(item, index) in data" :key="index">
        <router-link :to="{ name: item }" tag="a">{{ item }}</router-link>
        <span v-if="index < data.length - 1">></span>
      </div>
    </div>
    ssssssssssssssssssssss
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [],
    };
  },
  watch: {
    $route: {
      handler() {
        this.data = this.$route.matched.map((m) => m.name || m.redirect);
      },
      immediate: true,
    },
  },
};
</script>

<style>
.index {
  display: flex;
}
</style>
