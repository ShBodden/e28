
<template>
  <div id="establishment-page">
    <h1>{{this.establishment.name}}</h1>
   <h2> {{ this.establishment.address }} </h2>
    <div><img class="establishment-thumb" :src='imageSrc' /></div>
<br>
     {{this.establishment.review}} - {{this.establishment.reviewer}}
  </div>
</template>

<script>
import * as app from "@/common/app.js";
export default {
  name: "establishmentPage",
  props: ["slug"],

  components: {},

  data: function() {
    return {
      establishment: null
    };
  },

  mounted: function() {
    app.api.find("establishments", "slug", this.slug).then(response => {
      this.establishment = response;
    });
  },

   computed: {
    imageSrc: function() {
      try {
          return require("@/assets/images/establishments/" + this.establishment.slug + ".jpg")
      }
      catch (e) {
          return require("@/assets/images/establishments/image-not-available.jpg")
      }
      
    }
  }
};
</script>