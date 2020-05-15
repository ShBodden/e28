<!-- src/components/ShowEstablishment.vue -->
<template>


  <div class="establishment">
    <div data-test='establishment-name' class="establishment-name">{{ establishment.name }}</div>
    <router-link :to='{ name: "establishment", params: {slug: establishment.slug}}'>
    <img data-test='establishment-pic' class="establishment-thumb" :src='imageSrc' /></router-link>
    <p class="establishment-description">{{ establishment.description }}</p>
    <br>
    <p> {{ establishment.review }} <br> - {{ establishment.reviewer }}</p>
    <br>
    
   
  </div>

</template>

<script>
export default {
  name: "",

  props: ['establishment'],

  data: function() {
    return {};
    
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
<style></style>