<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <router-link to="/myform" tag="a">表单</router-link>
    <br />
    <router-link to="/tree" tag="a">tree</router-link>
    <br />
    <router-link to="/crumb" tag="a">Crumb</router-link>
    <br />
    <router-link to="/vuex">Vuex</router-link> -->

    <!-- <router-view></router-view> -->
    home home home home home home home
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      list: [
        5,
        10,
        52,
        48,
        4,
        9,
        57,
        30,
        35,
        55,
        13,
        21,
        31,
        4,
        84,
        3,
        1,
        3215,
        132,
        513,
      ],
    };
  },
  created() {
    // this.list.sort(function(a, b) {
    //   return a - b;
    // });
    // let a = this.binarySearch(this.list, 132);
    // console.log(a);
  },
  methods: {
    // binarySearch(arr, num) {
    //   let low = 0;
    //   let high = arr.length - 1;
    //   while (low < high) {
    //     let mid = parseInt((high - low) / 2);
    //     if (num > arr[mid]) low = mid + 1;
    //     else if (num < arr[mid]) high = mid - 1;
    //     else return mid;
    //   }
    // }
  },
};
</script>
