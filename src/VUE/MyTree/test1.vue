<template>
  <li class="tree">
    <div @click="toggle">
      {{ model.label }}
      <span v-if="isFolder">{{ open ? "+" : "-" }}</span>
    </div>
    <ul v-show="open" v-if="isFolder">
      <tree
        v-for="data of model.children"
        :key="data.label"
        :model="data"
      ></tree>
    </ul>
  </li>
</template>

<script>
export default {
  name: "tree",
  props: {
    model: {
      type: Object,
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
  },
  computed: {
    isFolder() {
      return this.model.children && this.model.children.length;
    },
  },
};
</script>

<style></style>
