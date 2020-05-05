<template>
  <div>
    <h3>{{$store.state.count}}</h3>
    <button @click="add">add</button>
    <button @click="asyncAdd">asyncAdd</button>
    <button @click="gettersAdd">gettersAdd</button>
  </div>
</template>

<script>
export default {
  methods: {
    add() {
      this.$store.commit("add", 2);
    },
    asyncAdd() {
      this.$store.dispatch("asyncAdd", 3).then(res => {
        if (res.errno == 0) {
          alert(res.msg);
        }
      });
    },
    gettersAdd() {
      alert(this.$store.getters.countNum)
    }

  }
};
</script>

<style>
</style>