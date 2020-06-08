<template>
  <li class="tree" v-if="!model.hidden">
    <div @click="toggle">
      <span v-if="isFolder">
        <span v-if="model.meta && model.meta.title">{{
          model.meta.title
        }}</span>
        <span>{{ open ? "-" : "+" }}</span></span
      >
      <template v-else>
        <router-link
          v-if="model.meta && model.meta.title"
          :to="resolvePath(model.path)"
          >{{ model.meta.title }}</router-link
        >
      </template>
    </div>
    <ul v-show="open" v-if="isFolder">
      <tree
        v-for="route of model.children"
        :key="route.path"
        :model="route"
        :base-path="resolvePath(model.path)"
      ></tree>
    </ul>
  </li>
</template>

<script>
import path from "path";
export default {
  name: "tree",
  props: {
    model: {
      type: Object,
    },
    basePath: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      open: false,
    };
  },
  methods: {
    toggle() {
      if (this.isFolder) {
        this.open = !this.open;
      }
    },
    // 拼接
    resolvePath(routePath) {
      return path.resolve(this.basePath, routePath);
    },
  },
  computed: {
    isFolder() {
      return this.model.children && this.model.children.length;
    },
  },
};
</script>

<style></style>
