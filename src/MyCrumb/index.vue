<template>
  <div>
    <div v-for="(item,index) in data" :key="index" class="index">
      <router-link :to="{name:item}" tag="a">{{item}}</router-link>
    </div>hello 大家好 我是面包屑导航, 你们好呀
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: []
    };
  },
  watch: {
    $route: {
      handler() {
        this.data = this.$route.matched.map(m => m.name || m.redirect);
      },
      immediate: true
    }
  }
};
</script>

<style>
.index{
  
}
</style>