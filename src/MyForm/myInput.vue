<template>
  <div>
    <input :value="value" @input="hanldChange($event)" v-bind="$attrs" />
  </div>
</template>

<script>
export default {
  name: "myInput",
  props: {
    value: {
      type: String
    }
  },
  methods: {
    hanldChange(e) {
      this.$emit("input", e.target.value);
      // 通知父组件校验
      this.$parent.$emit("validator");
    }
  }
};
</script>

<style>
</style>