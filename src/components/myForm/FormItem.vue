<template>
  <div>
    <label v-if="label">{{label}}</label>
    <slot />
    <span v-if="errMessage">{{errMessage}}</span>
  </div>
</template>

<script>
import Schema from "async-validator";
export default {
  name: "Form-item",
  props: {
    label: {
      type: String,
      default: ""
    },
    prop: {
      type: String
    }
  },
  inject: ["form"],
  data() {
    return {
      errMessage: ""
    };
  },
  methods: {
    validator() {
      // 1.从父组件获取(值和其校验规则)
      const value = this.form.data[this.prop];
      const rules = this.form.rules[this.prop];

      // 2.校验
      const desc = {
        [this.prop]: rules
      };
      const schema = new Schema(desc);
      // 返回 一个promise
      return schema.validate({ [this.prop]: value }, errors => {
        if (errors) {
          this.errMessage = this.prop + errors[0].message;
        } else {
          this.errMessage = "";
        }
      });
    }
  },
  mounted() {
    // 监听校验事件
    this.$on("validator", () => {
      this.validator();
    });
  }
};
</script>

<style>
</style>