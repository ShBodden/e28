<!-- src/components/ShowEstablishments.vue -->
<template>
  <div id="establishments">
    <h2>Establishments</h2>
    <show-establishment
      v-for="establishment in establishments"
      :key="establishment.id"
      :establishment="establishment"
    ></show-establishment>
  </div>
</template>


<script>
import ShowEstablishment from "@/components/ShowEstablishment.vue";
//import * as app from "@/common/app.js";

export default {
  name: "",

  components: {
    "show-establishment": ShowEstablishment
  },

  data: function() {
    return {};
  },
  mounted: function() {},

  computed: {
    establishments: function() {
      return this.$store.state.establishments;
    }
  }
};
</script>
<style></style>