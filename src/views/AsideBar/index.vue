<template>
  <div>
    <item
      v-for="route of permission_routes"
      :key="route.path"
      :model="route"
      :basePath="route.path"
    />
  </div>
</template>

<script>
import item from "./menu";
import { mapGetters } from "vuex";
export default {
  name: "SlideBar",
  computed: {
    ...mapGetters(["permission_routes"]),
  },
  components: {
    item,
  },
};
</script>

<style></style>
