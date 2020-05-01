<template>
  <div>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object
    },
    rules: {
      type: Object
    }
  },
  provide() {
    return {
      form: this
    };
  },
  methods: {
    validate(cb) {
        // 校验每个带porp的子组件 返回Promise数组
      const tasks = this.$children
        .filter(item => item.prop)
        .map(item => item.validator());

      Promise.all(tasks)
        .then(() => cb(true))
        .catch(() => cb(false));
    }
  }
};
</script>

<style>
</style>