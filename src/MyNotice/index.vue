<template>
  <div v-if="isShow">
    <h1>{{title}}</h1>
    <span>{{message}}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false
    };
  },
  props: {
    title: {
      type: String,
      default: ""
    },
    message: {
      type: String,
      default: ""
    },
    duration: {
      type: Number,
      default: 1000
    }
  },
  methods: {
    show() {
      this.isShow = true;
      setTimeout(() => {
        this.hide();
      }, this.duration);
    },
    hide() {
      this.isShow = false;
      this.remove();
    }
  }
};
</script>

<style>
</style>