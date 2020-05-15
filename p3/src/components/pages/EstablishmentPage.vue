
<template>
  <div id="establishment-page" v-if='establishment'>
    <h1 data-test='establishment-name'>{{establishment.name}}</h1>
    <h2>{{ this.establishment.address }}</h2>
    <div>
      <img class="establishment-thumb" :src="imageSrc" />
    </div>
    <br />
    {{this.establishment.review}} - {{this.establishment.reviewer}}
  </div>
</template>

<script>
//import * as app from "@/common/app.js";

export default {
  //name: "",
  props: ["slug"],

  components: {},

  data: function() {
    return {};
  },

  mounted: function() {},

  computed: {
    establishment() {
      return this.$store.getters.getEstablishmentBySlug(this.slug);
    },
    imageSrc: function() {
      try {
        return require("@/assets/images/establishments/" +
          this.establishment.slug +
          ".jpg");
      } catch (e) {
        return require("@/assets/images/establishments/image-not-available.jpg");
      }
    },
    establishments: function() {
      return this.$store.state.establishments;
    }
  }
};
</script>