<template>
  <ul>
    <tree :model="model"></tree>
  </ul>
</template>

<script>
import tree from "./test1";
export default {
  components: {
    tree,
  },
  data() {
    return {
      model: {
        label: "一级 1",
        children: [
          {
            label: "二级 1-1",
            children: [
              {
                label: "三级 1-1-1",
              },
            ],
          },
        ],
      },
    };
  },
};
</script>

<style></style>
